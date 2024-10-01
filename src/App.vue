<script setup>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import { useRoute, RouterView } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div id="layout" class="theme-black">
    <Header />
    <div class="page-main">
      <router-view />
    </div>
    <Footer v-if="!(route.path === '/player')" />
  </div>
</template>

<style scoped lang="scss">
// 黑色背景
.theme-black {
  background-color: $bgc-color-1;
}
</style>
