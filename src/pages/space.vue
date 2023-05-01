<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <h3>{{ t('open to user!') }}</h3>
    <icon-carbon-campsite class-name="inline-block" />
  </div>
</template>

<route>
{ meta: { layout: "private", requiresAuth: true } }
</route>
