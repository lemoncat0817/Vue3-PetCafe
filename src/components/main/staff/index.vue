<template>
  <div class="staffBox">
    <div class="title">
      <h1>毛孩子天地</h1>
      <p>這些可愛的寵物們每天都在這裡迎接著訪客，帶來無盡的歡樂和愛意。 </p>
      <p>無論你是想與他們一起玩耍、享受陽光，還是只是想給他們一個溫暖的擁抱，</p>
      <p>這裡都是你和寵物共度美好時光的最佳場所！</p>
    </div>
    <div class="content">
      <div class="pets" v-for="item in pets" :key="item.name">
        <img :src="item.img" :alt="item.variety">
        <h1>{{ item.name }}</h1>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const pets = ref([
  {
    name: '巧克力（Chocolate）',
    img: 'src/assets/staff/staff1.png',
    variety: 'Dog',
    content: '「汪汪，我是巧克力！喜歡跑跑跳跳和追著球球玩。對於每一天的冒險，我都充滿了無限的熱情和好奇心！」'
  },
  {
    name: '奶油（Cream）',
    img: 'src/assets/staff/staff2.png',
    variety: 'Cat',
    content: '「喵喵，我是奶油！喜歡睡覺和曬太陽。我的心是柔軟的，我的愛是甜美的，讓我們一起度過悠閒愉快的時光吧！」'
  },
  {
    name: '布丁（Pudding）',
    img: 'src/assets/staff/staff3.png',
    variety: 'Dog',
    content: '「汪，我是布丁！喜歡在客人身邊陪伴和享受溫暖的擁抱。每一個笑容背後都有我熱情的心，我是你最忠實的朋友！」'
  },
  {
    name: '棉花糖（Marshmallow）',
    img: 'src/assets/staff/staff4.png',
    variety: 'Cat',
    content: '「喵嗚，我是棉花糖！喜歡追逐著光點和撒嬌。我的心是蓬蓬的，我的愛是甜蜜的，讓我們一起創造美好的回憶吧！」'
  }
])
</script>

<style lang="scss" scoped>
.staffBox {
  width: 100%;
  height: 972px;
  background: no-repeat url('@/assets/staff/Staff-Bg.png');
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
    width: 40%;
    height: 100%;
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


    .pets {
      width: 25%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 80%;
        height: 300px;
        border-radius: 50%;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
          transform: rotateY(360deg);
          transition: all 1.2s;
        }
      }

      h1 {
        height: 50px;
        font-size: 1.5em;
        font-weight: 700;
        color: #5a4034;
        font-family: DFKai-SB;
      }

      p {
        height: 100px;
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