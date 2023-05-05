import unocss from 'unocss/vite'
import presetMini from '@unocss/preset-mini'
import UnocssIcons from '@unocss/preset-icons'
import presetAttributify from '@unocss/preset-attributify'
import { transformerDirectives, transformerVariantGroup } from 'unocss'

// import { presetScrollbar } from 'unocss-preset-scrollbar'
// import { presetExtra } from 'unocss-preset-extra';

export default function setupUnoCSS() {
  return [
    unocss({
      shortcuts: {
        'border-base': 'border-gray-200 dark:border-dark-100',
        'border-dark-only': 'border-transparent dark:border-dark-100',
        'bg-base': 'bg-white dark:bg-[#181818]',
        'bg-pane-base': 'bg-white dark:bg-[#161616]',
        'color-base': 'text-gray-900 dark:text-gray-300',
        'color-fade': 'text-gray-900:50 dark:text-gray-300:50',
        'icon-button': 'op50 hover:op100 my-auto',
      },
      transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
      ],
      theme: {
        colors: {
          primary: 'var(--theme-color)',
          dark: {
            100: '#222',
            200: '#333',
            300: '#444',
            400: '#555',
            500: '#666',
            600: '#777',
            700: '#888',
            800: '#999',
            900: '#aaa',
          },
        },
      },
      presets: [
        presetMini(),
        presetAttributify(),
        UnocssIcons({
          // collections: {
          //   carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
          // },
          prefix: 'i-',
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
          scale: 1,
        }),
        // https://github.com/action-hong/unocss-preset-scrollbar/
        // presetScrollbar(),

        // https://unocss-preset-extra.moomfe.com/rules/animated
        // presetExtra(),
      ],
    }),
  ]
}
