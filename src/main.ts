import { createSSRApp } from 'vue'

import uviewPlus from 'uview-plus'
import { createPinia } from 'pinia'
import Persist from 'pinia-plugin-persist-uni'
import router from './router'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  const store = createPinia()
  store.use(Persist)
  app.use(uviewPlus)
  app.use(store)
  app.use(router)

  return {
    app,
  }
}
