import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function setupAutoImport() {
  return AutoImport({
    imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
    // imports: ['vue', 'vue-router', 'pinia', 'vue-i18n', 'vue/macros', '@vueuse/head', '@vueuse/core'],
    vueTemplate: true,
    dts: 'types/auto-imports.d.ts',
    /* dirs: [
      'src/composables',
    ], */
    resolvers: [
      // https://github.com/antfu/unplugin-icons
      IconsResolver({
        prefix: 'icon',
        enabledCollections: ['carbon', 'cib'],
      }),
      ElementPlusResolver({
        ssr: true,
        // importStyle: 'css',
        importStyle: 'sass',
      })],
    eslintrc: {
      enabled: false, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
  })
}
