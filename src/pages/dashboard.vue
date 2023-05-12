<script setup lang="ts">
import { monitorBlockSize } from '@/store'

// import { useI18n } from '@/i18n'

// const { t } = useI18n()
// const drawer = ref(false)
</script>

<template>
  <!--  <div class="font-mono"> -->
  <div flex="~ gap1 none">
    <div flex-auto border-base b-r>
      <MonitorList :size="monitorBlockSize" />
    </div>
    <!--
    <div id="beat-description" style="flex: 2 1 auto;">
      21
    </div>
    -->
    <!--
        <el-drawer v-model="drawer">
          <template #header>
            <h4>set title by slot</h4>
          </template>
          <template #default>
            <div>
              body
            </div>
          </template>
        </el-drawer>
        -->
  </div>
</template>
