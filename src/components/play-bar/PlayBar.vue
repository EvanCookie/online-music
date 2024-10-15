<script setup name="PlayBar">
import { ref } from 'vue'
import { usePlayerStore } from '@/stores/player'
const playerStore = usePlayerStore()

// 音量静音按钮控制
const isVoice = ref(true)
</script>

<template>
  <div class="play-bar" v-show="playerStore.showBar">
    <div class="inside-container">
      <div class="action-left">
        <div class="song-info">
          <div class="song-img">
            <a-avatar trigger-type="mask" shape="square" :size="80">
              <img
                alt="avatar"
                src="https://img01.dmhmusic.com/0209/M00/44/FD/ChR47GWBYK6AUsi0ABk1sjxucBo180.jpg"
              />
              <template #trigger-icon>
                <icon-expand size="30px" />
              </template>
            </a-avatar>
          </div>
          <div class="song-artist">
            <span class="song-name">心&nbsp;-&nbsp;</span>
            <span>赵雷</span>
          </div>
          <div class="btns">
            <div class="btn-item hover-cp"><icon-heart /></div>
            <div class="btn-item hover-cp"><icon-download /></div>
            <div class="btn-item hover-cp"><icon-launch /></div>
          </div>
        </div>
      </div>
      <div class="play-info">
        <div class="play-btns">
          <div class="prev hover-cp" @click="playerStore.previousSong">
            <icon-skip-previous-fill />
          </div>
          <div class="play-pause-box hover-cp" @click="playerStore.playPause">
            <div class="play" v-show="!playerStore.isPlaying">
              <icon-play-arrow-fill />
            </div>
            <div class="pause" v-show="playerStore.isPlaying">
              <icon-pause />
            </div>
          </div>
          <div class="next hover-cp" @click="playerStore.nextSong">
            <icon-skip-next-fill />
          </div>
        </div>
        <div class="play-slider">
          <span>{{ playerStore.currentTime }}</span>
          <a-slider :default-value="0" :show-tooltip="false" />
          <span>{{ playerStore.duration }}</span>
        </div>
      </div>
      <div class="action-right">
        <div class="player-type hover-cp" title="顺序播放">
          <svg
            t="1728478980250"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5518"
            id="mx_n_1728478980250"
            width="28"
            height="28"
          >
            <path
              d="M286.95 286.95h450.1v134.61l178.78-178.78L737.05 64v134.61H198.61v269.22h88.34V286.95z m450.1 450.1h-450.1V602.44L108.17 781.22 286.95 960V825.39h538.44V556.17h-88.34v180.88z"
              p-id="5519"
              fill="#606266"
            ></path>
          </svg>
        </div>
        <div class="comment-box hover-cp" title="评论">
          <icon-message />
        </div>
        <div class="voice-box">
          <div class="voice-icon hover-cp">
            <div class="sound-icon" v-show="isVoice"><icon-sound /></div>
            <div class="mute-icon" v-show="!isVoice"><icon-mute /></div>
          </div>
          <a-slider :default-value="50" />
        </div>
        <div class="player-list-btn hover-cp">
          <icon-menu-unfold />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$base-btn-font-size: 25px;

.play-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 125px;
  background-color: $bgc-color-1;
  color: $secondary-color-2;
  box-shadow: 0 -2px 10px 0 rgba(52, 52, 52, 0.3);

  // 内部容器
  .inside-container {
    margin: 0 auto;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.play-bar {
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
        font-size: $base-btn-font-size;
        .btn-item {
          margin-right: 25px;
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
    display: flex;
    justify-content: end;
    align-items: center;

    // 播放类型
    .player-type {
      margin-right: 20px;
      display: flex;
    }
    // 评论
    .comment-box {
      margin-right: 20px;
      font-size: $base-btn-font-size;
    }

    // 音量模块
    .voice-box {
      display: flex;

      // 音量按钮
      .voice-icon {
        margin-right: 15px;
        font-size: $base-btn-font-size;
      }

      // 音量条
      :deep(.arco-slider) {
        width: 90px;

        // 滑块
        .arco-slider-track {
          &::before {
            background-color: $primary-color;
          }

          // 已过进度颜色
          .arco-slider-bar {
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

    // 播放列表按钮
    .player-list-btn {
      margin-left: 30px;
      font-size: $base-btn-font-size;
    }
  }
}
</style>
