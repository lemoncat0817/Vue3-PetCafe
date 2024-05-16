<template>
  <div class="footerBox" :class="{ 'footerShow': isShowFooter }">
    <div class="footTop">
      <div class="content">
        <p>本餐廳目前無提供電話訂位服務</p>
        <p>如有用餐需求請至現場排隊等候入場</p>
        <p><span style="margin-right: 5px; font-weight: bold;">餐廳地址:</span>貓貓市 肥貓區 貓爪路三段 貓尾巷5號</p>
      </div>
      <div class="link">
        <p>可以追蹤我們的<span style="font-weight: bold;">FaceBook</span>
          <img src="@/assets/footer/facebook.png" alt="facebook">以及<span style=" font-weight: bold;">Instagram</span>
          <img src="@/assets/footer/instagram.png" alt="instagram"> 來獲得最新資訊
        </p>
      </div>
    </div>
    <div class=" footBottom">
      <p>Copyright © 2024 LOHAS Pets Cafe All Rights Reserved. </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue'
// 控制是否顯示菜單
const isShowFooter = ref(false)
// 組件成功渲染後
nextTick(() => {
  // 監聽滾動位置變化
  watch(() => scrollPosition.value, () => {
    if (window.innerWidth > 1280) {
      if (scrollPosition.value >= 4700) {
        isShowFooter.value = true
      }
    } else if (window.innerWidth > 1024) {
      if (scrollPosition.value >= 4480) {
        isShowFooter.value = true
      }
    } else if (window.innerWidth > 768) {
      if (scrollPosition.value >= 4140) {
        isShowFooter.value = true
      }
    } else if (window.innerWidth > 576) {
      if (scrollPosition.value >= 7200) {
        isShowFooter.value = true
      }
    } else if (window.innerWidth > 420) {
      if (scrollPosition.value >= 6540) {
        isShowFooter.value = true
      }
    } else if (window.innerWidth > 375) {
      if (scrollPosition.value >= 5900) {
        isShowFooter.value = true
      }
    } else {
      if (scrollPosition.value >= 5400) {
        isShowFooter.value = true
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
.footerBox {
  width: 100%;
  height: 160px;
  background-color: #ADD8E6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  opacity: 0;
  transition: all 0.8s ease-in-out;

  .footTop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;

      p {
        font-size: 1em;
        font-weight: 400;
        color: #654735;
        line-height: 26px;
        text-align: center;
      }
    }

    .link {
      margin-left: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      img {
        width: 30px;
        height: 30px;
        cursor: pointer;

        &:hover {
          transform: scale(1.3);
          transition: all 0.5s;
        }
      }

      p {
        font-size: 1em;
        font-weight: 400;
        color: #654735;
        line-height: 26px;
        text-align: center;
      }
    }
  }

  .footBottom {
    margin: 20px 0px;

    p {
      font-size: 1em;
      font-weight: bold;
      color: #654735;
      line-height: 26px;
      text-align: center;
    }
  }
}

.footerShow {
  opacity: 1;
}

// 響應式網站
// 1280px以下
@media (max-width: 1280px) {
  .footerBox {
    font-size: 18px;
  }
}

// 1024px以下
@media (max-width: 1024px) {
  .footerBox {
    font-size: 13.5px;
  }
}

// 768px以下
@media (max-width: 768px) {
  .footerBox {
    font-size: 16px;
    height: 100%;

    .footTop {
      flex-direction: column;

      .content {
        margin-top: 10px;

        p {
          font-size: 1.2em;
        }
      }

      .link {
        margin-top: 10px;
      }
    }

    .footBottom {
      p {
        font-size: 1.2em;
      }
    }
  }
}

// 576px以下
@media (max-width: 576px) {
  .footerBox {
    font-size: 15px;

    .footTop {
      .content {
        p {
          font-size: 1.2em;
        }
      }

      .link {
        margin: 5px 5px;

        p {
          font-size: 1em;
        }

        img {
          width: 18px;
          height: 18px;
        }
      }
    }

    .footBottom {
      p {
        font-size: 1.05em;
      }
    }
  }
}

// 420px以下
@media (max-width: 420px) {
  .footerBox {
    font-size: 14px;

    .footTop {
      .link {
        p {
          font-size: 0.95em;
        }

        img {
          width: 15px;
          height: 15px;
        }
      }
    }

    .footBottom {
      margin: 10px 5px;

      p {
        font-size: 1em;
      }
    }
  }
}

// 375px以下
@media (max-width: 375px) {
  .footerBox {
    font-size: 12px;

    .footTop {
      .link {
        p {
          font-size: 0.9em;
        }
      }
    }

    .footBottom {
      p {
        font-size: 0.95em;
      }
    }
  }
}
</style>