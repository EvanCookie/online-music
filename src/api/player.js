import http from '@/utils/request'

/**
 * 获取歌曲播放地址
 * @param {*} id 歌曲id
 * @param {*} level 播放音质等级
 * @returns
 */
export const reqSongUrl = (id, level = 'lossless') => {
  return http.get('/song/url/v1', {
    params: { id, level }
  })
}

/**
 * 获取歌曲lrc歌词
 * @param {*} id 歌曲id
 * @returns
 */
export const reqSonglyric = (id) => {
  return http.get('/lyric', {
    params: { id }
  })
}

/**
 * 检测音乐是否可用
 * @param {*} id
 * @returns
 */
export const reqCheckMusic = (id) => {
  return http.get('/check/music', {
    params: { id }
  })
}
