import type Headers from './http'
import type { Rules } from './rules'

export type EndPointID = string

export interface EndPointParam {
  [prop: string]: any

  executorInterval: bigint
  headers: Headers
}

export interface EndPoint {
  id: EndPointID
  name: string
  url: string
  params: EndPointParam
  rules: Rules
}

export type EndPoints = EndPoint[]
