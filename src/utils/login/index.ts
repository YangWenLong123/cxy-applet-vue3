/*
 * @Author: along
 * @Description:1223
 * @Date: 2023-08-10 14:25:26
 * @LastEditors: along
 * @LastEditTime: 2023-08-11 09:39:37
 * @FilePath: /cxy-applet-vue3/src/utils/login/index.ts
 */
import { appLoginStore } from '~/store'
import { userInfo, userLogin } from '@/api/login'

const { setCode } = appLoginStore()

export function appLogin(e) {
  console.log('e', e.detail)

  return new Promise((resolve, reject) => {
    uni.login({
      success: async (res_login) => {
        console.log('code', res_login.code)

        setCode(res_login.code)

        const loginResult = await userLogin({ appId: '', jsCode: res_login.code })

        console.log('loginResult', loginResult)

        if (loginResult?.userInfo?.memberFlag) {
          const info = userInfo()

          console.log('userInfo', info)

          resolve()
        }
      },
      fail(res) {
        console.log(`微信登录失败！${res.errMsg}`)
        reject()
      },
    })
  })
}
