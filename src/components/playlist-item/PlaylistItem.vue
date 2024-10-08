<script setup name="PlaylistItem">
defineProps(['item'])
import { useRouter } from 'vue-router'
const router = useRouter()
import { Message } from '@arco-design/web-vue'

// 跳转歌单详情页面
const toPlayListDetail = (id) => {
  router.push({
    name: 'playlist-detail',
    params: { id }
  })
}

// 跳转播放页面
const toPlayAudio = (id) => {
  Message.success('跳转播放页面' + id)
}
</script>

<template>
  <div class="playlist-item">
    <div class="poster-img" @click="toPlayListDetail(item.id)">
      <img v-lazy="item.picUrl || item.coverImgUrl" alt="" />
      <div class="play-bar" @click.stop="toPlayAudio(item.id)">
        <img src="../../assets/images/play-bar.png" alt="图片无法加载" />
      </div>
    </div>
    <div class="name ellipsis" @click="toPlayListDetail(item.id)">{{ item.name }}</div>
  </div>
</template>

<style scoped lang="scss">
.playlist-item {
  margin-bottom: 25px;
  width: 224px;
  cursor: pointer;

  .poster-img {
    position: relative;
    width: 224px;
    height: 224px;
    overflow: hidden;
    img {
      transition: transform linear 0.3s;
    }

    &:hover img {
      transform: scale(1.1);
    }

    .play-bar {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      display: none;
      transition:
        opacity 0.3s,
        display 0.3s;
    }

    &:hover .play-bar {
      display: block;
    }
  }

  .name {
    margin-top: 18px;
    font-size: 16px;
    height: 26px;
    line-height: 26px;
    color: $primary-color;

    &:hover {
      color: $hover-color;
    }
  }
}
</style>
