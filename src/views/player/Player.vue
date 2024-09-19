<script setup name="Player"></script>

<template>
  <div class="player">
    <div class="play-bar">底部区域</div>
  </div>
</template>

<style scoped lang="scss">
.player {
  .play-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: $bgc-color-1;
  }
}
</style>
