import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  // 可控制playbar显示隐藏
  const showBar = ref(false)
  const setShowBar = (f) => {
    showBar.value = f
  }

  return { showBar, setShowBar }
})
