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
