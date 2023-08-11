import { http } from '~/utils/request/index'

/**
 * Description placeholder
 * @date 2023/7/27 - 10:14:39
 *
 * @export
 * @param {PageType} data
 * @returns {*}
 */
export function getCardThemeList(data) {
  return http.request({
    method: 'GET',
    url: 'themes',
    data,
  })
}
