<script setup name="PlaylistDetail">
import { formatPlayCount, formatDuration } from '@/utils/usertools'
import { reqPlaylistDetailData, reqPlaylistSongData } from '@/api/playlist'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const id = route.params.id // 获取歌单id
const playListDetail = ref({})
const songList = ref([])
const limit = ref(999)
const offset = ref(1)

// 获取歌单详情
const getPlaylistDetailData = async () => {
  // 请求数据
  const { data } = await reqPlaylistDetailData(id, limit, offset)

  // 保存歌单详情
  playListDetail.value = data.playlist
}

// 获取歌单歌曲
const getPlaylistSongData = async () => {
  // 发送请求
  const { data } = await reqPlaylistSongData(id, limit.value, offset.value)

  // 保存数据
  songList.value = data.songs
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
          <img :src="playListDetail.coverImgUrl" alt="无法加载" />
        </div>
        <!-- 说明 -->
        <div class="info">
          <div class="info-main">
            <h1 class="title">{{ playListDetail.name }}</h1>
            <div class="singer-name">
              <icon-user /> <span>{{ playListDetail.creator?.nickname }}</span>
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
        <div class="song-ls">
          <!-- 表头 -->
          <li class="list-title">
            <div class="num">序号</div>
            <div class="song ellipsis">歌曲</div>
            <div class="artist">歌手</div>
            <div class="album">专辑</div>
            <div class="time">时长</div>
          </li>
          <!-- 列表 -->
          <li class="ls" v-for="(item, index) in songList" :key="item.id">
            <div class="num">{{ index + 1 }}</div>
            <div class="song ellipsis">
              <span>{{ item.name }}</span>
              <i class="vip">VIP</i>
            </div>
            <div class="artist ellipsis">
              <span class="artist-item" v-for="(i, index) in item.ar" :key="i.id">
                <i v-if="index > 0"> / </i>
                <span>{{ i.name }}</span>
              </span>
            </div>
            <div class="album ellipsis">{{ item.al.name }}</div>
            <div class="time">{{ formatDuration(item.dt) }}</div>
          </li>
        </div>
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

      .song-ls {
        // 基本样式
        li {
          display: flex;
          height: 50px;
          background: #000;

          div {
            height: 50px;
            line-height: 50px;
            margin-left: 15px;
            color: $secondary-color;
          }

          .num {
            width: 50px;
          }

          // 歌曲
          .song {
            padding-right: 25px;
            width: 318px;
            color: $primary-color;

            span:hover {
              cursor: pointer;
              color: $hover-color;
            }

            .vip {
              margin-left: 5px;
              padding: 1px 3px 0px;
              font-size: 12px;
              line-height: 13px;
              background: transparent;
              border: 1px solid #b99b73;
              border-radius: 2px;
              color: #b99b73;
            }
          }

          // 歌手
          .artist {
            padding-right: 25px;
            width: 250px;
            color: $primary-color;

            .artist-item {
              span:hover {
                cursor: pointer;
                color: $hover-color;
              }
            }
          }

          // 专辑
          .album {
            width: 370px;
          }

          // 时长
          .time {
            width: 60px;
          }
        }

        // 奇数
        .ls:nth-child(2n + 1) {
          background: #000;
        }

        // 偶数
        .ls:nth-child(2n) {
          background: transparent;
        }

        // 悬停颜色
        .ls:hover {
          background: #000;
        }
      }
    }
  }
}
</style>
