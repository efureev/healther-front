import { isArray } from '@feugene/mu'
import EndpointMonitor from './EndpointMonitor'
import { ServiceMonitor } from './ServiceMonitor'
import type { EndPoint, EndPointID } from '@/@types/endpoints'
import type { Service } from '@/@types/services'
import type { HeartBeatEvent } from '@/@types/events'

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

  const setEndpoint = (endpoint: EndPoint, beatLimit: number) => {
    const monitor = new EndpointMonitor(endpoint, { queueLimit: beatLimit })
    endpointMonitorList.set(monitor.id, monitor)

    return monitor
  }

  const setService = (service: Service, beatLimit: number): ServiceMonitor => {
    const serviceMonitor = new ServiceMonitor(service)
    serviceMonitorList.set(serviceMonitor.id, serviceMonitor)

    service.points.forEach((ep) => {
      serviceMonitor.addEndpointMonitor(setEndpoint(ep, beatLimit))
    })

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
