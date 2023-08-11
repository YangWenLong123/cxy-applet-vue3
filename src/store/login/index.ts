/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-09 23:48:33
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:38:50
 * @FilePath: /cxy-applet-vue3/src/store/login/index.ts
 */
import { defineStore } from 'pinia'

function store() {
  const login = ref(false)
  const code = ref('')
  function setLogin(value: boolean) {
    login.value = value
  }
  function setCode(value: string) {
    code.value = value

    console.log('222', code.value)
  }
  return {
    setLogin,
    setCode,
    login,
    code,
  }
}

export const appLoginStore = defineStore('user', store, {
  persist: {
    enabled: true,
  },
})
