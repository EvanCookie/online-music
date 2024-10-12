<script setup name="ArtistItem">
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  artistItem: {
    type: Object,
    required: true
  }
})

// 跳转歌手详情
const toArtistDetail = (id) => {
  router.push({
    name: 'artist-detail',
    params: { id }
  })
}
</script>

<template>
  <div class="artistlist-item" @click="toArtistDetail(props.artistItem.id)">
    <div class="avatar-image">
      <img v-lazy="props.artistItem.img1v1Url" />
    </div>
    <div class="info">
      <div class="name ellipsis">{{ props.artistItem.name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.artistlist-item {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  .avatar-image {
    width: 175px;
    height: 175px;
    border-radius: 50%;
    overflow: hidden;
    img {
      transition: all 0.3s ease-in-out;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  .info {
    margin-top: 18px;
    width: 175px;
    text-align: center;
    font-size: 16px;
    color: $primary-color;

    &:hover {
      color: $hover-color;
    }
  }
}
</style>
