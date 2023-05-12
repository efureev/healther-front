// import type { Status } from '@/@types/monitor'
import { StatusColorEnum, type StatusEnum } from '@/enums/Status'

export function statusToColor(status: StatusEnum): StatusColorEnum {
  return StatusColorEnum[status]
}
