<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    {{ t('Page not found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
