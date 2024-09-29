import http from '@/utils/request'

/**
 * 获取搜索数据
 * @param {*} keywords 关键字
 * @param {*} limit 数量条数
 * @param {*} type 类型
 * @param {*} offset 数据页数
 * @returns
 */
export const reqSearch = ({ keywords, limit, type, offset }) => {
  return http({
    url: '/search',
    method: 'GET',
    params: {
      keywords,
      limit,
      type,
      offset: (offset - 1) * limit
    }
  })
}
