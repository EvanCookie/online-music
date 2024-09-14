<script setup name="Discover">
import FocusWrap from '@/components/focuswrap/FocusWrap.vue'
import PalylistItem from '@/components/palylistitem/PalylistItem.vue'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { reqPalylistData } from '@/api/discover'

// 推荐歌单数据
const palylistData = ref([])
const getPalylistData = async () => {
  // 请求数据
  const { data } = await reqPalylistData(10)
  // 保存
  palylistData.value = data.result
}

onMounted(() => {
  getPalylistData()
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
    <div class="card">
      <div class="inside-container">
        <div class="card-header">
          <div class="title">
            <h2>新歌推荐</h2>
          </div>
          <div class="more">
            <router-link to="/palylist">更多</router-link>
          </div>
        </div>
        <div class="card-content">sda</div>
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
}
</style>
