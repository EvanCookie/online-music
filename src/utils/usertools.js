/**
 * 格式化播放量函数
 * @param {*} playCount 播放量
 * @returns 格式化后的播放量
 */
export const formatPlayCount = (playCount) => {
  if (playCount < 10000) {
    // 一万以下保持不变
    return playCount.toString()
  } else if (playCount >= 10000 && playCount < 100000000) {
    // 一万到一亿之间，转换成“XX.X万”的形式，但省略末尾的.0
    const formatted = (playCount / 10000).toFixed(1)
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + '万' : formatted + '万'
  } else {
    // 一亿以上，转换成“XX.X亿”的形式，但省略末尾的.0
    const formatted = (playCount / 100000000).toFixed(1)
    return formatted.endsWith('.0') ? formatted.slice(0, -2) + '亿' : formatted + '亿'
  }
}

/**
 * 时间戳格式化函数
 * @param {*} timestamp 被格式化的时间
 * @returns 格式化后的时间：XXXX年XX月XX日
 */
export const timestampToFormattedDate = (timestamp) => {
  const date = new Date(timestamp)
  // 使用getFullYear()获取年份
  const year = date.getFullYear()
  // 使用getMonth() + 1获取月份（月份是从0开始的，所以需要+1），并格式化
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  // 使用getDate()获取日，并格式化
  const day = ('0' + date.getDate()).slice(-2)
  // 返回格式化后的日期字符串
  return `${year}年${month}月${day}日`
}

/**
 * 滚动条函数
 * @param {*} speed 平滑滚动的速度系数
 */
export const smoothScrollToTop = (speed = 0.2) => {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(smoothScrollToTop)
    window.scrollTo(0, c * (1 - speed))
  }
}

/**
 * 格式化歌曲时长函数
 * @param {*} milliseconds
 * @returns 256000 => 04:16
 */
export const formatDuration = (ms) => {
  const seconds = Math.floor((ms / 1000) % 60)
  const minutes = Math.floor((ms / (1000 * 60)) % 60)

  // 使用'MM:SS'格式
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

  return formattedTime
}
