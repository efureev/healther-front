import type { RuleErrorTypeEnum } from '@/enums/ErrorTypes'

export interface Event {
  name: string,
  payload: any
}

// type RuleErrorType = keyof typeof RuleErrorTypeEnum

interface RuleError {
  name: string
  type: RuleErrorTypeEnum
}

interface Rule {
  id: string
}

interface RuleResult {
  error: Nullable<RuleError>,
  rule: Rule,
}

type RulesResult = RuleResult[]

export interface HeartBeatEndpoint {
  id: string,
}

export interface HeartBeatEvent {
  endpoint: HeartBeatEndpoint,
  rulesResult: RulesResult,
  processing: {
    duration: {
      value: number,
      str: string,
    }
    error: string
  }
}
