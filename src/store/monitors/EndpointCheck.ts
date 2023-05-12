import type { HeartBeatEvent } from '@/@types/events'
import { StatusEnum } from '@/enums/Status'
import { RuleErrorTypeEnum } from '@/enums/ErrorTypes'

interface errorsMap {
  [prop: string]: string[]
}

export class EndpointCheck {
  public readonly id: number
  public readonly result: HeartBeatEvent

  // public readonly status: StatusEnum
  public readonly errors: errorsMap = {
    [RuleErrorTypeEnum.FAILED]: [],
    [RuleErrorTypeEnum.WARNING]: [],
  }

  // public readonly status: ComputedRef<StatusEnum> = computed(() => this.compute())

  constructor(id: number, result: HeartBeatEvent) {
    this.id = id
    this.result = result

    this.buildErrorMap()
  }

  // private computeStatus(): StatusEnum {
  //   if (this.hasErrors())
  //     return StatusEnum.FAILED
  //
  //   return StatusEnum.OK
  // }
  private buildErrorMap() {
    this.result.rulesResult.forEach((rule) => {
      if (!rule.error)
        return

      if (rule.error.type === RuleErrorTypeEnum.EMPTY)
        rule.error.type = RuleErrorTypeEnum.WARNING

      this.errors[rule.error.type].push(rule.error.name)
    })
  }

  // public ruleErrors(): RulesResult {
  //   return this.result.rulesResult.filter((err: RuleResult) => err.error != null)
  // }
  //
  // public hasErrors(): boolean {
  //   return this.result.processing.error !== '' || this.ruleErrors().length > 0
  // }

  public status(): StatusEnum {
    if (this.errors[RuleErrorTypeEnum.FAILED].length > 0)
      return StatusEnum.FAILED

    if (this.errors[RuleErrorTypeEnum.WARNING].length > 0)
      return StatusEnum.WARNING

    return StatusEnum.OK
  }
}
