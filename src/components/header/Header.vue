<script setup name="Header">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const router = useRouter()
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
}
// const nevList = ref([
//   {
//     title: '推荐',
//     path: '/'
//   },
//   {
//     title: '歌单',
//     path: '/'
//   },
//   {
//     title: '',
//     path: '/'
//   },
//   {
//     title: '推荐',
//     path: '/'
//   }
// ])
</script>

<template>
  <div class="page-header">
    <div class="container">
      <div class="header-title">
        <h1 @click="router.push('/')">
          <img class="logo" src="../../../src/assets/images/logo.png" alt="" />
          RenMusic
        </h1>
      </div>

      <div class="header-content">
        <ul class="header-nav">
          <li>
            <router-link class="link" to="/" active-class="active">发现</router-link>
          </li>
          <li>
            <router-link class="link" to="/palylist" active-class="active"
              >歌单</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/toplist" active-class="active"
              >排行榜</router-link
            >
          </li>
          <li>
            <router-link class="link" to="/artist" active-class="active"
              >歌手</router-link
            >
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
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </a-avatar>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$primary-color: #f8f8f8;
$secondary-color: #909399;
$hover-color: #c71721;

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
        cursor: pointer;
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
            cursor: pointer;
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
        .arco-input-search {
          height: inherit;
          background: #000;
          border-radius: 4px;
          font-size: 14px;
          border: none;
          outline: none;

          // 输入框文本颜色
          &:deep(.arco-input) {
            color: $primary-color;
          }
          // 输入框提示文本颜色
          &:deep(.arco-input::placeholder) {
            color: $secondary-color;
          }
          // 搜索图标
          &:deep(.arco-input-suffix) {
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
