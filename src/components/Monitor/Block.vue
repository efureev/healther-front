<script setup lang="ts">
const { name, url } = defineProps<{
  name: string
  url: string
}>()
</script>

<template>
  <div>
    <small text-size-xs fw-bold :title="url" border="b base">
      {{ name }}
    </small>
  </div>
</template>
