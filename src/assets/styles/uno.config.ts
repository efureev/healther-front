import { defineConfig, presetAttributify, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetMini from '@unocss/preset-mini'

export default defineConfig({
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-100',
    'border-dark-only': 'border-transparent dark:border-dark-100',
    'bg-base': 'bg-white dark:bg-[#181818]',
    'bg-pane-base': 'bg-white dark:bg-[#161616]',
    'color-base': 'text-gray-900 dark:text-gray-300',
    'color-fade': 'text-gray-900:50 dark:text-gray-300:50',
    'icon-button': 'op50 hover:op100 my-auto',
  },
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
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1,
    }),
    // presetTypography(),
    // presetWebFonts({
    //   fonts: {
    //     // ...
    //   },
    // }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
