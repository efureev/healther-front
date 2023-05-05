import type { StatusColorEnum, StatusEnum } from '@/enums/Status'

export type Status = keyof typeof StatusEnum

export type StatusColor = keyof typeof StatusColorEnum
