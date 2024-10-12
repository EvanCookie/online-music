<script setup name="FocusWrap">
import { ref, onMounted } from 'vue'
import { reqBannerData } from '@/api/discover'

const bannerList = ref([])
const getBannerList = async () => {
  try {
    const { data } = await reqBannerData()
    bannerList.value = data.banners
  } catch (error) {
    console.error('Error fetching banner data:', error.message)
  }
}

onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="focus-box">
    <div class="inside-container">
      <a-carousel
        animation-name="card"
        show-arrow="hover"
        :auto-play="{ interval: 4000, hoverToPause: true }"
        indicator-position="outer"
        indicator-type="line"
      >
        <a-carousel-item v-for="item in bannerList" :key="item.imageUrl">
          <img :src="item.imageUrl" />
        </a-carousel-item>
      </a-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.focus-box {
  margin-top: 30px;
  margin-bottom: 50px;
  .inside-container {
    margin: 0 auto;
    width: 1200px;

    :deep(.arco-carousel) {
      width: 100%;
      height: 300px;
      cursor: pointer;

      .arco-carousel-card {
        div {
          width: 62.5%;
        }
      }

      // 箭头样式
      .arco-carousel-arrow {
        div {
          width: 60px;
          height: 60px;
          background-color: rgba(255, 255, 255, 0.4);

          svg {
            font-size: 20px;
            color: #000;
          }
        }

        .arco-carousel-arrow-left {
          left: -75px;
        }
        .arco-carousel-arrow-right {
          right: -75px;
        }
      }
    }
  }
}
</style>
