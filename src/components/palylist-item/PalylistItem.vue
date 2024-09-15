<script setup name="PalylistItem">
defineProps(['item'])
import { Message } from '@arco-design/web-vue'

// 跳转歌单详情页面
const toPlayListDetail = (id) => {
  Message.success('跳转歌单详情' + id)
}

// 跳转播放页面
const toPlayAudio = (id) => {
  Message.success('跳转播放页面' + id)
}
</script>

<template>
  <div class="palylist-item">
    <div class="poster-img" @click="toPlayListDetail(item.id)">
      <img :src="item.picUrl" alt="" />
      <div class="paly-bar" @click.stop="toPlayAudio(item.id)">
        <img src="../../assets/images/play-bar.png" alt="" />
      </div>
    </div>
    <div class="name" @click="toPlayListDetail(item.id)">{{ item.name }}</div>
  </div>
</template>

<style scoped lang="scss">
.palylist-item {
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

    .paly-bar {
      width: 60px;
      height: 60px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 9999;
      display: none;
      transition:
        opacity 0.3s,
        display 0.3s;
    }

    &:hover .paly-bar {
      display: block;
    }
  }

  .name {
    margin-top: 18px;
    font-size: 16px;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: $primary-color;

    &:hover {
      color: $hover-color;
    }
  }
}
</style>
