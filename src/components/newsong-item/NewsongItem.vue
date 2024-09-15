<script setup name="NewsongItem">
defineProps(['item'])
import { Message } from '@arco-design/web-vue'

// 跳转歌曲详情
const toSong = (id) => {
  Message.success('跳转歌曲详情' + id)
}
</script>

<template>
  <div class="newsong-item" @click="toSong(item.id)">
    <div class="poster">
      <div class="bg"></div>
      <div class="poster-img">
        <img :src="item.picUrl" alt="" />
      </div>
    </div>
    <div class="info">
      <div class="title ellipsis">{{ item.name }}</div>
      <div class="artist ellipsis">
        <span v-for="i in item.song.artists" :key="i.id">{{ i.name }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.newsong-item {
  margin-bottom: 25px;
  width: 386px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  cursor: pointer;

  // 歌曲海报
  .poster {
    position: relative;
    width: 120px;
    height: 120px;

    .poster-img {
      position: absolute;
      z-index: 2;
      width: 100%;
      height: 100%;
    }

    // 光盘背景
    .bg {
      position: absolute;
      z-index: 1;
      right: -16px;
      top: 5px;
      width: 110px;
      height: 110px;
      background: url(../../assets/images/disk_pic_album.png) 50% no-repeat;
      background-size: 100%;
      transition: all 0.3s ease-in-out;
    }
    &:hover .bg {
      transform: translateX(8px);
    }
  }

  // 歌曲说明
  .info {
    padding: 0 36px;
    width: 263px;

    .title {
      font-size: 16px;
      color: $primary-color;
      &:hover {
        color: $hover-color;
      }
    }

    .artist {
      margin-top: 6px;
      color: $secondary-color;
    }
  }
}
</style>
