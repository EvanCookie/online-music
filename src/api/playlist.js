import http from '@/utils/request'

// 获取歌单分类
export const reqPlaylistCategory = () => {
  return http.get('/playlist/catlist')
}

// 获取歌单列表数据
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

// 获取歌单详情
export const reqPlaylistDetailData = (id) => {
  return http.get('/playlist/detail', {
    params: { id }
  })
}

// 获取歌单全部歌曲
export const reqPlaylistSongData = (id, limit, offset) => {
  return http.get('/playlist/track/all', {
    params: {
      id,
      limit,
      offset: (offset - 1) * limit
    }
  })
}
