/*
 * @Author: zhangxiangxiang
 * @Description:
 * @Date: 2023-08-09 23:57:52
 * @LastEditors: zhangxiangxiang
 * @LastEditTime: 2023-08-10 00:04:11
 * @FilePath: /krafthein-mpm/src/api/login/index.ts
 */
import { http } from '~/utils/request/index'

export function userLogin(data) {
  return http.request({
    method: 'POST',
    url: '/user/login', // 随便写的
    data,
  })
}

export function userInfo(data) {
  return http.request({
    method: 'GET',
    url: '/user/current', // 随便写的
    data,
  })
}
