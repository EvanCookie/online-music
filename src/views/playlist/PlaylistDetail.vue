<script setup name="PlaylistDetail">
import SongList from '@/components/song-ls/SongList.vue'
import { formatPlayCount, timestampToFormattedDate } from '@/utils/usertools'
import { reqPlaylistDetailData, reqPlaylistSongData } from '@/api/playlist'
import { ref, onMounted } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const playListDetail = ref({}) // 歌单详情信息
const songList = ref([]) // 歌曲列表
const limit = ref(999) // 获取数据数
const offset = ref(1) // 当前页

// 获取歌单详情
const getPlaylistDetailData = async () => {
  try {
    const { data } = await reqPlaylistDetailData(props.id, limit, offset)
    playListDetail.value = data.playlist
  } catch (error) {
    console.error('Error fetching playlist detail data:', error.message)
  }
}

// 获取歌单歌曲
const getPlaylistSongData = async () => {
  try {
    const { data } = await reqPlaylistSongData(props.id, limit.value, offset.value)
    songList.value = data.songs
  } catch (error) {
    console.error('Error fetching playlist song detail data:', error.message)
  }
}

onMounted(() => {
  // 获取歌单详情
  getPlaylistDetailData()
  // 获取歌单歌曲
  getPlaylistSongData()
})
</script>

<template>
  <div class="playlist-detail">
    <div class="inside-container">
      <div class="info-box">
        <div class="coverImg">
          <img v-lazy="playListDetail.coverImgUrl" alt="" />
        </div>

        <!-- 说明 -->
        <div class="info">
          <div class="info-main">
            <h1 class="title">{{ playListDetail.name }}</h1>
            <div class="singer-name">
              <icon-user /> <span>{{ playListDetail.creator?.nickname }}</span>
              <span class="createTime"
                >{{ timestampToFormattedDate(playListDetail.createTime) }}创建</span
              >

              <span class="updataTime">
                <icon-clock-circle />
                最近更新：
                {{ timestampToFormattedDate(playListDetail.updateTime) }}
              </span>
            </div>
            <div class="playcount">
              播放量：<span>{{ formatPlayCount(playListDetail.playCount) }}</span>
            </div>
            <div class="tag">
              标签：
              <span v-for="item in playListDetail.tags" :key="item">#{{ item }}</span>
            </div>
            <div class="intro">
              <p>简介：{{ playListDetail.description }}</p>
            </div>
          </div>
          <div class="btns">
            <a-button class="active" type="primary" shape="round"
              ><icon-play-arrow-fill /> 播放全部</a-button
            >
            <a-button type="primary" shape="round"><icon-heart /> 收藏</a-button>
            <a-button type="primary" shape="round"><icon-launch /> 分享</a-button>
          </div>
        </div>
      </div>

      <!-- 歌曲列表 -->
      <div class="songlist-group">
        <div class="title">全部歌曲</div>
        <!-- 列表 -->
        <SongList :songlist="songList" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.playlist-detail {
  .inside-container {
    margin: 0 auto;
    width: 1200px;

    // 详情
    .info-box {
      margin-top: 30px;
      display: flex;
      justify-content: space-between;
      height: 260px;

      // 图片
      .coverImg {
        margin-right: 70px;
        width: 260px;
        height: 260px;
      }

      // 说明
      .info {
        width: 865px;
        color: $secondary-color-2;
        font-size: 14px;

        // 主体部分
        .info-main {
          .title {
            margin: 0;
            color: $primary-color;
            font-size: 28px;
            font-weight: 600;
          }

          .singer-name {
            margin: 20px 0;

            .createTime {
              margin-left: 20px;
            }

            .updataTime {
              margin-left: 20px;
            }
          }

          div:nth-child(n + 3) {
            margin-top: 5px;
          }

          .tag span {
            margin-right: 10px;
          }

          .intro {
            height: 40px;
            p {
              height: inherit;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }

        // 按钮
        .btns {
          margin-top: 15px;
          &:deep(.arco-btn) {
            margin-right: 20px;
            padding: 12px 30px;
            height: 40px;
            border-radius: 20px;
            background-color: $primary-color;
            color: $secondary-color-2;
            cursor: pointer;
            svg {
              margin-right: 5px;
              font-size: 20px;
            }
            &.active {
              background-color: $hover-color;
              color: $primary-color;
            }
          }
        }
      }
    }

    // 歌曲列表
    .songlist-group {
      margin-top: 40px;

      .title {
        margin-bottom: 30px;
        font-size: 28px;
        color: $primary-color;
      }
    }
  }
}
</style>
