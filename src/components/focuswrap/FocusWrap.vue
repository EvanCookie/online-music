<script setup name="FocusWrap">
import { ref, onMounted } from 'vue'
import { reqBannerList } from '@/api/discover'

const bannerList = ref([])
const getBannerList = async () => {
  // 请求banner数据
  const { data } = await reqBannerList()
  // 保存
  bannerList.value = data.banners
}

onMounted(() => {
  getBannerList()
})
</script>

<template>
  <div class="focus-box">
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
</template>

<style scoped lang="scss">
.focus-box {
  margin: 30px 0;
  width: 100%;

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
</style>
