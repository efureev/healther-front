import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import type { Router } from 'vue-router'
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

// import AuthRedirect from '@/components/Auth/Redirect.vue'

export const routes = [
  // { path: '/auth/:provider/callback', component: AuthRedirect },
  ...setupLayouts(generatedRoutes),
]

let router: Router

export default function getRouter(): Router {
  if (!router)
    router = createRouterInstance()

  return router
}

export function createRouterInstance(routeBase?: string): Router {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory(routeBase) : createMemoryHistory()

  router = createRouter({
    history: routerHistory,
    routes,
  })

  // setupRouterGuard(router)
  // installMiddleware(router, store)
  return router
}
