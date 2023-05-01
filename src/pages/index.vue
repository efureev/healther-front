<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()

/* const props = defineProps({
  message: String,
  msg: String
}) */
const time = ref(new Date().toLocaleString())

setInterval(() => {
  time.value = new Date().toLocaleString()
}, 1000)
</script>

<template>
  <!--  <div class="font-mono"> -->
  <div class="logo">
    <h3>Vue3.0 Typescript Eslint SSR Starter</h3>
    <p class="c-#DB752D">
      {{ time }}
    </p>
  </div>
  <div>
    <p class="text-4xl">
      <icon-carbon-home class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/frandiox/vitesse-ssr-template" target="_blank"> Vitesse SSR </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>
  </div>
</template>
