import { resolve } from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import dayjs from 'dayjs'
import setupVitePlugins from './build/plugins'
import { wrapperEnv } from './build/utils'
import EnvMode from './build/EnvMode'
import pkg from './package.json'

export default ({ command, mode }: ConfigEnv) => {
  const envMode = EnvMode(command === 'build' ? command : mode)
  const env = loadEnv(mode, resolve(__dirname, './env'))
  const viteEnv = wrapperEnv(env)

  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_DROP_CONSOLE }
    = viteEnv

  const { dependencies, devDependencies, name, version } = pkg
  const __APP_INFO__ = {
    pkg: { dependencies, devDependencies, name, version },
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  }

  const config: UserConfig = {
    base: VITE_PUBLIC_PATH,
    envDir: resolve(__dirname, './env'),
    plugins: setupVitePlugins(viteEnv, envMode),
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': __dirname,
        '#': resolve(__dirname, 'types'),
      },
    },
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    // additionalData: `@use "@/assets/styles/element/index.scss" as *;`
    // }
    // }
    // }
    server: {
      // Listening on all local IPs
      host: true,
      // open: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      // proxy: createProxy(VITE_PROXY),
      // watch: {
      // ignored: /(^|[\/\\])\../,
      // ignored: '.eslintrc-auto-import.json',
      // },
    },

    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
    },

    define: {
      __BUILD_TIME__: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  }

  if (envMode.isProd()) {
    config.build = {
      target: 'esnext',
      // minify: false,
      minify: 'esbuild',
      manifest: true,
    }
  }

  if (envMode.isDev()) {
    config.optimizeDeps = {
      include: [
        'vue',
        'vue-router',
        '@vue/shared',
        '@vueuse/core',
        '@iconify-json/carbon',
      ],
      exclude: [
        // 'vue-demi'
      ],
    }
  }

  return config
}
