<script setup lang="ts">
import { isDark } from '@/store/dark'
</script>

<template>
  <button
    class="icon-button dark:i-carbon-moon i-carbon:sun"
    @click="isDark = !isDark"
  />
</template>
