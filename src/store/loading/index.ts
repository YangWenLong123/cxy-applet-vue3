import { defineStore } from 'pinia'

function store() {
  const loadingCounter = ref(0)
  function addLoadingCounter() {
    loadingCounter.value++
  }
  function subLoadingCounter() {
    loadingCounter.value--
  }
  function resetLoading() {
    loadingCounter.value = 0
  }

  return {
    addLoadingCounter,
    subLoadingCounter,
    resetLoading,
    loading: computed(() => loadingCounter.value !== 0),
  }
}

export const useLoadingStore = defineStore('loading', store)
