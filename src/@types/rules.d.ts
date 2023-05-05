export type RuleAction = 'eq' | 'neq' | 'lt' | 'lte' | 'gt' | 'gte' | 'exist' | 'contain'

export type Rules = Rule[]

export interface Rule {
  [prop: string]: any

  id: string
  action: RuleAction
  value: any
}
