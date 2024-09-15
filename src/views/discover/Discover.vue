<script setup name="Discover">
import FocusWrap from '@/components/focus-wrap/FocusWrap.vue'
import PalylistItem from '@/components/palylist-item/PalylistItem.vue'
import NewsongItem from '@/components/newsong-item/NewsongItem.vue'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { reqPalylistData, reqNewSonglistData } from '@/api/discover'

// 推荐歌单数据
const palylistData = ref([])
const getPalylistData = async () => {
  // 请求数据
  const { data } = await reqPalylistData(10)
  // 保存
  palylistData.value = data.result
}

// 推荐音乐数据
const songlistData = ref([])
const getsonglistData = async () => {
  const { data } = await reqNewSonglistData(6)
  songlistData.value = data.result
}

onMounted(() => {
  getPalylistData()
  getsonglistData()
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
  </div>
</template>

<style scoped lang="scss">
$primary-color: #f8f8f8;
$secondary-color: #909399;
$hover-color: #c71721;

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
    }
  }

  // 歌单推荐
  .palylist-box {
    .card-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  // 新歌推荐
  .newsong-box {
    .card-content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
}
</style>
