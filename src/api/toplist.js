import http from '@/utils/request'

// 获取所有榜单
export const reqTopList = () => {
  return http.get('/toplist')
}

// 获取所有榜单摘要
export const reqTopListInfo = () => {
  return http.get('/toplist/detail')
}
