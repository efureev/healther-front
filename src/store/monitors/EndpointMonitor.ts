import type { ComputedRef } from 'vue'
import { EndpointCheck } from './EndpointCheck'
import { LimitedQueue } from './LimitedQueue'
import type { EndPoint } from '@/@types/endpoints'
import type { HeartBeatEvent } from '@/@types/events'
import { StatusEnum } from '@/enums/Status'
import type { Status } from '@/@types/monitor'

export default class EndpointMonitor {
  public readonly id: string
  public readonly name: string
  public readonly url: string
  public readonly beatCount: Ref<number> = ref(0)
  public readonly checks = new LimitedQueue<EndpointCheck>(20)
  public readonly lastCheck: Ref<Nullable<EndpointCheck>> = ref(null)

  constructor(endpoint: EndPoint) {
    this.id = endpoint.id
    this.url = endpoint.url
    this.name = endpoint.name
  }

  public addCheck(heartBeat: HeartBeatEvent) {
    this.incBeat()
    const check = new EndpointCheck(heartBeat)
    this.checks.push(check)
    this.lastCheck.value = check
  }

  private incBeat() {
    this.beatCount.value += 1
  }

  public getLastStatus(): ComputedRef<Status> {
    return computed(() => {
      if (this.lastCheck.value)
        return this.lastCheck.value.status()

      return StatusEnum.PENDING
    })
  }

  public getStatus(): ComputedRef<Status> {
    return computed(() => {
      const list = {
        [StatusEnum.WARNING]: 0,
        [StatusEnum.FAILED]: 0,
        [StatusEnum.OK]: 0,
        [StatusEnum.PENDING]: 0,
      }

      this.checks.toArray().forEach((check) => {
        list[check.status()] += 1
      })

      if (list[StatusEnum.FAILED] > 0) {
        if (list[StatusEnum.OK] > 0)
          return StatusEnum.WARNING
        else
          return StatusEnum.FAILED
      }

      if (list[StatusEnum.WARNING] > 0) {
        if (list[StatusEnum.OK] > 0) {
          return StatusEnum.WARNING
        }
        else {
          if (list[StatusEnum.FAILED] > 0)
            return StatusEnum.FAILED
        }
        return StatusEnum.WARNING
      }

      if (list[StatusEnum.OK] > 0)
        return StatusEnum.OK

      return StatusEnum.PENDING
    })
  }
}
