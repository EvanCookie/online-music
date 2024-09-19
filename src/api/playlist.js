import http from '@/utils/request'

// 获取歌单分类
export const reqPlaylistCategory = () => {
  return http.get('/playlist/catlist')
}

// 获取歌单数据
export const reqPlaylistData = (order, cat, offset, limit = 35) => {
  return http.get('/top/playlist', {
    params: {
      order,
      cat,
      limit,
      offset: (offset - 1) * limit
    }
  })
}
