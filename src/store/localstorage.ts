export const themeColor = useStorage('healther-theme-color', '#329672')
export const monitorBlockSize = useStorage('monitor-block-size', 5)
export const monitorBeatLimit = computed(() => unref(monitorBlockSize) * 10)
