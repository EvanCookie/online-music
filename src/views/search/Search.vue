<script setup name="Search">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h2>搜索</h2>
  <h3>{{ route.query.keywords }}</h3>
</template>

<style scoped lang="scss"></style>
