<template>
  <div class="menuBox">
    <div class="menuLeft">
      <div class="menuText" :class="{ 'menuShow': isShowMenu }">
        <h1>美味佳餚</h1>
        <p style="font-size: 24px; font-weight: bold;">本店最熱門的餐點</p>
        <p>
          <span style="font-weight: bold; font-size: 24px;">主食-香烤蔬菜沙拉</span>
          ，選用新鮮的時令蔬菜經過特製調味後香烤而成，搭配新鮮沙拉葉、堅果和特製醬汁，清新可口，是健康飲食的首選。
        </p>
        <p>
          <span style="font-weight: bold; font-size: 24px;">特調飲品-草莓冰沙</span>
          ，選用新鮮成熟的草莓，搭配冰塊和少許糖漿，打造清涼解渴的夏日必備飲品，味道清新酸甜。
        </p>
        <p>
          <span style="font-weight: bold; font-size: 24px;">寵物餐點-寵物草莓冰淇淋</span>
          ，使用新鮮的草莓和特製配方製作而成，口感柔軟，清涼可口，是您的寵物在夏日的最愛零食之一。
        </p>
        <p>這些菜單選項旨在為您和您的寵物提供多樣化、美味和均衡的飲食體驗，我們期待為您提供一個愉悅的用餐體驗。</p>
      </div>
    </div>
    <div class="menuRight" :class="{ 'menuImgShow': isShowMenu }">
      <img src="@/assets/menu/menu.png" alt="menu">
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue'
// 控制是否顯示菜單
const isShowMenu = ref(false)
// 組件成功渲染後
nextTick(() => {
  // 監聽滾動位置變化
  watch(() => scrollPosition.value, () => {
    // 如果高度大於或等於360
    // 則顯示菜單
    if (scrollPosition.value >= 1180) {
      isShowMenu.value = true
    }
  })
})
// 儲存監聽滾動位置的變數
const scrollPosition = ref(0)
// 監聽滾動位置
const handleScroll = () => {
  scrollPosition.value = window.scrollY
}
// 在組件掛載後添加監聽事件
// 以便在組件卸載時移除監聽事件
// 避免造成資源浪費
// 組件掛載
onMounted(() => {
  // 添加監聽事件
  window.addEventListener('scroll', handleScroll)
})
// 組件卸載
onBeforeUnmount(() => {
  // 移除監聽事件
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.menuBox {
  width: 100%;
  height: 864px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbdef3;

  .menuLeft {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    font-family: 'monospace', DFKai-SB;

    .menuText {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: all 2.5s ease-in-out;

      h1 {
        font-size: 2em;
        font-weight: 700;
        color: #5a4034;
        margin-bottom: 10px;
        font-family: DFKai-SB;
      }

      p {
        font-size: 1em;
        font-weight: 400;
        color: #654735;
        line-height: 26px;
        text-align: center;
        margin: 10px 0;
      }
    }

    .menuShow {
      opacity: 1;
    }
  }

  .menuRight {
    width: 55%;
    height: 100%;
    transform: translateX(100px);
    transition: all 1.2s ease-in-out;
    opacity: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .menuImgShow {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>