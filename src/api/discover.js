import http from '@/utils/request'

// banner
export const reqBannerData = (type = 0) => {
  return http.get(`/banner?type=${type}`)
}

// 推荐歌单
export const reqPalylistData = (limit = 30) => {
  return http.get(`/personalized?limit=${limit}`)
}

// 新歌推荐
export const reqNewSonglistData = (limit = 10) => {
  return http.get(`/personalized/newsong?limit=${limit}`)
}

// 热门歌手
export const reqHotArtistData = (limit = 50) => {
  return http.get(`/top/artists?limit=${limit}`)
}
