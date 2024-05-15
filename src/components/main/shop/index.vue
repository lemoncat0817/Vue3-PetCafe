<template>
  <div class="shopBox">
    <div class="title" :class="{ 'titleShow': isShowTitle }">
      <h1>寵物零食</h1>
      <p>我們也提供美味健康的寵物點心。</p>
      <p>採用天然成分，品質優良，讓您放心為您的寵物選擇最好的。</p>
    </div>
    <div class="content">
      <div class="commodity" v-for="item in commodity" :key="item.title" :class="{ 'contentShow': isShowContent }">
        <img :src="item.img" alt="petsSnack" />
        <h1>{{ item.title }}</h1>
        <h2>
          <span>NT$</span>
          <span style=" text-decoration:line-through;">{{ item.price }}</span>
          <span style="color: red; ;">{{ item.salePrice }}</span>
        </h2>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue'
// 控制是否顯示菜單
const isShowTitle = ref(false)
const isShowContent = ref(false)
// 組件成功渲染後
nextTick(() => {
  // 監聽滾動位置變化
  watch(() => scrollPosition.value, () => {
    if (scrollPosition.value >= 3000) {
      isShowTitle.value = true
    }
    if (scrollPosition.value >= 3440) {
      isShowContent.value = true
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
// 商品資料
const commodity = ref([
  {
    price: 180,
    salePrice: 160,
    img: 'src/assets/shop/petsSnack1.png',
    title: '香蕉南瓜酥',
    content: '這款美味零食以新鮮的香蕉和營養豐富的南瓜為原料，採用天然成分，不含添加糖和人工色素，是您寵物的健康之選。'
  },
  {
    price: 160,
    salePrice: 135,
    img: 'src/assets/shop/petsSnack2.png',
    title: '花生香蕉餅',
    content: '一款採用天然成分製作的寵物零食，完美結合了花生和香蕉的營養價值，為您的寵物帶來美味的口感和豐富的營養。'
  },
  {
    price: 220,
    salePrice: 200,
    img: 'src/assets/shop/petsSnack3.png',
    title: '蜂蜜香蕉餅',
    content: '這款寵物零食是由天然成分製成，結合了新鮮的香蕉和甜美的蜂蜜，為您的寵物帶來溫暖的甜蜜滋味。'
  },
])
</script>

<style lang="scss" scoped>
.shopBox {
  width: 100%;
  height: 972px;
  background: no-repeat url('@/assets/shop/Shop-Bg.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;

  .title {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    height: 100%;
    margin-top: 20px;
    opacity: 0;
    transition: all 1s ease-in-out;

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

  .titleShow {
    opacity: 1;
  }

  .content {
    flex: 3.5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    .commodity {
      width: 25%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: white;
      border-radius: 20px;
      transform: translateX(-100px);
      transition: all 1.2s ease-in-out;
      opacity: 0;

      img {
        width: 80%;
        height: 300px;
        border-radius: 20px;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
          transition: all 0.5s;
        }
      }

      h1 {
        font-size: 1.5em;
        font-weight: 700;
        color: #5a4034;
        font-family: DFKai-SB;
      }

      h2 {
        font-size: 1em;
        font-weight: 700;
        color: #5a4034;
        margin: 10px 0px;
        font-family: DFKai-SB;

      }

      p {
        width: 80%;
        height: 100px;
        font-size: 0.8em;
        font-weight: 400;
        color: #654735;
        line-height: 26px;
        text-align: center;
      }
    }

    .contentShow {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

// 響應式網站
//  992px以下
@media (max-width: 992px) {
  .shopBox {
    font-size: 18px;

    .content {
      .commodity {
        width: 30%;
      }
    }
  }
}

//  768px以下
@media (max-width: 768px) {
  .shopBox {
    font-size: 18px;
    height: 100%;

    .title {
      width: 80%;
    }

    .content {
      flex-direction: column;

      .commodity {
        width: 80%;
        height: 31em;
        margin: 20px 0;
      }
    }
  }
}
</style>