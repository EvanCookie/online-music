<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="layout" class="theme-black">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped lang="scss">
$bgc-color-1: #1f1f1f;

// 黑色背景
.theme-black {
  background-color: $bgc-color-1;
}

// 布局容器
#layout {
  height: 100%;
}
</style>
