<script setup lang="ts">
// import { useI18n } from '@/i18n'
import MonitorList from '@/components/MonitorList.vue'

// const { t } = useI18n()
</script>

<template>
  <!--  <div class="font-mono"> -->
  <div flex="~ gap1 none">
    <div flex-auto border-base b-r>
      <MonitorList />
    </div>
    <div style="flex: 2 1 auto;">2</div>
  </div>
</template>
