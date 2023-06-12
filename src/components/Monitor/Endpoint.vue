<script setup lang="ts">
import type { Ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import type EndpointMonitor from '@/store/monitors/EndpointMonitor'
import CircleStatus from '@/components/CircleStatus.vue'
import type { StatusEnum } from '@/enums/Status'
import { statusToColor } from '@/utils/statusToColor'
import type { EndpointCheck } from '@/store/monitors/EndpointCheck'
import BeatRulesResult from '@/components/Monitor/BeatRulesResult.vue'

// import { useMonitor } from '@/store/monitor'

const { monitor } = defineProps<{
  monitor: EndpointMonitor
}>()

// const monitorStore = useMonitor()

// monitorStore.endPointSelected

function onSelected(e: MouseEvent) {
  console.log(e)
  const epm: HTMLDivElement = e.target
  const epLine = epm.parentNode
  for (const child of epLine.children)
    child.classList.remove('selected')

  epm.classList.add('selected')
}

const color = (status: StatusEnum) => statusToColor(status)

const selectedBeat: Ref<Nullable<EndpointCheck>> = ref(null)
// const checks = ref(null)

// watch(monitor.lastCheck, (val: Nullable<EndpointCheck>) => {
//   console.log('lastCheck', val)
// })

function clearSelected() {
  selectedBeat.value = null

  const beatLineEls = document.getElementsByClassName('beat-line')

  for (let i = 0; i < beatLineEls.length; ++i) {
    const ble = beatLineEls[i]
    for (const child of ble.children)
      child.classList.remove('selected')
  }
}

function onBeatClick(e: MouseEvent, check: EndpointCheck) {
  const beat: HTMLDivElement = e.target
  const beatLine = beat.parentNode
  for (const child of beatLine.children)
    child.classList.remove('selected')

  beat.classList.add('selected')

  selectedBeat.value = check
}
</script>

<template>
  <div my2 px2 pb2 border="~ base" bg-base rounded class="endpoint" @click="onSelected">
    <div flex style="justify-content: space-between;" pos-relative>
      <a :href="monitor.url" target="_blank" text-sm color-gray-600>{{ monitor.name }}</a>
      <div>
        <small title="hits">{{ monitor.beatCount }}</small>
        <CircleStatus :size="3" ml-2 :title="unref(monitor.getStatus())" :status="unref(monitor.getStatus())" />
      </div>
    </div>

    <div v-on-click-outside="clearSelected" py1 flex="~ gap1" style="justify-content: flex-end; min-height: 20px" class="beat-line">
      <template v-for="(check, idx) in monitor.checks.toArray()" :key="idx">
        <div :ref="`beat-${check.id}`" style="flex: 0 1 auto; border-radius: 2px;" h-3 w-2 :title="check.result.processing.duration.str" :class="`bg-${color(check.status())}`" @click="(e) => onBeatClick(e, check)" />
      </template>
    </div>

    <Teleport v-if="selectedBeat != null" to="#beat-description">
      <BeatRulesResult :check="selectedBeat" />
    </Teleport>
  </div>
</template>
