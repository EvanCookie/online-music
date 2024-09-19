// limit：数据的数量
import http from '@/utils/request'

// Banner
export const reqBannerData = (type = 0) => {
  return http.get('/banner', {
    params: { type }
  })
}

// 推荐歌单 limit
export const reqPlaylistData = (limit = 10) => {
  return http.get('/personalized', {
    params: { limit }
  })
}

// 新歌推荐
export const reqNewSonglistData = (limit = 10) => {
  return http.get('/personalized/newsong', {
    params: { limit }
  })
}

// 热门歌手
export const reqHotArtistData = (limit = 6) => {
  return http.get('/top/artists', {
    params: { limit }
  })
}
