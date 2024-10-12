<script setup name="Artist">
import { ref, reactive, onMounted } from 'vue'
import { smoothScrollToTop } from '@/utils/usertools'
import { reqArtistData } from '@/api/artist'
import { useArtistStore } from '@/stores/artist'
const artistStore = useArtistStore()

// 当前激活的选项
const currentItem = reactive({
  initial: 0,
  area: 0,
  type: 0
})
// 点击字母
const clickInitial = (index, data) => {
  currentItem.initial = index
  reqDataObj.value.initialPage = data
  getArtistData()
}
// 点击区域
const clickArea = (index, data) => {
  currentItem.area = index
  reqDataObj.value.areaPage = data
  getArtistData()
}
// 点击类型
const clickType = (index, data) => {
  currentItem.type = index
  reqDataObj.value.typePage = data
  getArtistData()
}

const artistList = ref([]) // 歌手数据
const reqDataObj = ref({
  offset: 1, // 当前页
  initialPage: -1, // 字母
  areaPage: -1, // 区域
  typePage: -1, // 类型
  limit: 35 // 每页数据数
})

// 获取歌手数据
const getArtistData = async () => {
  const { data } = await reqArtistData(reqDataObj.value)
  const newData = data.artists
  artistList.value = [...newData]
}

// 切换下一页函数
const fun = () => {
  reqDataObj.value.offset = reqDataObj.value.offset += 1
  getArtistData()
  smoothScrollToTop()
}

onMounted(() => {
  getArtistData()
})
</script>

<template>
  <div class="artist">
    <div class="inside-container">
      <!-- 筛选 -->
      <div class="filter-box">
        <ul class="filter-group">
          <li
            class="item"
            :class="{ current: index === currentItem.initial }"
            v-for="(item, index) in artistStore.initial"
            :key="index"
            @click="clickInitial(index, item.type)"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul class="filter-group">
          <li
            class="item"
            :class="{ current: index === currentItem.area }"
            v-for="(item, index) in artistStore.area"
            :key="index"
            @click="clickArea(index, item.type)"
          >
            {{ item.name }}
          </li>
        </ul>
        <ul class="filter-group">
          <li
            class="item"
            :class="{ current: index === currentItem.type }"
            v-for="(item, index) in artistStore.type"
            :key="index"
            @click="clickType(index, item.type)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 歌手列表 -->
      <div class="artist-ls">
        <ArtistItem v-for="item in artistList" :key="item.id" :artistItem="item" />
      </div>
      <!-- 获取下一页按钮 -->
      <div class="btn">
        <a-button @click="fun" type="primary" status="success">获取下一页数据</a-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.artist {
  .inside-container {
    margin: 0 auto;
    width: 1200px;
    // 筛选区域
    .filter-box {
      margin-top: 30px;
      margin-bottom: 10px;
      .filter-group {
        margin-top: 20px;
        display: flex;

        .item {
          border-radius: 15px;
          cursor: pointer;
          height: 30px;
          line-height: 30px;
          padding: 0 15px;
          text-align: center;
          color: $primary-color;
          transition: all 0.3s ease-out;

          &.current {
            background: $hover-color;
            color: $primary-color;
          }
        }
      }
    }
    // 歌手列表区域
    .artist-ls {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(5, auto);
      justify-content: space-between;
    }

    .btn {
      margin-top: 30px;
      display: flex;
      justify-content: flex-end;

      :deep(.arco-btn) {
        background-color: $hover-color;
        color: $primary-color;
      }
    }
  }
}
</style>
