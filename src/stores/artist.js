import { reactive } from 'vue'
import { defineStore } from 'pinia'

// 使用Array.from()生成数组，其中每个元素都是一个对象，包含type和name属性
const lettersArray = Array.from({ length: 26 }, (_, i) => ({
  type: 'A'.charCodeAt(0) + i, // 使用ASCII码值作为type
  name: String.fromCharCode('A'.charCodeAt(0) + i) // 使用字符作为name
}))

export const useArtistStore = defineStore('artist', () => {
  // 歌手筛选静态数据
  const initial = reactive([
    {
      type: -1,
      name: '全部'
    },
    ...lettersArray,
    {
      type: 0,
      name: '#'
    }
  ])
  const area = reactive([
    { type: -1, name: '全部' },
    { type: 7, name: '华语' },
    { type: 96, name: '欧美' },
    { type: 8, name: '日本' },
    { type: 16, name: '韩国' },
    { type: 0, name: '其他' }
  ])
  const type = reactive([
    { type: -1, name: '全部' },
    { type: 1, name: '男' },
    { type: 2, name: '女' },
    { type: 3, name: '组合/乐队' }
  ])

  return { initial, type, area }
})
