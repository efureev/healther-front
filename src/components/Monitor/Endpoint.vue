<script setup lang="ts">
import type EndpointMonitor from '@/store/monitors/EndpointMonitor'
import CircleStatus from '@/components/CircleStatus.vue'
import type { StatusEnum } from '@/enums/Status'
import { statusToColor } from '@/utils/statusToColor'

const { monitor } = defineProps<{
  monitor: EndpointMonitor
}>()
const color = (status: StatusEnum) => statusToColor(status)
</script>

<template>
  <div my2 px2 pb2 border="~ base" bg-base rounded>
    <div flex style="justify-content: space-between;" pos-relative>
      <a :href="monitor.url" target="_blank" text-sm color-gray-600>{{ monitor.name }}</a>
      <div>
        <small title="hits">{{ monitor.beatCount }}</small>
        <CircleStatus :size="3" ml-2 :title="unref(monitor.getStatus())" :status="unref(monitor.getStatus())" />
      </div>
    </div>

    <div py1 flex="~ gap1" style="justify-content: flex-end;">
      <template v-for="(check, idx) in monitor.checks.toArray()" :key="idx">
        <div style="flex: 0 1 auto; border-radius: 2px;" h-3 w-2 :class="`bg-${color(check.status())}`" />
      </template>
    </div>
  </div>
</template>
