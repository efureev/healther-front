import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default function setupVueComponents() {
  return Components({
    dts: 'types/components.d.ts',
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    types: [{
      from: 'vue-router',
      names: ['RouterLink', 'RouterView'],
    }],
    version: 3,
    resolvers: [
      // https://github.com/antfu/unplugin-icons
      IconsResolver({
        prefix: 'icon',
        enabledCollections: ['carbon', 'cib'],
      }),
      ElementPlusResolver({
        ssr: true,
        // importStyle: 'css',
        // importStyle: 'sass'
      }),
    ],
    directoryAsNamespace: true,
  })
}
