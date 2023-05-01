import { resolve } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default function setupI18n() {
  return VueI18nPlugin({
    include: [resolve(__dirname, '../../locales/**')],
    runtimeOnly: false,
  })
}
