<script setup name="Header">
import { nevList } from './config/index'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { usePlayerStore } from '@/stores/player'
const router = useRouter()
const playerStore = usePlayerStore()

// 搜索关键字
const keyWords = ref('')

// 跳转搜索页面
const toSearchPage = () => {
  router.push({
    path: '/search',
    query: {
      keywords: keyWords.value
    }
  })
  keyWords.value = ''
}

// 切换play显示/隐藏
const togglePlayBar = () => {
  playerStore.toggleShowBar()
}
</script>

<template>
  <div class="page-header">
    <div class="container">
      <div class="header-title hover-cp">
        <h1 @click="router.push('/')">
          <img class="logo" src="../../../src/assets/images/logo.png" alt="" />
          RenMusic
        </h1>
      </div>

      <div class="header-content">
        <ul class="header-nav">
          <li v-for="nav in nevList" :key="nav.title">
            <router-link class="link hover-cp" :to="nav.path" active-class="active">{{
              nav.title
            }}</router-link>
          </li>
          <li class="player hover-cp" @click="togglePlayBar">
            <a-tooltip content="点击我显示播放控件,再次点击隐藏">
              <span>播放器</span>
            </a-tooltip>
          </li>
        </ul>
      </div>

      <div class="header-right">
        <div class="header-seaech-ipt">
          <a-input-search
            @press-enter="toSearchPage"
            @search="toSearchPage"
            :allow-clear="true"
            v-model="keyWords"
            placeholder="请输入歌名、歌词、歌手或专辑"
          />
        </div>
        <div class="header-user">
          <a-avatar>
            <img
              alt="avatar"
              src="https://pic.imgdb.cn/item/670a79fed29ded1a8cf430f4.jpg"
            />
          </a-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  height: 82px;
  box-shadow: 0 2px 10px 0 rgba(52, 52, 52, 0.3);

  // 版心容器
  .container {
    margin: 0 auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    // 标题
    .header-title {
      h1 {
        color: $primary-color;
        font-weight: 300;
        .logo {
          width: 40px;
        }
      }
    }

    // nav导航
    .header-content {
      height: 82px;
      flex: 1;
      padding: 0 40px;

      .header-nav {
        display: flex;
        li {
          margin: 0 13px;

          .link {
            display: block;
            height: 82px;
            line-height: 82px;
            font-size: 16px;
            color: $secondary-color;

            // 激活样式
            &.active {
              color: $primary-color;
              font-weight: 600;
              border-bottom: 1px solid $primary-color;
            }
            // 悬停样式
            &:hover {
              color: $hover-color;
            }
          }
        }

        // 播放器按钮
        li.player {
          height: 82px;
          line-height: 82px;
          font-size: 16px;
          color: $secondary-color;
        }
      }
    }

    // 头部-右侧
    .header-right {
      height: 82px;
      display: flex;
      align-items: center;

      .header-seaech-ipt {
        margin: 0 30px;
        width: 320px;
        height: 40px;

        // 搜索框
        &:deep(.arco-input-search) {
          height: inherit;
          background: #000;
          border-radius: 4px;
          font-size: 14px;
          border: none;
          outline: none;

          // 输入框文本颜色
          .arco-input {
            color: $primary-color;
          }
          // 输入框提示文本颜色
          .arco-input::placeholder {
            color: $secondary-color;
          }
          // 搜索图标
          .arco-input-suffix {
            font-size: 20px;
            color: $secondary-color;

            // 隐藏搜索图标背景
            .arco-icon-hover::before {
              display: none;
            }

            .arco-icon-hover:hover {
              color: $primary-color;
            }
          }
        }
      }
    }
  }
}
</style>
