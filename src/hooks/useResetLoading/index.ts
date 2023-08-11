import { useLoadingStore } from '~/store'

const { resetLoading } = useLoadingStore()

export function useResetLoading() {
  onLoad (() => {
    // tabbar页面进入可能需要重置loading
    resetLoading()
  })
}
