<script setup lang="ts">
import { useI18n } from '@/i18n'

const { t } = useI18n()
// import { useRoute } from 'vue-router'
// import { isDark, toggleDark } from '~/composables'
// import { DEFAULT_LOCALE, SUPPORTED_LOCALES as locales } from '~/i18n/locales'
// import { DEFAULT_LOCALE, SUPPORTED_LOCALES as locales } from '~/i18n'

// const toggleLocales = () => {
//   change to some real logic
// const locales = availableLocales
// locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }

//
// const route = useRoute()
//
// const { t, locale } = useI18n()
//
// const toggleLocales = () => {
//   // change to some real logic
//   const nextLocale =
//       locales[(locales.indexOf(locale.value) + 1) % locales.length]
//
//   const base = nextLocale === DEFAULT_LOCALE ? '' : `/${nextLocale}`
//   console.log(`>>>`, base + route.fullPath)
//   console.log(base)
//   console.log(route.fullPath)
//   window.location.pathname = base + route.fullPath
// }
// import { getAppRouteCtx } from '@/utils/routeCtx'

// const appRouteCtx = getAppRouteCtx(route.fullPath)
const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <nav flex="~ gap4 none" p4 relative bg-base z-10 border="b base" text-xl>
    <template v-if="!isHomepage">
      <RouterLink icon-button flex-none i-carbon:home to="/" :title="t('Main')" />
    </template>

    <RouterLink icon-button flex-none i-carbon:dashboard to="/dashboard" :title="t('Dashboard')" />
    <RouterLink icon-button flex-none i-carbon:workspace to="/space" :title="t('Space')" />
    <RouterLink icon-button flex-none i-carbon:accessibility-alt to="/icons" :title="t('Icons')" />

    <!--    <div>URL: {{ appRouteCtx.url }}</div> -->
    <!--    <div>Route: {{ appRouteCtx.route }}</div> -->
    <!--    <div>Lang: {{ appRouteCtx.locale }}</div> -->
    <!--    <div>Lang (I18n): {{ locale }}</div> -->
    <!--    <router-link class="icon-btn" to="/" :title="t('button.home')"> -->

    <!--    <RouterLink
          icon-button
          i-carbon-settings
          title="Settings"
          to="/settings"
        /> -->

    <!--    <a
            class="icon-btn"
            rel="noreferrer"
            href="https://github.com/frandiox/vite-ssr"
            target="_blank"
            title="Library"
        >
          <carbon-star/>
        </a> -->
    <!--

        <a class="icon-btn" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
          <icon-carbon-moon v-if="isDark" />
          <icon-carbon-sun v-else />
        </a>
    -->
    <!--

        <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
          <icon-carbon-language />
        </a>
    -->

    <!--

        <a
            class="icon-btn"
            :title="t('button.toggle_langs')"
            @click="toggleLocales"
        >
          <carbon-language/>
        </a>
    -->
    <!--
        <a class="icon-btn"
           rel="noreferrer"
           href="https://github.com/frandiox/vitesse-ssr-template"
           target="_blank"
           title="Template">
          <icon-carbon-logo-github />
        </a> -->
  </nav>
</template>
