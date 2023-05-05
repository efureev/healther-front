declare global {

  type Undefinedable<T> = T | undefined
  type Nullable<T> = T | null
  type Recordable<T = any> = Record<string, T>

}

export {}
