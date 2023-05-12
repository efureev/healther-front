import { isObject } from '@feugene/mu'
import type { Event, HeartBeatEvent } from '@/@types/events'

function toJson(data: string): Nullable<Event> {
  try {
    const event = JSON.parse(data)
    if (isObject(event))
      return event

    return null
  }
  catch (e) {
    return null
  }
}

type EventTypeFn = (event: HeartBeatEvent) => void

interface EventFnMap {
  [props: string]: EventTypeFn
}

export class WsEventsRouter {
  private url: string
  private options: EventFnMap

  private ws: WebSocket | undefined

  constructor(url: string, options: EventFnMap) {
    this.url = url
    this.options = options
    // this.ws = new WebSocket(url)
  }

  public start() {
    this.ws = new WebSocket(this.url)

    // this.ws.onerror = (ev: Event) => {
    //   console.error('error on wEbSocket', ev)
    // }

    this.ws.onmessage = (router => function (msg: MessageEvent) {
      router.pushEvent(msg)
      // console.log(performance.memory)
    })(this)
  }

  public stop() {
    this.ws?.close()
  }

  private getHandler(eventType: string): Undefinedable<EventTypeFn> {
    return this.options[eventType]
  }

  private pushEvent(msg: MessageEvent) {
    const event = toJson(msg.data)
    if (event === null)
      return

    const handler = this.getHandler(event.name)
    if (handler) {
      handler(event.payload)
      return
    }

    console.error(`Missing Handler for Event Type: ${event.name}`)
  }
}

let instance: Undefinedable<WsEventsRouter>

export function useWsEventsRouter(url: string, options: EventFnMap) {
  if (!instance)
    instance = new WsEventsRouter(url, options)
  return instance
}
