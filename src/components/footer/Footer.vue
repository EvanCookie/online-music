<script setup name="Footer">
import { ref } from 'vue'
// 获取版权时间
const presentTime = ref(new Date().getFullYear())
</script>

<template>
  <div class="page-footer">
    <div class="container">
      <div class="footer-copyright">
        <p>
          Released under the MIT License. Copyright © 2024-{{ presentTime }} Evan Cookie.
        </p>
        <p>如有侵权，请联系本人予以删除！邮箱 2384485535@qq.com</p>
        <p>
          本站本身不储存任何资源文件，资源来自互联网，仅供学习交流试听，请于下载后24小时内删除，支持购买正版专辑！
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-footer {
  margin-top: 30px;
  padding: 20px 0;
  background-color: $bgc-color-2;

  // 版心容器
  .container {
    margin: 0 auto;
    width: 1200px;
    .footer-copyright {
      color: $secondary-color;
      font-size: 14px;
      line-height: 1.5em;
      text-align: center;
    }
  }
}
</style>
