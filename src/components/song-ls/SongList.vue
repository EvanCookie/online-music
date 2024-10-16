<script setup name="SongList">
const props = defineProps({
  songlist: {
    type: Object,
    required: true
  }
})
import { formatDuration } from '@/utils/usertools'
import { useRouter } from 'vue-router'
const router = useRouter()
import { usePlayerStore } from '@/stores/player'
const playerStore = usePlayerStore()

// 跳转播放页面
const toPlayAudio = (id) => {
  console.log(id)
  playerStore.fetchAndPlaySong(id)
}

// 跳转歌手详情
const toArtistDetail = (id) => {
  router.push({
    name: 'artist-detail',
    params: { id }
  })
}
</script>

<template>
  <div class="song-ls">
    <!-- 表头 -->
    <li class="list-title">
      <div class="num">序号</div>
      <div class="song ellipsis">歌曲</div>
      <div class="artist ellipsis">歌手</div>
      <div class="album ellipsis">专辑</div>
      <div class="time">时长</div>
    </li>
    <!-- 列表项 -->
    <li class="song-item" v-for="(item, index) in props.songlist" :key="item.id">
      <div class="num">{{ index + 1 }}</div>

      <div class="song ellipsis">
        <i class="vip" v-if="item.fee == 1">VIP</i>
        <span>{{ item.name }}</span>
      </div>

      <div class="artist ellipsis">
        <span class="artist-item" v-for="(i, index) in item.ar" :key="i.id">
          <i v-if="index > 0"> / </i>
          <span @click="toArtistDetail(i.id)">{{ i.name }}</span>
        </span>
      </div>

      <div class="album ellipsis">
        <span>{{ item.al.name }}</span>
      </div>

      <div class="time">{{ formatDuration(item.dt) }}</div>

      <div class="tools">
        <span @click="toPlayAudio(item.id)"> <icon-play-circle /></span>
        <span> <icon-heart /></span>
        <span><icon-share-internal /></span>
        <span> <icon-launch /></span>
      </div>
    </li>
  </div>
</template>

<style scoped lang="scss">
.song-ls {
  // 基本样式
  li {
    display: flex;
    height: 50px;
    background: #000;
    color: $secondary-color;
    div {
      height: 50px;
      line-height: 50px;
      margin-left: 15px;
    }

    // 序号
    .num {
      width: 50px;
    }

    // 歌曲
    .song {
      position: relative;
      padding-right: 40px;
      width: 318px;
      span {
        color: $primary-color;
      }
      span:hover {
        cursor: pointer;
        color: $hover-color;
      }
      .vip {
        position: absolute;
        top: 50%;
        right: 5px;
        transform: translateY(-50%);
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
      span {
        color: $primary-color;
      }
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

      span:hover {
        cursor: pointer;
        color: $hover-color;
      }
    }

    // 时长
    .time {
      width: 60px;
    }
  }

  // 奇数项
  .song-item:nth-child(2n + 1) {
    background: #000;
  }

  // 偶数项
  .song-item:nth-child(2n) {
    background: transparent;
  }

  // 悬停颜色项
  .song-item:hover {
    background: #000;

    // 显示隐藏按钮
    .tools {
      display: block;
    }
  }

  // 隐藏工具
  li.song-item {
    position: relative;

    .tools {
      display: none;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 75px;
      width: 200px;
      height: 50px;
      background: #000;

      svg {
        margin-left: 25px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>
