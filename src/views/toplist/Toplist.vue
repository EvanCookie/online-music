<script setup name="TopList">
import { ref, onMounted } from 'vue'
import { reqTopList } from '@/api/toplist'
import PlaylistItem from '@/components/playlist-item/PlaylistItem.vue'

// 榜单数据
const toplist = ref([])
// 获取榜单数据
const getTopListData = async () => {
  const { data } = await reqTopList()
  toplist.value = data.list
}

onMounted(() => {
  getTopListData()
})
</script>

<template>
  <div class="toplist">
    <div class="inside-container">
      <PlaylistItem v-for="item in toplist" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.toplist {
  .inside-container {
    margin: 30px auto;
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    justify-content: space-between;
  }
}
</style>
