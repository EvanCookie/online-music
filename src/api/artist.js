import http from '@/utils/request'

/**
 * 获取歌手列表数据
 * @param {*} limit 获取的歌手数
 * @param {*} offset 当前页数
 * @param {*} initial 筛选字母
 * @param {*} area 筛选地区
 * @param {*} type 筛选类型
 * @returns
 */
export const reqArtistData = ({ offset, initialPage, areaPage, typePage, limit }) => {
  return http.get('/artist/list', {
    params: {
      limit,
      offset: (offset - 1) * limit,
      initial: initialPage,
      area: areaPage,
      type: typePage
    }
  })
}

/**
 * 获取歌手描述
 * @param {*} id 歌手 id
 * @returns
 */
export const reqArtistDesc = (id) => {
  return http.get('/artist/desc', {
    params: { id }
  })
}

/**
 * 获取歌手部分信息和热门歌曲
 * @param {*} id 歌手 id
 * @returns
 */
export const reqArtistDetail = (id) => {
  return http.get('/artists', {
    params: { id }
  })
}

/**
 * 获取歌手mv
 * @param {*} id 歌手 id
 * @returns
 */
export const reqArtistMv = (id) => {
  return http.get('/artist/mv', {
    params: { id }
  })
}

/**
 * 获取歌手专辑
 * @param {*} id 歌手 id
 * @param {*} limit 获取数据条数
 * @param {*} offset 当前页码
 * @returns
 */
export const reqArtistAlbum = (id, limit, offset) => {
  return http.get('/artist/album', {
    params: {
      id,
      limit,
      offset: (offset - 1) * limit
    }
  })
}

/**
 * 获取相似歌手
 * @param {*} id 歌手 id
 * @returns
 */
export const reqSimiArtist = (id) => {
  return http.get('/simi/artist', {
    params: { id }
  })
}
