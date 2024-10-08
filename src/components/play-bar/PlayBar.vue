<script setup name="PlayBar">
import { ref } from 'vue'

// 开始暂停按钮控制
const playPause = ref(false)
</script>

<template>
  <div class="play-bar">
    <div class="action-left">
      <div class="song-info">
        <div class="song-img">
          <img
            src="https://img01.dmhmusic.com/0209/M00/44/FD/ChR47GWBYK6AUsi0ABk1sjxucBo180.jpg"
            alt=""
          />
        </div>
        <div class="song-artist">
          <span class="song-name">心&nbsp;-&nbsp;</span>
          <span>赵雷</span>
        </div>
        <div class="btns">
          <div class="btn-item"><icon-heart /></div>
          <div class="btn-item"><icon-download /></div>
          <div class="btn-item"><icon-launch /></div>
        </div>
      </div>
    </div>
    <div class="play-info">
      <div class="play-btns">
        <div class="prev"><icon-skip-previous-fill /></div>
        <div class="play-pause-box">
          <div class="play" v-show="playPause"><icon-play-arrow-fill /></div>
          <div class="pause" v-show="!playPause"><icon-pause /></div>
        </div>
        <div class="next"><icon-skip-next-fill /></div>
      </div>
      <div class="play-slider">
        <span>00:00</span>
        <a-slider :default-value="0" :show-tooltip="false" />
        <span>05:30</span>
      </div>
    </div>
    <div class="action-right">4325235</div>
  </div>
</template>

<style scoped lang="scss">
.play-bar {
  padding: 0 25px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 125px;
  background-color: $bgc-color-1;
  color: $secondary-color-2;
  box-shadow: 0 -2px 10px 0 rgba(52, 52, 52, 0.3);

  // 左侧
  .action-left {
    width: 400px;
    // 音乐说明
    .song-info {
      display: flex;
      align-items: center;
      // 图片
      .song-img {
        margin-right: 20px;
        width: 80px;
        height: 80px;
      }
      // 艺术家
      .song-artist {
        margin-right: 20px;

        .song-name {
          color: $primary-color;
        }
      }
      // 分享按钮
      .btns {
        display: flex;
        font-size: 22px;
        .btn-item {
          margin-right: 25px;
          cursor: pointer;
        }
      }
    }
  }

  // 播放按钮
  .play-info {
    width: 580px;
    // 控制按钮
    .play-btns {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aaaaaa;
      font-size: 30px;
      // 悬停公共样式
      div {
        cursor: pointer;
      }
      // 播放暂停按钮
      .play-pause-box {
        margin: 0 40px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #ffffff;
        background-color: #e61723;
      }

      // 切换按钮样式
      .prev:hover,
      .next:hover {
        color: #ffffff;
      }
    }

    // 时间进度条
    .play-slider {
      margin-top: 15px;
      display: flex;
      justify-content: center;
      span {
        margin: 0 10px;
      }
      // 进度条
      :deep(.arco-slider) {
        width: 100%;

        // 滑块
        .arco-slider-track {
          &::before {
            height: 4px;
            background-color: $slider-bgc;
          }

          // 已过进度颜色
          .arco-slider-bar {
            height: 4px;
            background-color: #f00;
          }

          // 小圆点
          .arco-slider-btn::after {
            border-color: $hover-color;
            background-color: $hover-color;
          }
        }
      }
    }
  }

  // 右侧
  .action-right {
    width: 400px;
    background-color: skyblue;
  }
}
</style>
