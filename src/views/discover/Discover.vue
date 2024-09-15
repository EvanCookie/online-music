<script setup name="Discover">
import FocusWrap from '@/components/focus-wrap/FocusWrap.vue'
import PalylistItem from '@/components/palylist-item/PalylistItem.vue'
import NewsongItem from '@/components/newsong-item/NewsongItem.vue'
import ArtistItem from '@/components/artist-item/ArtistItem.vue'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { reqPalylistData, reqNewSonglistData, reqHotArtistData } from '@/api/discover'

// 推荐歌单数据
const palylistData = ref([])
const getPalylistData = async () => {
  const { data } = await reqPalylistData(10)
  palylistData.value = data.result
}

// 推荐音乐数据
const songlistData = ref([])
const getSonglistData = async () => {
  const { data } = await reqNewSonglistData(6)
  songlistData.value = data.result
}

// 热门歌手数据
const hotartistData = ref([])
const getHotartistData = async () => {
  const { data } = await reqHotArtistData(12)
  hotartistData.value = data.artists
}

onMounted(() => {
  getPalylistData()
  getSonglistData()
  getHotartistData()
})
</script>

<template>
  <div class="discover-page">
    <!-- 轮播 -->
    <FocusWrap />
    <!-- 歌单推荐 -->
    <div class="palylist-box card">
      <div class="inside-container">
        <div class="card-header">
          <div class="title">
            <h2>歌单推荐</h2>
          </div>
          <div class="more">
            <router-link to="/palylist">更多</router-link>
          </div>
        </div>
        <div class="card-content">
          <PalylistItem v-for="item in palylistData" :key="item.id" :item="item" />
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
          <NewsongItem v-for="item in songlistData" :key="item.id" :item="item" />
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
          <ArtistItem v-for="item in hotartistData" :key="item.id" :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.discover-page {
  // 卡片公共样式
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
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
