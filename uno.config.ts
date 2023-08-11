import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import presetIcons from '@unocss/preset-icons'
import transformerVariantGroup from '@unocss/transformer-variant-group'

import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    presetWeapp(),
    presetWeappAttributify(),
    presetIcons({
      collections: {
        shu: FileSystemIconLoader('./src/icons'),
      },
    }),
  ],
  theme: {
    colors: {
      red: '#900',
    },
  },
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
      'wh-full': 'w-full h-full',
    },
  ],

  rules: [

  ],

  transformers: [
    transformerVariantGroup(),
    transformerAttributify(),
    transformerClass(),
  ],
}
