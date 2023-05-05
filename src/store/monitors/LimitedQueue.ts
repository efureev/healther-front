import { ref, unref } from 'vue'

export class LimitedQueue<T> {
  private limit = 10

  public data: Ref<T[]> = ref([])
  // private data: UnwrapNestedRefs<T[]> = reactive<T[]>([])

  // public data: UnwrapNestedRefs<{ items: T[] }> = reactive<{ items: T[] }>({ items: [] })

  constructor(limit: number) {
    this.limit = limit
  }

  public push(item: T): void {
    if (this.isReachLimit())
      this.data.value.shift()

    this.data.value.push(item)
  }

  public size(): number {
    return this.data.value.length
  }

  private isReachLimit(): boolean {
    return this.size() >= this.limit
  }

  public isEmpty(): boolean {
    return this.size() === 0
  }

  /*
  public toReactiveArray(): Ref<T[]> {
    return this.data
  }
  */

  public toArray(): T[] {
    return unref(this.data)
  }

  // public last(): ComputedRef<T> {
  //   // const d = toRaw(this.data)
  //   return computed(() => unref(this.data)[this.size() - 1])
  // }

  // public reset(): void {
  //   this.data.length = 0
  // }

  /*
  public computedCount(): ComputedRef<number> {
    return computed(() => this.size())
  }
  */
}
