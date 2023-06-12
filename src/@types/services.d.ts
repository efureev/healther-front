import type { EndPoints } from './endpoints'

export type Services = Service[]

export interface Service {
  id: string,
  name: string,
  url: string
  points: EndPoints
}
