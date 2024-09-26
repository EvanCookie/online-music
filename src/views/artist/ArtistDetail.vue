<script setup name="ArtistDetail">
import SongList from '@/components/song-ls/SongList.vue'
import { ref, onMounted } from 'vue'
import { reqArtistDetail, reqArtistDesc } from '@/api/artist'

const pops = defineProps(['id'])
const artistDetail = ref({}) // 歌手部分信息
const hotSongs = ref([]) // 热门歌曲
const artistDesc = ref({}) // 歌手描述

// 获取歌手部分信息及热门歌曲
const getArtistDetailData = async () => {
  // 获取热门歌曲
  const { data } = await reqArtistDetail(pops.id)
  // 保存数据
  artistDetail.value = data.artist
  hotSongs.value = data.hotSongs
}

// 获取歌手描述
const getArtistDesc = async () => {
  const { data } = await reqArtistDesc(pops.id)
  artistDesc.value = data
}

onMounted(() => {
  getArtistDetailData()
  getArtistDesc()
})
</script>

<template>
  <div class="artist-detail">
    <div class="info-box">
      <div class="info-content">
        <div class="avatar">
          <img :src="artistDetail.img1v1Url" alt="" />
        </div>
        <div class="info-main">
          <div class="title">{{ artistDetail.name }}</div>
          <div class="intro">
            <p>{{ artistDetail.briefDesc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="works-box">
      <div class="works-content">
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" title="热门作品">
            <!-- 列表 -->
            <SongList :songlist="hotSongs" />
          </a-tab-pane>
          <a-tab-pane key="2" title="专辑"> 待完善 </a-tab-pane>
          <a-tab-pane key="3" title="相关MV"> 待完善 </a-tab-pane>
          <a-tab-pane key="4" title="艺人介绍">
            <div class="artist-desc">
              <div id="jianjie" class="desc-item">
                <h2>{{ artistDetail.name }}<i>&nbsp;</i>简介</h2>
                <div class="desc">
                  <p>{{ artistDesc.briefDesc }}</p>
                </div>
              </div>
              <!-- 渲染 -->
              <div
                class="desc-item"
                v-for="item in artistDesc.introduction"
                :key="item.ti"
              >
                <h2>{{ item.ti }}</h2>
                <div class="desc">
                  <p>{{ item.txt }}</p>
                </div>
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.artist-detail {
  // 歌手信息
  .info-box {
    padding: 30px 0;
    background: #000;
    .info-content {
      margin: 0 auto;
      width: 1200px;

      display: flex;

      .avatar {
        border-radius: 50%;
        height: 220px;
        margin-right: 60px;
        overflow: hidden;
        width: 220px;
      }

      .info-main {
        flex: 1;
        color: $secondary-color;
        font-size: 14px;

        .title {
          margin-bottom: 30px;
          color: $primary-color;
          font-size: 28px;
          font-weight: 600;
        }

        .intro {
          height: 150px;
          overflow: hidden;
        }
      }
    }
  }

  // 歌曲信息
  .works-box {
    margin-top: 50px;

    .works-content {
      margin: 0 auto;
      width: 1200px;

      // tab样式
      &:deep(.arco-tabs) {
        color: $secondary-color;

        // 关闭nav 白色下线条
        .arco-tabs-nav::before {
          display: none;
        }

        // tab-nav
        .arco-tabs-nav-tab {
          // 基本样式
          .arco-tabs-tab {
            font-size: 16px;
            font-weight: 400;
            color: $secondary-color;
          }

          // 激活tab下划线样式
          .arco-tabs-nav-ink {
            height: 1px;
            background-color: $primary-color;
          }

          // 激活tab文字样式
          .arco-tabs-tab.arco-tabs-tab-active {
            color: $primary-color;
          }

          // 关闭悬停伪类
          .arco-tabs-tab .arco-tabs-tab-title::before {
            display: none;
          }
        }
      }

      .artist-desc {
        // 歌手描述项样式
        .desc-item {
          h2 {
            padding-left: 10px;
            font-size: 14px;
            font-weight: 600;
            color: $primary-color;
            border-left: 5px solid $hover-color;
          }

          .desc p {
            margin: 25px 0;
            color: $secondary-color;
            line-height: 2em;
            white-space: pre-wrap;
          }
        }

        // 覆盖简介样式
        #jianjie {
          .desc p {
            text-indent: 2em;
            white-space: normal;
          }
        }
      }
    }
  }
}
</style>
