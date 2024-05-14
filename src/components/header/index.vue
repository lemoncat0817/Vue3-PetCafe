<template>
  <div>
    <div class="headerBox">
      <div class="logo">
        <img src="@/assets/header/logo.png" alt="Logo">
        <h1>LOHAS Pets Café</h1>
      </div>
      <div class="menu">
        <el-anchor class="anchor" :offset="70" direction="horizontal" style="width: 565px; border-radius: 20px;">
          <el-anchor-link style="margin-left: 10px; " :href="welcome">
            <span style="font-size: 18px; font-weight: bold; color: #ADD8E6; ">{{ welcomePage }}</span>
          </el-anchor-link>
          <el-anchor-link :href="about">
            <span style="font-size: 18px; font-weight: bold; color: #ADD8E6;">{{ aboutPage }}</span>
          </el-anchor-link>
          <el-anchor-link :href="menu">
            <span style="font-size: 18px; font-weight: bold; color: #ADD8E6;">{{ menuPage }}</span>
          </el-anchor-link>
          <el-anchor-link :href="staff">
            <span style="font-size: 18px; font-weight: bold; color: #ADD8E6;">{{ staffPage }}</span>
          </el-anchor-link>
          <el-anchor-link :href="shop">
            <span style="font-size: 18px; font-weight: bold; color: #ADD8E6;">{{ shopPage }}</span>
          </el-anchor-link>
          <el-anchor-link :href="picture">
            <span style="font-size: 18px; font-weight: bold; color: #ADD8E6;">{{ picturePage }}</span>
          </el-anchor-link>
        </el-anchor>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScrollIntoViewStore } from '@/store/scrollIntoView'
const scrollIntoViewStore = useScrollIntoViewStore()
import { ref, onMounted, nextTick } from 'vue'

const welcome = ref('')
const welcomePage = ref('主頁')
const about = ref('')
const aboutPage = ref('關於我們')
const menu = ref('')
const menuPage = ref('美味佳餚')
const staff = ref('')
const staffPage = ref('毛孩子天地')
const shop = ref('')
const shopPage = ref('寵物零食')
const picture = ref('')
const picturePage = ref('評論&用餐環境')


nextTick(() => {
  if (scrollIntoViewStore.welcome) {
    welcome.value = `#${scrollIntoViewStore.welcome.id}`
  }
  if (scrollIntoViewStore.about) {
    about.value = `#${scrollIntoViewStore.about.id}`
  }
  if (scrollIntoViewStore.menu) {
    menu.value = `#${scrollIntoViewStore.menu.id}`
  }
  if (scrollIntoViewStore.staff) {
    staff.value = `#${scrollIntoViewStore.staff.id}`
  }
  if (scrollIntoViewStore.shop) {
    shop.value = `#${scrollIntoViewStore.shop.id}`
  }
  if (scrollIntoViewStore.picture) {
    picture.value = `#${scrollIntoViewStore.picture.id}`
  }
})
</script>

<style lang="scss" scoped>
.headerBox {
  width: 100%;
  height: 120px;
  background: #ADD8E6;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
  opacity: .8;
  z-index: 1;
  position: fixed;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    width: 30%;
    margin-left: 20px;

    img {
      width: 80px;
      height: 80px;
    }

    h1 {
      margin-left: 10px;
      font-size: 2em;
      font-weight: bold;
      color: #5a4034;
    }
  }

  .menu {
    width: 70%;

    .anchor {
      float: right;
      margin-right: 20px;
    }
  }
}
</style>