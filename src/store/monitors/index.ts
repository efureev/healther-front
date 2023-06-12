import { isArray } from '@feugene/mu'
import EndpointMonitor from './EndpointMonitor'
import { ServiceMonitor } from './ServiceMonitor'
import type { EndPoint, EndPointID } from '@/@types/endpoints'
import type { Service } from '@/@types/services'
import type { HeartBeatEvent } from '@/@types/events'
import { getBeats } from '@/api/services'

// import { useMonitor } from '@/store/monitor'
// const serviceStore = useMonitor()

const serviceMonitorList = new Map<string, ServiceMonitor>()
const endpointMonitorList = new Map<string, EndpointMonitor>()

function toHeartBeatEvent(data: any): Nullable<HeartBeatEvent> {
  if (!data?.endpoint?.id || !isArray(data?.rulesResult))
    return null

  return <HeartBeatEvent>data
}

export function useMonitors() {
  const getEndpointMonitor = (id: EndPointID): Undefinedable<EndpointMonitor> => {
    return endpointMonitorList.get(id)
  }

  const getServiceMonitor = (id: string): Undefinedable<ServiceMonitor> => {
    return serviceMonitorList.get(id)
  }

  const setEndpoint = (endpoint: EndPoint, { beats, beatLimit }: {
    beats: HeartBeatEvent[]
    beatLimit: number
  }) => {
    const monitor = new EndpointMonitor(endpoint, { queueLimit: beatLimit })
    monitor.loadChecks(beats)

    endpointMonitorList.set(monitor.id, monitor)

    return monitor
  }

  const setService = (service: Service, beatLimit: number): ServiceMonitor => {
    const serviceMonitor = new ServiceMonitor(service)
    serviceMonitorList.set(serviceMonitor.id, serviceMonitor)

    getBeats(service.id).then((beats) => {
      service.points.forEach((ep) => {
        serviceMonitor.addEndpointMonitor(setEndpoint(ep, { beats, beatLimit }))
      })
    })
    // const beats = await getBeats(service.id)
    // console.log(beats)

    /*
    service.points.forEach((ep) => {
      serviceMonitor.addEndpointMonitor(setEndpoint(ep, beatLimit))
    })
    */

    return serviceMonitor
  }

  const setHeartBeat = (rawEvent: any) => {
    const event = toHeartBeatEvent(rawEvent)
    if (event === null)
      return

    // const pointId = event.endpoint.id
    const epMonitor = getEndpointMonitor(event.endpoint.id)
    if (epMonitor === undefined) {
      console.error(`Endpoint not found ${event.endpoint.id}`)
      return
    }

    epMonitor.addCheck(event)
  }

  return {
    getEndpointMonitor,
    setService,
    getServiceMonitor,
    setHeartBeat,
    // serviceList,
    // endpointList,
  }
}
