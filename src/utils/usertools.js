/**
 * 格式化播放量函数
 * @param {*} playCount 播放量
 * @returns 加单位后的播放量
 */
export const formatPlayCount = (playCount) => {
  // 处理特殊情况：当播放量为0时
  if (playCount === 0) {
    formattedString = '0万'
    return formattedString
  }

  // 转换单位&处理小数
  let countInWan = playCount / 10000
  let formattedString = countInWan.toFixed(1)

  // 检查是否以".0"结尾，如果是，则截取掉这部分
  formattedString = formattedString.endsWith('.0')
    ? formattedString.slice(0, -2) + '万'
    : (formattedString += '万')

  return formattedString
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
