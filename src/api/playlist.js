import http from '@/utils/request'

/**
 * 获取歌单分类
 * @returns
 */
export const reqPlaylistCategory = () => {
  return http.get('/playlist/catlist')
}

/**
 * 获取歌单数据
 * @param {*} order 最新和最热
 * @param {*} cat 分类
 * @param {*} offset 数据页数
 * @param {*} limit 数据条数
 * @returns
 */
export const reqPlaylistData = ({ order, cat, offset, limit }) => {
  return http.get('/top/playlist', {
    params: {
      order,
      cat,
      limit,
      offset: (offset - 1) * limit
    }
  })
}

/**
 * 获取歌单详情数据
 * @param {*} id 歌单id
 * @returns
 */
export const reqPlaylistDetailData = (id) => {
  return http.get('/playlist/detail', {
    params: { id }
  })
}

/**
 * 获取歌单歌曲数据
 * @param {*} id 歌单id
 * @param {*} limit 数据条数
 * @param {*} offset 数据页数
 * @returns
 */
export const reqPlaylistSongData = (id, limit, offset) => {
  return http.get('/playlist/track/all', {
    params: {
      id,
      limit,
      offset: (offset - 1) * limit
    }
  })
}
