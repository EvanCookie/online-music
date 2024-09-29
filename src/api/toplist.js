import http from '@/utils/request'

/**
 * 获取所有榜单
 * @returns
 */
export const reqTopList = () => {
  return http.get('/toplist')
}

/**
 * 获取所有榜单摘要
 * @returns
 */
export const reqTopListInfo = () => {
  return http.get('/toplist/detail')
}
