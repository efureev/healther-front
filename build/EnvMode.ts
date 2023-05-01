enum EnvModeEnum {
  Production = 'production',
  Development = 'development',
  Test = 'test',
  Build = 'build',
}

export class EnvMode {
  mode: EnvModeEnum

  // constructor(mode: EnvModeEnum) {
  constructor(mode: EnvModeEnum) {
    this.mode = mode
  }

  isProd() {
    return this.mode === EnvModeEnum.Production
  }

  isTest() {
    return this.mode === EnvModeEnum.Test
  }

  isDev() {
    return this.mode === EnvModeEnum.Development
  }

  isBuild() {
    return this.mode === EnvModeEnum.Build
  }

  asString() {
    return this.mode
  }
}

export default (mode: string) => new EnvMode(mode as EnvModeEnum)
