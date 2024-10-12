<script setup name="Discover">
import FocusWrap from '@/components/focus-wrap/FocusWrap.vue'
import PlaylistItem from '@/components/playlist-item/PlaylistItem.vue'
import NewsongItem from '@/components/newsong-item/NewsongItem.vue'
import ArtistItem from '@/components/artist-item/ArtistItem.vue'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { reqPlaylistData, reqNewSonglistData, reqHotArtistData } from '@/api/discover'

// 推荐歌单数据
const playlistData = ref([])
const getPlaylistData = async () => {
  try {
    const { data } = await reqPlaylistData(10)
    playlistData.value = data.result
  } catch (error) {
    console.error('Error fetching playlist data:', error.message)
  }
}

// 推荐音乐数据
const songlistData = ref([])
const getSonglistData = async () => {
  try {
    const { data } = await reqNewSonglistData(6)
    songlistData.value = data.result
  } catch (error) {
    console.error('Error fetching new songlist data:', error.message)
  }
}

// 热门歌手数据
const hotartistData = ref([])
const getHotartistData = async () => {
  try {
    const { data } = await reqHotArtistData(12)
    hotartistData.value = data.artists
  } catch (error) {
    console.error('Error fetching hot artist data:', error.message)
  }
}

onMounted(() => {
  getPlaylistData()
  getSonglistData()
  getHotartistData()
})
</script>

<template>
  <div class="discover-page">
    <!-- 轮播 -->
    <FocusWrap />
    <!-- 歌单推荐 -->
    <div class="playlist-box card">
      <div class="inside-container">
        <div class="card-header">
          <div class="title">
            <h2>歌单推荐</h2>
          </div>
          <div class="more">
            <router-link to="/playlist">更多</router-link>
          </div>
        </div>
        <div class="card-content">
          <div class="discover-playlist">
            <PlaylistItem
              v-for="item in playlistData"
              :key="item.id"
              :playlistItem="item"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 新歌推荐 -->
    <div class="newsong-box card">
      <div class="inside-container">
        <div class="card-header">
          <div class="title">
            <h2>新歌推荐</h2>
          </div>
          <div class="more">
            <router-link to="/">更多</router-link>
          </div>
        </div>
        <div class="card-content">
          <div class="discover-newsong">
            <NewsongItem
              v-for="item in songlistData"
              :key="item.id"
              :newsongItem="item"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 热门歌手 -->
    <div class="hotartist-box card">
      <div class="inside-container">
        <div class="card-header">
          <div class="title">
            <h2>热门歌手</h2>
          </div>
          <div class="more">
            <router-link to="/artist">更多</router-link>
          </div>
        </div>
        <div class="card-content">
          <div class="discover-hotartist">
            <ArtistItem v-for="item in hotartistData" :key="item.id" :artistItem="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.discover-page {
  // 卡片样式
  .card {
    margin: 50px 0;
    .inside-container {
      margin: 0 auto;
      width: 1200px;
      .card-header {
        padding-bottom: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .title h2 {
          font-size: 28px;
          color: $primary-color;
        }
        .more {
          color: $secondary-color;
        }
        .more:hover {
          color: $hover-color;
        }
      }

      .card-content {
        // grid 区域公共样式
        & > [class^='discover-'] {
          display: grid;
          justify-content: space-between;
        }

        .discover-playlist {
          grid-template-columns: repeat(5, auto);
        }
        .discover-newsong {
          grid-template-columns: repeat(3, auto);
        }
        .discover-hotartist {
          grid-template-columns: repeat(6, auto);
        }
      }
    }
  }
}
</style>
