import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

import vueJsxPlugin from '@vitejs/plugin-vue-jsx'
import type { EnvMode } from '../EnvMode'
import setupIcons from './icons'
import setupAutoImport from './auto-import'
import setupUnoCSS from './unocss'
import setupVueComponents from './vue-components'
import setupDevPlugins from './setupDevPlugins'
import setupPagesAndLayouts from './pages'
import setupI18n from './i18n'

// import { splitVendorChunkPlugin } from 'vite'

export default function setupVitePlugins(viteEnv: ViteEnv, envMode: EnvMode) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue({
      reactivityTransform: true,
      customElement: [
        'iconify-icon',
      ],
      template: {
        compilerOptions: {
          isCustomElement: tag => tag === 'iconify-icon',
        },
      },
    }),
    vueJsxPlugin(),
    // splitVendorChunkPlugin(),
  ]

  // @intlify/unplugin-vue-i18n
  vitePlugins.push(setupI18n())

  // vite-plugin-pages vite-plugin-vue-layouts
  vitePlugins.push(setupPagesAndLayouts())

  // unplugin-auto-import
  vitePlugins.push(setupAutoImport())

  // unplugin-vue-components
  vitePlugins.push(setupVueComponents())

  vitePlugins.push(setupUnoCSS())

  // unplugin-icons
  vitePlugins.push(setupIcons())

  vitePlugins.push(setupDevPlugins(viteEnv, envMode))

  return vitePlugins
}
