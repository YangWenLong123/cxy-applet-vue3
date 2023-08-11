/*
 * @Author: along
 * @Description:
 * @Date: 2023-08-09 23:06:38
 * @LastEditors: along
 * @LastEditTime: 2023-08-10 17:20:10
 * @FilePath: /cxy-applet-vue3/src/utils/sleep/index.ts
 */
const sleep = function<T> (data: T, ms: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, ms)
  })
}

export {
  sleep,
}
