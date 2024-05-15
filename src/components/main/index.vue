<template>
  <div class="mainBox">
    <Welcome id="welcome" />
    <About id="about" />
    <Menu id="menu" />
    <Staff id="staff" />
    <Shop id="shop" />
    <Picture id="picture" />
    <el-backtop class="backtop" :right="15" :bottom="100" />
  </div>
</template>

<script setup>
import Welcome from './welcome/index.vue'
import About from './about/index.vue'
import Menu from './menu/index.vue'
import Staff from './staff/index.vue'
import Shop from './shop/index.vue'
import Picture from './picture/index.vue'
</script>

<style lang="scss" scoped>
.backtop {
  opacity: 0.8;
  animation: rotate 3s infinite;
}

// 響應式設計
// 768px以下
@media (max-width: 768px) {
  .backtop {
    width: 20px;
    height: 20px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotateY(360deg);

  }

  50% {
    transform: rotate(0deg);

  }

  75% {
    transform: rotateX(360deg);

  }

  100% {
    transform: rotate(0deg);
  }
}
</style>