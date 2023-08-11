import type { App } from 'vue'

// 不适用于uniapp
const components = Object.entries(import.meta.glob('./**/*.vue', { eager: true }))
const preFix = 'Shu'
export default {
  install: (app: App) => {
    components.forEach(([key, module]: [string, any]) => {
      const component = module.default
      const name = getCompName(component?.name || key)
      app.component(preFix + name, component)
    })
  },
}

function getCompName(key: string) {
  const nameReg = /\/(\w+)\/\w+.vue/
  const match = key.match(nameReg)
  return match ? match[1].slice(0, 1).toLocaleUpperCase() + match[1].slice(1) : key
}
