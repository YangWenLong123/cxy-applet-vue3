import type { IPageData } from './types'
import type { PageType } from '~/api/types'

function isNumber(data: unknown): data is number {
  return typeof data === 'number' && !Number.isNaN(data)
}

/**
 *
 * @param fn
 * @param options
 * @description 分页hook
 * @returns
 */
export function usePage(fn: (page: PageType['page'], size: PageType['size']) => Promise<IPageData>, options?: PageType) {
  const page = ref(options?.page || 1)
  const size = ref(options?.size || 10)
  const loading = ref(false)
  const list = ref<unknown>(null)
  const total = ref<unknown>(null)
  function resetPage() {
    page.value = 1
  }

  async function getMorePage() {
    // list大于等于总页数时

    if (Array.isArray(list.value) && isNumber(total.value) && list.value.length >= total.value)
      return
    // 总页数为0
    if (isNumber(total.value) && total.value === 0)
      return
    // loading时
    if (loading.value)
      return
    loading.value = true
    const res = await fn(page.value, size.value)
    loading.value = false
    if (!res)
      return
    const data = res?.list || []
    list.value = page.value === 1 ? data : (list.value as []).concat(data)
    total.value = res?.total ?? 0
    page.value++
  }
  return {
    page,
    size,
    loading,
    list,
    total,
    getMorePage,
    resetPage,
  }
}
