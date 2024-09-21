import http from '@/utils/request'

/**
 * 获取歌手数据
 * @param {*} limit 获取的歌手数
 * @param {*} offset 当前页数
 * @param {*} initial 筛选字母
 * @param {*} area 筛选地区
 * @param {*} type 筛选类型
 * @returns
 */
export const reqArtistData = (offset, initial, area, type, limit = 35) => {
  return http.get('/artist/list', {
    params: {
      limit,
      offset: (offset - 1) * limit,
      initial,
      area,
      type
    }
  })
}
