# 小程序模版

## 目录


```
├─ src
│    ├─ api                         —— api配置中心
│    ├─ components                  —— 公共组件
│    ├─ hooks                       —— hooks
│    ├─ icons                       —— icons
│    ├─ pages                       —— 页面
│    ├─ router                      —— 路由
│    ├─ static                      —— 资源
│    ├─ store                       —— 存储
│    ├─ utils                       —— 公共方法
│    ├─ mainifest.json              —— 配置
│    ├─ pages.json                  —— 路由，样式，tabbar配置
│    ├─ uni.scss                    —— 全局样式
│    ├─ env.d.ts                    ——
│    ├─ main.ts                     —— js入口
│    ├─ shime-uni.ts                ——
│    ├─ App.vue                     —— vue入口
└─ .editorconfig                    —— 编辑器代码风格统一配置
└─ .env                             —— 开发环境变量
└─ .env.production                  —— 生产环境变量
└─ .eslintrc.js                     —— eslint配置
└─ .gitignore                       —— git提交过滤文件配置
└─ index.html                       —— html入口
└─ package-lock.json                —— 版本依赖树
└─ package.json                     —— 项目信息，执行命令，依赖，钩子
└─ tsconfig.json                    —— ts配置
└─ README.md                        —— 说明文档
└─ auto-imports.d.ts                —— 类型声明文件
└─ commitlint.config.ts             —— 代码提交风格配置
└─ components.d.ts                  ——
└─ uno.config.ts                    ——
└─ uView.ts                         —— ui组件
└─ vite.config.ts                   —— vite配置
└─ pnpm-lock.yaml                   —— pnpm文件
```

## 技术架构

## 插件
- unocss/vite

  Unocss是一个在Vite中可以使用的插件，其主要作用是实现CSS的原子化设计。

  `npm:`https://www.npmjs.com/package/@unocss/vite

  安装
  ```js
    pnpm add -D @unocss/vite
  ```

  配置
  ```js
  // vite.config.ts
  import UnoCSS from 'unocss/vite'
  import { defineConfig } from 'vite'

  export default defineConfig({
    plugins: [
      UnoCSS(),
    ],
  })
  ```

  引入
  ```js
  // main.ts
  import 'virtual:uno.css'
  ```

  示例
  ```html
  <div class="text-25px text-#ff6700 bg-#ccc">
    你好Unocss
  </div>
  ```

- AutoImport

  AutoImport插件是Vite中的一个插件，其主要作用是自动导入你在代码中使用到的库或者模块，无需你在文件顶部手动进行import

  `npm:` https://www.npmjs.com/package/unplugin-auto-import

  安装
  ```js
  pnpm i -D vite-plugin-auto-import
  ```

  配置

  在这个配置中，imports数组中包含了你希望自动导入的库或者模块，dts是一个可选的配置，用来生成一个.d.ts文件，以提供类型提示和代码补全
  ```js
  import AutoImport from 'vite-plugin-auto-import'

  export default {
    plugins: [
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
        // dts: 'src/auto-imports.d.ts',
        dts: true,
      }),
    ],
  }
  ```

  如何使用

  `过去`
  ```js
  <script setup>
    import { ref, reactive, onMounted } from 'vue';
    import { useRouter } from 'vue-router'

    const count = ref(0);
    const state = reactive({})
    const router = useRouter()
    onMounted(() => {})
  </script>
  ```

  `现在`

  ```js
  <script setup>
    const count = ref(0);
    const state = reactive({})
    const router = useRouter()
    onMounted(() => {})
  </script>
  ```

  TS中使用会报如下错误

  ![a1.png](http://cdn.alongweb.top/images/webbox/a1.png)

  解决方案
  在 tsconfig.json 引入 auto-imports.d.ts 类型声明文件
  ```js
  export {}
  declare global {
    const EffectScope: typeof import('vue')['EffectScope']
    const acceptHMRUpdate: typeof import('pinia')['acceptHMRUpdate']
    const computed: typeof import('vue')['computed']
    const createApp: typeof import('vue')['createApp']
    const createPinia: typeof import('pinia')['createPinia']
    const createRouter: typeof import('uni-mini-router')['createRouter']
    const customRef: typeof import('vue')['customRef']
    const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
    const defineComponent: typeof import('vue')['defineComponent']
    const defineStore: typeof import('pinia')['defineStore']
    const effectScope: typeof import('vue')['effectScope']
    const getActivePinia: typeof import('pinia')['getActivePinia']
    const getCurrentInstance: typeof import('vue')['getCurrentInstance']
    const getCurrentScope: typeof import('vue')['getCurrentScope']
    const h: typeof import('vue')['h']
    const inject: typeof import('vue')['inject']
    const isProxy: typeof import('vue')['isProxy']
    const isReactive: typeof import('vue')['isReactive']
    const isReadonly: typeof import('vue')['isReadonly']
    const isRef: typeof import('vue')['isRef']
    const mapActions: typeof import('pinia')['mapActions']
    const mapGetters: typeof import('pinia')['mapGetters']
    const mapState: typeof import('pinia')['mapState']
    const mapStores: typeof import('pinia')['mapStores']
    const mapWritableState: typeof import('pinia')['mapWritableState']
    const markRaw: typeof import('vue')['markRaw']
    const nextTick: typeof import('vue')['nextTick']
    const onActivated: typeof import('vue')['onActivated']
    const onAddToFavorites: typeof import('@dcloudio/uni-app')['onAddToFavorites']
    const onBackPress: typeof import('@dcloudio/uni-app')['onBackPress']
    const onBeforeMount: typeof import('vue')['onBeforeMount']
    const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
    const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
    const onDeactivated: typeof import('vue')['onDeactivated']
    const onError: typeof import('@dcloudio/uni-app')['onError']
    const onErrorCaptured: typeof import('vue')['onErrorCaptured']
    const onHide: typeof import('@dcloudio/uni-app')['onHide']
    const onLaunch: typeof import('@dcloudio/uni-app')['onLaunch']
    const onLoad: typeof import('@dcloudio/uni-app')['onLoad']
    const onMounted: typeof import('vue')['onMounted']
    const onNavigationBarButtonTap: typeof import('@dcloudio/uni-app')['onNavigationBarButtonTap']
    const onNavigationBarSearchInputChanged: typeof import('@dcloudio/uni-app')['onNavigationBarSearchInputChanged']
    const onNavigationBarSearchInputClicked: typeof import('@dcloudio/uni-app')['onNavigationBarSearchInputClicked']
    const onNavigationBarSearchInputConfirmed: typeof import('@dcloudio/uni-app')['onNavigationBarSearchInputConfirmed']
    const onNavigationBarSearchInputFocusChanged: typeof import('@dcloudio/uni-app')['onNavigationBarSearchInputFocusChanged']
    const onPageNotFound: typeof import('@dcloudio/uni-app')['onPageNotFound']
    const onPageScroll: typeof import('@dcloudio/uni-app')['onPageScroll']
    const onPullDownRefresh: typeof import('@dcloudio/uni-app')['onPullDownRefresh']
    const onReachBottom: typeof import('@dcloudio/uni-app')['onReachBottom']
    const onReady: typeof import('@dcloudio/uni-app')['onReady']
    const onRenderTracked: typeof import('vue')['onRenderTracked']
    const onRenderTriggered: typeof import('vue')['onRenderTriggered']
    const onResize: typeof import('@dcloudio/uni-app')['onResize']
    const onScopeDispose: typeof import('vue')['onScopeDispose']
    const onServerPrefetch: typeof import('vue')['onServerPrefetch']
    const onShareAppMessage: typeof import('@dcloudio/uni-app')['onShareAppMessage']
    const onShareTimeline: typeof import('@dcloudio/uni-app')['onShareTimeline']
    const onShow: typeof import('@dcloudio/uni-app')['onShow']
    const onTabItemTap: typeof import('@dcloudio/uni-app')['onTabItemTap']
    const onThemeChange: typeof import('@dcloudio/uni-app')['onThemeChange']
    const onUnhandledRejection: typeof import('@dcloudio/uni-app')['onUnhandledRejection']
    const onUnload: typeof import('@dcloudio/uni-app')['onUnload']
    const onUnmounted: typeof import('vue')['onUnmounted']
    const onUpdated: typeof import('vue')['onUpdated']
    const provide: typeof import('vue')['provide']
    const reactive: typeof import('vue')['reactive']
    const readonly: typeof import('vue')['readonly']
    const ref: typeof import('vue')['ref']
    const resolveComponent: typeof import('vue')['resolveComponent']
    const setActivePinia: typeof import('pinia')['setActivePinia']
    const setMapStoreSuffix: typeof import('pinia')['setMapStoreSuffix']
    const shallowReactive: typeof import('vue')['shallowReactive']
    const shallowReadonly: typeof import('vue')['shallowReadonly']
    const shallowRef: typeof import('vue')['shallowRef']
    const storeToRefs: typeof import('pinia')['storeToRefs']
    const toRaw: typeof import('vue')['toRaw']
    const toRef: typeof import('vue')['toRef']
    const toRefs: typeof import('vue')['toRefs']
    const toValue: typeof import('vue')['toValue']
    const triggerRef: typeof import('vue')['triggerRef']
    const unref: typeof import('vue')['unref']
    const useAttrs: typeof import('vue')['useAttrs']
    const useCssModule: typeof import('vue')['useCssModule']
    const useCssVars: typeof import('vue')['useCssVars']
    const useRoute: typeof import('uni-mini-router')['useRoute']
    const useRouter: typeof import('uni-mini-router')['useRouter']
    const useSlots: typeof import('vue')['useSlots']
    const watch: typeof import('vue')['watch']
    const watchEffect: typeof import('vue')['watchEffect']
    const watchPostEffect: typeof import('vue')['watchPostEffect']
    const watchSyncEffect: typeof import('vue')['watchSyncEffect']
  }
  // for type re-export
  declare global {
    // @ts-expect-error
    export type { Component, ComponentPublicInstance, ComputedRef, InjectionKey, PropType, Ref, VNode } from 'vue'
  }
  ```

- @dcloudio/vite-plugin-uni

  @dcloudio/vite-plugin-uni是一个专门为uni-app提供的Vite插件，该插件可以帮助开发者在使用Vite作为构建工具的uni-app项目中，实现源码的构建和编译

  安装
  ```js
  npm i @dcloudio/vite-plugin-uni -D
  ```

  使用
  ```js
  import uni from '@dcloudio/vite-plugin-uni'

  export default defineConfig({
    plugins: [uni()],
  })
  ```

- vite-plugin-inspect

  vite-plugin-inspect是一个用于检查Vite插件中间状态的插件，主要用于调试和编写插件

  安装
  ```
  pnpm i -D vite-plugin-inspect
  ```

  配置
  ```js
  import Inspect from 'vite-plugin-inspect'

  export default defineConfig({
    plugins: [Inspect()],
  })
  ```

- uni-read-pages-vite

  参考 uni-read-pages 开发，仅支持使用vite创建的uni-app项目，用于读取pages.json中的配置。

  安装
  ```js
  pnpm install uni-read-pages-vite --save
  ```

  配置
  ```js
  // vite.config.js
  import { defineConfig } from 'vite'
  import uni from '@dcloudio/vite-plugin-uni'
  import TransformPages from 'uni-read-pages-vite'

  export default defineConfig({
    plugins: [uni()],
    define: {
      ROUTES: new TransformPages().routes
    }
  })
  ```


## 规范
- eslint + commiitlint

  eslint安装
  ```js
  pnpm i eslint eslint-plugin-vue --save-dev
  ```

  eslint修复代码
  ```
  "lint": "eslint . --fix"
  ```

  commiitlint安装

  ```
  npx husky-init
  npm install @commitlint/cli @commitlint/config-conventional -D
  ```

  在根目录创建commitlint.config.js配置文件

  ```
  module.exports = {
    extends: ['@commitlint/config-conventional'],
  };
  ```

  将commitlint加到husky的钩子中

  ```
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
  ```

  提交规范

  ```
  feat：新增功能
  fix：bug 修复
  docs：文档更新
  style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
  refactor：重构代码(既没有新增功能，也没有修复 bug)
  perf：性能, 体验优化
  test：新增测试用例或是更新现有测试
  build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
  ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
  chore：不属于以上类型的其他类，比如构建流程, 依赖管理构建过程或辅助工具的变动
  revert：回滚某个更早之前的提交
  ```

  示例

  ```
  git commit -m 'fix: 修复xxx页面跳转异常'
  ```


## 使用教程

- pinia

pinia配置persist,会使用持久化保存（uniStorage）
```ts
import { defineStore } from 'pinia'

function store() {
  const username = ref('')
  const token = ref('')
  function setToken(value: string) {
    token.value = value
  }
  return {
    username,
    token,
    setToken,
  }
}

export const useUserStore = defineStore('user', store, {
  persist: {
    enabled: true,
  },
})
```

## 运行发布

```bash
  pnpm i
  pnpm dev
```

行方式：打开 微信开发者工具, 导入 dist/dev/mp-weixin 运行
