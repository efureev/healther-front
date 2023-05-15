<script setup lang="ts">
import { useMonitor } from '@/store/monitor'

const serviceStore = useMonitor()

function onInput(val: string) {
  serviceStore.monitorListFilter = val.toLowerCase()
}
</script>

<template>
  <div>
    <el-input :model-value="serviceStore.monitorListFilter" size="small" placeholder="Search..." clearable @input="onInput">
      <template #prefix>
        <div i-carbon-search />
      </template>
    </el-input>
  </div>
</template>
