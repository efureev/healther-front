<script setup lang="ts">
import { monitorBlockSize } from '@/store'
</script>

<template>
  <el-slider v-model="monitorBlockSize" size="small" :min="1" :max="5" show-stops />
</template>
