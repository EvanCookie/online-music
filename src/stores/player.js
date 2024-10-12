import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  // 可控制playbar显示隐藏
  const showBar = ref(false)
  // 切换playbar显示
  const setShowBar = () => {
    showBar.value = !showBar.value
  }

  return { showBar, setShowBar }
})
