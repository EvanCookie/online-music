import http from '@/utils/request'

/**
 * 获取banner数据
 * @param {*} type 设备类型
 * @returns
 */
export const reqBannerData = (type = 0) => {
  return http.get('/banner', {
    params: { type }
  })
}

/**
 * 获取推荐歌单
 * @param {*} limit 数据条数
 * @returns
 */
export const reqPlaylistData = (limit = 10) => {
  return http.get('/personalized', {
    params: { limit }
  })
}

/**
 * 获取新歌推荐
 * @param {*} limit 数据条数
 * @returns
 */
export const reqNewSonglistData = (limit = 10) => {
  return http.get('/personalized/newsong', {
    params: { limit }
  })
}

/**
 * 获取热门歌手
 * @param {*} limit 数据条数
 * @returns
 */
export const reqHotArtistData = (limit = 6) => {
  return http.get('/top/artists', {
    params: { limit }
  })
}
