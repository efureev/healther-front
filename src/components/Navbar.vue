<script setup lang="ts">
// import { isDark } from '@/store/dark'

const route = useRoute()

const showNav = computed(() => true)
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <nav flex="~ gap4 none" p4 relative bg-base z-10 border="b base" text-xl :class="showNav ? '' : 'md:hidden'">
    <!-- In Collections -->
    <template v-if="!isHomepage">
      <RouterLink class="non-dragging" icon-button flex-none i-carbon:arrow-left to="/" />
    </template>

    <!-- Homepage Only -->
    <template v-if="showNav">
      <!-- <RouterLink
        class="non-dragging"
        i-carbon:search icon-button flex-none
        to="/collection/all"
      /> -->
      <div flex-auto />
      <h1 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-xl font-light tracking-2px pointer-events-none>
        Healther
      </h1>
      <SizeSlider class="size-slider" w20 />

      <a class="non-dragging" i-carbon-logo-github icon-button flex-none href="https://github.com/efureev/healther-front" target="_blank" title="GitHub" />
      <RouterLink class="non-dragging" i-carbon-settings icon-button flex-none to="/settings" title="Settings" />
      <DarkSwitcher flex-none />
    </template>
  </nav>
</template>
