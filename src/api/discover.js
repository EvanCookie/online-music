import http from '@/utils/request'

export const reqBannerList = (type = 0) => {
  return http.get('/banner' + `?type=${type}`)
}
