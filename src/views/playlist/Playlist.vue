<script setup name="Playlist">
import { ref, onMounted } from 'vue'
import { reqPlaylistCategory, reqPlaylistData } from '@/api/playlist'
import PlaylistItem from '@/components/playlist-item/PlaylistItem.vue'

const categoryList = ref([]) // 歌单分类信息
const activeCategory = ref(0) // 激活的分类
const playList = ref([]) // 歌单数据列表
const order = ref('hot') // 热门hot/最新new
const cat = ref('全部') // 获取歌单的数据
const offset = ref(1) // 当前页数
const total = ref(0) // 总条数

// 获取歌单分类信息
const getCategoryData = async () => {
  const { data } = await reqPlaylistCategory()
  categoryList.value = data.sub
}

// 获取歌单列表
const getPlaylistData = async () => {
  // 传入参数获取数据
  const { data } = await reqPlaylistData(order.value, cat.value, offset.value)

  // 保存数据
  playList.value = data.playlists
  total.value = data.total
  cat.value = data.cat
}

// 切换分类
const clickCategory = (index, e) => {
  activeCategory.value = index // 保存当前激活选项
  cat.value = e.target.innerText // 保存激活的category
  offset.value = 1
  // 分类数据更新，重新调用接口
  getPlaylistData()
}

// 切换分页
const changeCurrent = () => {
  // 获取最新数据
  getPlaylistData()
  smoothScrollToTop()
}

function smoothScrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop
  if (c > 0) {
    window.requestAnimationFrame(smoothScrollToTop)

    // 这里的 0.9 是平滑滚动的速度系数，可以根据需要调整
    window.scrollTo(0, c * (1 - 0.5))
  }
}

onMounted(() => {
  getCategoryData()
  getPlaylistData()
})
</script>

<template>
  <div class="playlist">
    <div class="inside-container">
      <!-- 歌单分类 -->
      <div class="category-ls">
        <ul>
          <li
            v-for="(item, index) in categoryList"
            :key="index"
            @click="clickCategory(index + 1, $event)"
            :class="{ active: index + 1 === activeCategory }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 歌单列表 -->
      <div class="playlist-ls">
        <div class="playlist-title">
          <h2>{{ cat }}</h2>
        </div>
        <div class="playlist-items">
          <PlaylistItem v-for="item in playList" :key="item.id" :item="item" />
        </div>
      </div>
      <!-- 分页器 -->
      <div class="pagination">
        <a-pagination
          @change="changeCurrent"
          v-model:current="offset"
          show-total
          :show-jumper="false"
          :page-size="35"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.playlist {
  .inside-container {
    margin: 0 auto;
    width: 1200px;
    // 分类区域
    .category-ls {
      padding-top: 40px;
      ul {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        gap: 5px;
        li {
          height: 30px;
          line-height: 30px;
          color: $primary-color;
          background: #000;
          border-radius: 20px;
          cursor: pointer;
          text-align: center;

          &.active {
            color: $primary-color;
            background: $hover-color;
          }
        }
      }
    }
    // 歌单列表区域
    .playlist-ls {
      margin-top: 30px;
      .playlist-title {
        margin-bottom: 20px;
        font-size: 18px;
        color: $primary-color;
      }
      .playlist-items {
        display: grid;
        grid-template-columns: repeat(5, auto);
        justify-content: space-between;
      }
    }
    // 分页器
    .pagination {
      margin-top: 30px;
      display: flex;
      justify-content: center;

      &:deep(.arco-pagination) {
        .arco-pagination-list {
          .arco-pagination-item {
            color: $secondary-color;
            font-size: 16px;
            border-radius: 0;

            &:hover {
              color: $hover-color;
              background-color: transparent;
            }

            &.arco-pagination-item-active {
              color: $primary-color;
              background-color: $hover-color;
            }
          }
        }
      }
    }
  }
}
</style>
