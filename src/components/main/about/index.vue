<template>
  <div class="aboutBox">
    <div class="aboutLeft" :class="{ 'storyImgShow': isShowStory }">
      <img src="@/assets/about/About-Img.png" alt="about" />
    </div>
    <div class="aboutRight">
      <div class="story" :class="{ 'storyShow': isShowStory }">
        <h1>關於我們</h1>
        <p> 在一個晴朗的下午，<br>幾個寵物愛好者聚在一起喝咖啡，<br>分享著彼此的愛護毛孩子的故事。</p>
        <p>他們意識到，<br>在城市中找到一個寵物友好的地方並不容易，<br>而大多數咖啡廳都不允許寵物進入。</p>
        <p>這個想法在他們之間迅速發酵，<br>於是他們決定創立一個獨特的咖啡廳，<br>一個可以讓人們和他們的毛孩子一起放鬆的地方。</p>
        <p>於是，<span style="color: #5a4034; font-weight: bold;">LOHAS Pets Café</span>誕生了。</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue'
// 控制是否顯示故事
const isShowStory = ref(false)
// 組件成功渲染後
nextTick(() => {
  // 監聽滾動位置變化
  watch(() => scrollPosition.value, () => {
    if (window.innerWidth > 1024) {
      if (scrollPosition.value >= 360) {
        isShowStory.value = true
      }
    } else if (window.innerWidth > 576) {
      if (scrollPosition.value >= 200) {
        isShowStory.value = true
      }
    } else {
      if (scrollPosition.value >= 120) {
        isShowStory.value = true
      }
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
.aboutBox {
  width: 100%;
  height: 864px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbdef3;

  .aboutLeft {
    width: 55%;
    height: 100%;
    transform: translateX(-100px);
    transition: all 1.2s ease-in-out;
    opacity: 0;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .storyImgShow {
    transform: translateX(0);
    opacity: 1;
  }

  .aboutRight {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'monospace', DFKai-SB;

    .story {
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

    .storyShow {
      opacity: 1;
    }
  }
}

// 響應式網站
//  1024px以下
@media (max-width: 1024px) {
  .aboutBox {
    height: 648px;

    .aboutRight {
      font-size: 15px;
    }
  }
}

//  768px以下
@media (max-width: 768px) {
  .aboutBox {
    height: 100%;
    flex-direction: column-reverse;

    .aboutLeft {
      width: 100%;
      height: 50%;
    }

    .aboutRight {
      font-size: 20px;
      width: 100%;
      margin: 20px 0px;
    }
  }
}

//  576px以下
@media (max-width: 576px) {
  .aboutBox {
    .aboutRight {
      font-size: 18px;
    }
  }
}

//  420px以下
@media (max-width: 420px) {
  .aboutBox {
    .aboutRight {
      font-size: 17px;
    }
  }
}

//  375px以下
@media (max-width: 375px) {
  .aboutBox {
    .aboutRight {
      font-size: 14px;
    }
  }
}
</style>