<script setup lang="ts">
import { monitorBlockSize } from '@/store'
</script>

<template>
  <div flex="~ gap1 none">
    <MonitorList :size="monitorBlockSize" />
  </div>
</template>
