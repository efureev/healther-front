<script setup lang="ts">
import { useMonitor } from '@/store/monitor'
import { useMonitors } from '@/store/monitors'
import { useWsEventsRouter } from '@/services/WsEventsRouter'
import { monitorBlockSize } from '@/store'

const serviceStore = useMonitor()
const monitorStore = useMonitors()
const { setHeartBeat } = monitorStore

const url = import.meta.env.VITE_WS_PATH
const wsEventRouter = useWsEventsRouter(url, { heartBeat: setHeartBeat })

onMounted(() => {
  serviceStore.getList()
  wsEventRouter.start()
})
</script>

<template>
  <div :class="`block-size-${monitorBlockSize}`" flex="~ wrap">
    <template v-for="service in serviceStore.filteredServiceList" :key="service.url">
      <Monitor :service="service" />
    </template>
  </div>
</template>
