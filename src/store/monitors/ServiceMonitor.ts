import { match } from '@feugene/mu'
import type { ComputedRef } from 'vue'
import type { Service } from '@/@types/services'
import type EndpointMonitor from '@/store/monitors/EndpointMonitor'
import { StatusEnum } from '@/enums/Status'

export class ServiceMonitor {
  public readonly id: string

  public readonly status: ComputedRef<StatusEnum> = computed(() => this.computeStatus())

  // public readonly status: ComputedRef<StatusEnum> = computed(() => this.computeStatus())
  public readonly statusText: ComputedRef<string> = computed(() => this.computeStatusText())
  //
  public readonly endpointMonitors = new Map<string, EndpointMonitor>()

  constructor(service: Service) {
    this.id = service.url
  }

  private computeStatus(): StatusEnum {
    const list = {
      [StatusEnum.WARNING]: 0,
      [StatusEnum.FAILED]: 0,
      [StatusEnum.OK]: 0,
      [StatusEnum.PENDING]: 0,
    }

    this.endpointMonitors.forEach((epMonitor) => {
      list[unref(epMonitor.getStatus())] += 1
    })

    return this.strategy(list)
  }

  private strategy(list: { [prop: string]: number }): StatusEnum {
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
  }

  public computeStatusText(): string {
    return match(unref(this.status), {
      PENDING: 'Pending',
      OK: 'Ok',
      WARNING: 'Service has some troubles',
      FAILED: 'Service failed!',
    })
  }

  public addEndpointMonitor(monitor: EndpointMonitor) {
    this.endpointMonitors.set(monitor.id, monitor)
  }
}
