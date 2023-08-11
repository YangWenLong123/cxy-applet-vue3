import { createRouter } from 'uni-mini-router'

import { useLoadingStore } from '~/store'

const router = createRouter({
  routes: [...UNI_ROUTES], // 路由表信息
})

// 无法拦截tabbar 点击跳转的页面
router.beforeEach((to, from, next) => {
  const { resetLoading } = useLoadingStore()
  resetLoading() // 路由跳转时都重置loading
  next()
})

export default router
