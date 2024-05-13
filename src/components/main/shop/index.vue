<template>
  <div class="shopBox">
    <div class="title">
      <h1>寵物零食</h1>
      <p>我們也提供美味健康的寵物點心。</p>
      <p>採用天然成分，品質優良，讓您放心為您的寵物選擇最好的。</p>
    </div>
    <div class="content">
      <div class="commodity" v-for="item in commodity" :key="item.title">
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
import { ref } from 'vue'

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
    content: '這款寵物零食是由天然成分製成，結合了新鮮的香蕉和甜美的蜂蜜，為您的寵物帶來溫暖的甜蜜滋味。'
  },
  {
    price: 220,
    salePrice: 200,
    img: 'src/assets/shop/petsSnack3.png',
    title: '蜂蜜香蕉餅',
    content: '這款美味零食以新鮮的香蕉和營養豐富的南瓜為原料，採用天然成分，不含添加糖和人工色素，是您寵物的健康之選。'
  },
])
</script>

<style lang="scss" scoped>
.shopBox {
  width: 100%;
  height: 100vh;
  background: #FFE5CA;
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
    margin-top: 20px;

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

      img {
        width: 80%;
        height: 60%;
        border-radius: 20px;
        margin-bottom: 20px;
      }

      h1 {
        font-size: 1.5em;
        font-weight: 700;
        color: #5a4034;
        margin-bottom: 10px;
        font-family: DFKai-SB;
      }

      h2 {
        font-size: 1em;
        font-weight: 700;
        color: #5a4034;
        margin-bottom: 10px;
        font-family: DFKai-SB;
      }

      p {
        font-size: 0.8em;
        font-weight: 400;
        color: #654735;
        line-height: 26px;
        text-align: center;
        margin: 10px 30px;
      }
    }
  }

}
</style>