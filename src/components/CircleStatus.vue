<script setup lang="ts">
import type { Ref } from 'vue'
import { statusToColor } from '@/utils/statusToColor'
import type { StatusEnum } from '@/enums/Status'

const { status, title, size = 5 } = defineProps<{
  status: StatusEnum
  title: Ref<string>
  size?: number
}>()

const sizeRem = size * 0.25
const color = (status: StatusEnum) => statusToColor(status)
</script>

<template>
  <div :class="`text-${color(status)}`" class="i-carbon-circle-filled" :title="title" :style="`width:${sizeRem}rem; height:${sizeRem}rem;`" />
</template>

<style lang="scss" scoped>
.text {
  &-green {
    background-color: rgba(74, 222, 128, 1);
  }

  &-red {
    background-color: rgba(248, 113, 113, 1);
  }

  &-yellow {
    background-color: rgba(250, 204, 21, 1);
  }

  &-gray {
    background-color: rgb(71, 86, 96);
  }
}
</style>
