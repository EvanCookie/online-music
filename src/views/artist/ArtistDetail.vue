<script setup name="ArtistDetail">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <h2>歌手详情{{ route.params.id }}</h2>
</template>

<style scoped lang="scss"></style>
