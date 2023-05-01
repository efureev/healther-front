import { makeApp } from './main'
import '@unocss/reset/tailwind.css'
import '@/assets/css/index.css'
import 'virtual:uno.css'
import { getAppRouteCtx } from '@/utils/routeCtx'

const routeCtx = getAppRouteCtx(new URL(window.location.href))

const { app, router, store } = makeApp(routeCtx, false)

if (window.__INITIAL_STATE__) {
  if (import.meta.env.SSR)
    store.state.value = JSON.parse(JSON.stringify(window.__INITIAL_STATE__))
}

router.isReady().then(() => {
  app.mount('#app')
})
