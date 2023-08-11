import type { ComponentResolver } from 'unplugin-vue-components/types'
import { kebabCase } from 'unplugin-vue-components'

const prefix = 'U'

export function UviewResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith(prefix)) {
        const pkgName = kebabCase(name.replace(prefix, 'u'))
        console.log(pkgName)
        return {
          dts: false,
          name,
          from: `uview-plus/components/${pkgName}/${pkgName}`,
        }
      }
    },
  }
}
