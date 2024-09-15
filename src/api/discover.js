import http from '@/utils/request'

// Banner
export const reqBannerData = (type = 0) => {
  return http.get('/banner', {
    params: { type }
  })
}

// 推荐歌单 limit（歌单数）
export const reqPalylistData = (limit = 10) => {
  return http.get('/personalized', {
    params: { limit }
  })
}

// 新歌推荐 limit（歌曲数）
export const reqNewSonglistData = (limit = 10) => {
  return http.get('/personalized/newsong', {
    params: { limit }
  })
}

// 热门歌手
export const reqHotArtistData = (limit) => {
  return http.get('/top/artists', {
    params: { limit }
  })
}
