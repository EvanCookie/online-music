<script setup name="Playlist">
import { ref, onMounted, computed } from 'vue'
import { reqPlaylistCategory, reqPlaylistData } from '@/api/playlist'
import PlaylistItem from '@/components/playlist-item/PlaylistItem.vue'
import { smoothScrollToTop } from '@/utils/usertools'

const categoryList = ref([]) // 歌单分类信息
const currentCategory = ref(-1) // 当前的分类
const playList = ref([]) // 歌单数据列表
const order = ref('hot') // 热门hot/最新new
const cat = ref('全部') // 歌单类型
const offset = ref(1) // 当前页
const limit = ref(35) // 每页数据数
const total = ref(0) // 总条数
// 计算 - 类型右侧X号是否显示
const offSearch = computed({
  get() {
    return cat.value == '全部' ? false : true
  }
})

// 获取歌单类型
const getCategoryData = async () => {
  const { data } = await reqPlaylistCategory()
  categoryList.value = data.sub
}

// 获取歌单列表
const getPlaylistData = async () => {
  // 传入参数获取数据
  const { data } = await reqPlaylistData(
    order.value,
    cat.value,
    offset.value,
    limit.value
  )

  // 保存数据
  playList.value = data.playlists
  total.value = data.total
  cat.value = data.cat
}

/**
 * 切换当前歌单类型
 * @param index 当前的项索引
 * @param e 当前选择的category
 */
const changeCategory = (index, category) => {
  // 设置相关数据
  currentCategory.value = index // 保存当前激活选项
  cat.value = category // 保存当前的category
  offset.value = 1 // 返回第一页
  // 重新获取数据
  getPlaylistData()
}

// 切换分页
const changeCurrent = () => {
  // 获取最新数据
  getPlaylistData()
  // 回到顶部
  smoothScrollToTop()
}

// 点击关闭按钮
const closeFun = () => {
  // 重置相关数据
  cat.value = '全部'
  currentCategory.value = -1
  // 重新获取数据
  getPlaylistData()
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
            @click="changeCategory(index, item.name)"
            :class="{ current: index === currentCategory }"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- 歌单列表 -->
      <div class="playlist-ls">
        <div class="playlist-title">
          <h2>{{ cat }}</h2>
          <div class="off" v-show="offSearch" @click="closeFun"><icon-close /></div>
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
          :page-size="limit"
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
      margin-top: 30px;
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

          &.current {
            color: $primary-color;
            background: $hover-color;
          }

          &:hover {
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
        display: flex;
        font-size: 18px;
        color: $primary-color;

        .off {
          margin-left: 5px;

          &:hover {
            color: $hover-color;
            cursor: pointer;
          }
        }
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
