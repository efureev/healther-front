import type { EndPoints } from './endpoints'

export type Services = Service[]

export interface Service {
  name: string,
  url: string
  points: EndPoints
}
