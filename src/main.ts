import { createPinia } from 'pinia'
import { createSSRApp, createApp as createVueApp } from 'vue'
import App from './app.vue'
import { createRouterInstance } from '@/router'

import { installI18n } from '@/i18n'
import type { AppRouteCtx } from '@/@types/app'

export function makeApp(routeCtx: AppRouteCtx, ssr: boolean) {
  const app = ssr ? createSSRApp(App) : createVueApp(App)

  const i18n = installI18n(app, routeCtx.locale)
  app.use(i18n)

  const store = createPinia()
  app.use(store)

  const router = createRouterInstance(routeCtx.route)
  app.use(router)

  return { app, router, store }
}
