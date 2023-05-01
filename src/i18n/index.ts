import type { App } from 'vue'
import { createI18n, useI18n } from 'petite-vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'
import { DEFAULT_LOCALE } from './locales'
import { DATE_FORMATS } from './formats/dates'
import { NUMBER_FORMATS } from './formats/numbers'

export { useI18n }
// export {
//   DEFAULT_LOCALE,
//   SUPPORTED_LOCALES,
//   SUPPORTED_LANGUAGES,
//   extractLocaleFromPath,
// } from './locales'

// This is a dynamic import so not all languages are bundled in frontend.
// For YAML format, install `@rollup/plugin-yaml`.
// const messageImports = import.meta.glob('./translations/*.json')

// function importLocale(locale: string) {
//   const [, importLocale]
//     = Object.entries(messageImports).find(([key]) =>
//       key.includes(`/${locale}.`),
//     ) || []
//
//   return importLocale && importLocale()
// }
//
// export async function loadAsyncLanguage(i18n: any, locale = DEFAULT_LOCALE) {
//   try {
//     const result = await importLocale(locale)
//     if (result) {
//       i18n.setLocaleMessage(locale, result.default || result)
//       i18n.locale.value = locale
//     }
//   }
//   catch (error) {
//     console.error(error)
//   }
// }
//

export function installI18n(app: App, locale = DEFAULT_LOCALE) {
//   // dd(`installI18n`, locale);
//   locale = SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
//   const messages = await importLocale(locale)

  return createI18n({
    legacy: false,
    locale,
    fallbackLocale: DEFAULT_LOCALE,
    messages,
    // messages: {
    //   [locale]: messages?.default || messages,
    // },
    datetimeFormats: DATE_FORMATS,
    numberFormats: NUMBER_FORMATS,
  })
}
