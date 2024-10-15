import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { reqSongUrl } from '@/api/player'

export const usePlayerStore = defineStore('player', () => {
  // 可控制playbar显示隐藏
  const showBar = ref(false)
  const toggleShowBar = (flag) => {
    if (flag !== undefined) {
      showBar.value = flag
    } else {
      showBar.value = !showBar.value
    }
  }

  const songInfo = ref({}) // 歌曲信息
  const currentSongId = ref(null) // 当前歌曲id
  const currentSongUrl = ref({}) // 当前歌曲url
  const isPlaying = ref(false) // 是否播放
  const volume = ref(0.5) // 默认音量
  const currentTime = ref(0) // 当前播放时间
  const duration = computed(() => {
    const ms = currentSongUrl.value.time
    const seconds = Math.floor((ms / 1000) % 60)
    const minutes = Math.floor((ms / (1000 * 60)) % 60)

    // 使用'MM:SS'格式
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`

    return formattedTime
  })
  const audio = new Audio() // 创建音频元素

  // 获取歌曲url并播放
  const fetchAndPlaySong = async (songId) => {
    // 判断songId 是否当前歌曲
    if (songId === currentSongId.value) return

    // 获取歌曲URL
    const { data } = await reqSongUrl(songId)

    // 保存歌曲id & url数据
    currentSongId.value = songId
    currentSongUrl.value = data.data[0]
    audio.src = currentSongUrl.value.url

    audio.play()
    showBar.value = true
    isPlaying.value = true

    // 时间更新时调用
    audio.ontimeupdate = () => {
      currentTime.value = audio.currentTime
    }

    // 保存歌曲总时长
    duration.value = audio.duration
  }

  // 播放/暂停
  const playPause = () => {
    if (isPlaying.value) {
      audio.pause()
    } else {
      audio.play()
    }
    isPlaying.value = !isPlaying.value
  }

  const nextSong = () => {
    // 实现下一首歌的逻辑
    console.log('下一首')
  }

  const previousSong = () => {
    // 实现上一首歌的逻辑
    console.log('上一首')
  }

  // 设置音量
  const setVolume = (vol) => {
    volume.value = vol
    audio.volume = volume
  }

  // 设置进度
  const seekTo = (time) => {
    audio.currentTime = time
  }

  return {
    showBar,
    audio,
    isPlaying,
    songInfo,
    currentTime,
    duration,
    volume,
    toggleShowBar,
    fetchAndPlaySong,
    playPause,
    nextSong,
    previousSong,
    setVolume,
    seekTo
  }
})
