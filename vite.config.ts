/*
 * @Author: along
 * @Description: 运行打包配置
 * @Date: 2023-08-09 16:42:03
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:47:31
 * @FilePath: /cxy-applet-vue3/vite.config.ts
 */
import path from 'node:path'
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Inspect from 'vite-plugin-inspect'
import TransformPages from 'uni-read-pages-vite'

export default defineConfig({
  plugins: [
    Unocss(),
    // 自动引入vue和uni-app相关方法
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'uni-app',
        'pinia',
        {
          from: 'uni-mini-router',
          imports: ['createRouter', 'useRouter', 'useRoute'],
        },
      ],
    }),
    uni(),
    Inspect(),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  define: {
    UNI_ROUTES: new TransformPages().routes, // 注入路由表
  },
})
