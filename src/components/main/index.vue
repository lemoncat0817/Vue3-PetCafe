<template>
  <div class="mainBox">
    <Welcome id="welcome" />
    <About id="about" />
    <Menu id="menu" />
    <Staff id="staff" />
    <Shop id="shop" />
    <Picture id="picture" />
    <el-backtop :right="20" :bottom="100" />
  </div>
</template>

<script setup>
import Welcome from './welcome/index.vue'
import About from './about/index.vue'
import Menu from './menu/index.vue'
import Staff from './staff/index.vue'
import Shop from './shop/index.vue'
import Picture from './picture/index.vue'
import { onMounted } from 'vue'
import { useScrollIntoViewStore } from '@/store/scrollIntoView'
const scrollIntoViewStore = useScrollIntoViewStore()

onMounted(() => {
  scrollIntoViewStore.welcome = document.getElementById('welcome')
  scrollIntoViewStore.about = document.getElementById('about')
  scrollIntoViewStore.menu = document.getElementById('menu')
  scrollIntoViewStore.staff = document.getElementById('staff')
  scrollIntoViewStore.shop = document.getElementById('shop')
  scrollIntoViewStore.picture = document.getElementById('picture')
})

</script>

<style lang="scss" scoped></style>