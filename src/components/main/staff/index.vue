<template>
  <div class="staffBox">
    <div class="title" :class="{ 'titleShow': isShowTitle }">
      <h1>毛孩子天地</h1>
      <p>這些可愛的寵物們每天都在這裡迎接著訪客，帶來無盡的歡樂和愛意。 </p>
      <p>無論你是想與他們一起玩耍、享受陽光，還是只是想給他們一個溫暖的擁抱，<br>
        這裡都是你和寵物共度美好時光的最佳場所！</p>
    </div>
    <div class="content">
      <div class="pets" v-for="item in pets" :key="item.name" :class="{ 'contentShow': isShowContent }">
        <img :src="item.img" :alt="item.variety">
        <h1>{{ item.name }}</h1>
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
    if (scrollPosition.value >= 2200) {
      isShowTitle.value = true
    }
    if (scrollPosition.value >= 2300) {
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
// 店寵資料
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

    .pets {
      width: 25%;
      height: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transform: rotateY(0deg);
      opacity: 0;
      transition: all 2s ease-in-out;

      img {
        width: 80%;
        height: 300px;
        border-radius: 50%;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
          transform: scale(1.2);
          transition: all 0.8s ease-in-out;
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
        width: 80%;
        height: 120px;
        font-size: 0.8em;
        font-weight: 400;
        color: #654735;
        line-height: 26px;
        text-align: center;
      }
    }

    .contentShow {
      transform: rotateY(360deg);
      opacity: 1;
    }
  }
}

// 響應式網站
// 1280px以下
@media (max-width: 1280px) {
  .staffBox {
    .content {
      .pets {
        h1 {
          font-size: 1.15em;
        }

        img {
          height: 220px;
        }
      }
    }
  }
}

//  1024px以下
@media (max-width: 1024px) {
  .staffBox {
    width: 100%;
    font-size: 18px;

    .content {
      .pets {
        h1 {
          font-size: 0.95em;
        }

        img {
          height: 180px;
        }
      }
    }
  }
}

// 768px以下
@media (max-width: 768px) {
  .staffBox {
    font-size: 18px;
    height: 100%;

    .title {
      width: 80%;
    }

    .content {
      margin-top: 20px;
      flex-direction: column;

      .pets {
        width: 80%;

        h1 {
          font-size: 1.8em;
        }

        p {
          font-size: 1.2em;
        }

        img {
          width: 50%;
          height: 220px;
        }
      }
    }
  }
}

// 576px以下
@media (max-width: 576px) {
  .staffBox {
    .content {
      .pets {
        h1 {
          font-size: 1.6em;
        }

        p {
          font-size: 1em;
        }

        img {
          height: 180px;
        }
      }
    }
  }
}

// 420px以下
@media (max-width: 420px) {
  .staffBox {
    .content {
      .pets {
        h1 {
          font-size: 1.4em;
        }

        p {
          font-size: 0.9em;
        }

        img {
          height: 160px;
        }
      }
    }
  }
}

// 375px以下
@media (max-width: 375px) {
  .staffBox {
    font-size: 16px;

    .content {
      .pets {
        img {
          height: 140px;
        }
      }
    }
  }
}
</style>