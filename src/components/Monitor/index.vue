<script setup lang="ts">
import Block from './Block.vue'
import type { Service } from '@/@types/services'
import { useMonitors } from '@/store/monitors'
import CircleStatus from '@/components/CircleStatus.vue'
import { monitorBeatLimit } from '@/store'
import Endpoint from '@/components/Monitor/Endpoint.vue'

const { service } = defineProps<{
  service: Service
}>()

const monitorStore = useMonitors()
const serviceMonitor = monitorStore.setService(service, monitorBeatLimit.value)

watch(monitorBeatLimit, (val) => {
  for (const epMonitor of serviceMonitor.endpointMonitors.values())
    epMonitor.resizeQueue(val)
})
</script>

<template>
  <div px4 pt1 pb4 m7 border="~ base" bg-pane-base rounded pos-relative class="monitor" flex="auto">
    <CircleStatus :title="unref(serviceMonitor.statusText)" :status="unref(serviceMonitor.status)" absolute pos-right-2 pos-top-2 />
    <Block :name="service.name" :url="service.url" />
    <div>
      <template v-for="monitor in serviceMonitor.endpointMonitors.values()" :key="monitor.id">
        <Endpoint :monitor="monitor" />
      </template>
    </div>
  </div>
</template>
