<template>
  <div class="pictureBox">
    <div class="title" :class="{ 'titleShow': isShowTitle }">
      <h1>評論&用餐環境</h1>
      <p>我們一直努力為每一位顧客提供最好的用餐體驗，<br>
        並且對於您的肯定感到非常欣慰。</p>
      <p>我們精心設計的用餐環境融合了舒適和美感，<br>
        為您和您的寵物提供了一個愉快的用餐場所。</p>
    </div>
    <div class="content" :class="{ 'contentShow': isShowContent }">
      <div class="comment">
        <h1>
          五星好評
          <el-icon v-for="item in 5" :key="item" style="color: yellow; ">
            <StarFilled />
          </el-icon>
        </h1>
        <div class="carousel">
          <el-carousel :interval="3000" arrow="never" style="width: 80%; height: 80%;" indicator-position="none"
            :pause-on-hover="false">
            <el-carousel-item v-for="item in comment" :key="item">
              <img :src="item.img" alt="" />
              <h3>{{ item.text }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div class="restaurant">
        <h1> 用餐環境 </h1>
        <div class="carousel">
          <el-carousel :interval="3000" arrow="never" style="width: 80%; height: 80%;" indicator-position="none">
            <el-carousel-item v-for="item in restaurant" :key="item">
              <img :src="item.img" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
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
    if (scrollPosition.value >= 3900) {
      isShowTitle.value = true
    }
    if (scrollPosition.value >= 4400) {
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
// 評論資料
const comment = ref([
  {
    img: 'src/assets/picture/person1.png',
    text: '我的貓咪愛上這裡的美食！'
  },
  {
    img: 'src/assets/picture/person2.png',
    text: '真可愛！完美的寵物友善餐廳！'
  },
  {
    img: 'src/assets/picture/person3.png',
    text: '絕對值得再次光顧！'
  },
  {
    img: 'src/assets/picture/person4.png',
    text: '美味驚艷，讓人欲罷不能！'
  },
  {
    img: 'src/assets/picture/person5.png',
    text: '狗狗很開心！這裡真是個寵物天堂！'
  }
])
const restaurant = ref([
  {
    img: 'src/assets/picture/restaurant1.png',
  },
  {
    img: 'src/assets/picture/restaurant2.png',
  },
  {
    img: 'src/assets/picture/restaurant3.png',
  },
  {
    img: 'src/assets/picture/restaurant4.png',
  }
])
</script>

<style lang="scss" scoped>
.pictureBox {
  width: 100%;
  height: 864px;
  font-size: 20px;
  background: no-repeat url('@/assets/picture/Picture-Bg.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    transform: translateY(100px);
    transition: all 1.2s ease-in-out;
    opacity: 0;

    .comment {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        font-size: 2em;
        font-weight: 700;
        color: #5a4034;
        margin-bottom: 10px;
        font-family: DFKai-SB;
        margin-bottom: 30px;
        height: 50px;
      }

      .carousel {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 20px;


        .el-carousel__item {
          border-radius: 20px;

          img {
            border-radius: 20px;
            width: 100%;
            height: 85%;
          }

          h3 {
            color: #5a4034;
            font-weight: bold;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 1.2em;
          }
        }
      }
    }

    .restaurant {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;


      h1 {
        font-size: 2em;
        font-weight: 700;
        color: #5a4034;
        margin-bottom: 10px;
        font-family: DFKai-SB;
        margin-bottom: 30px;
        height: 50px;
      }

      .carousel {
        width: 60%;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 20px;

        .el-carousel__item {
          border-radius: 20px;

          img {
            width: 100%;
            height: 100%;
            cursor: pointer;
            border-radius: 20px;

            &:hover {
              transform: scale(1.2);
              transition: all 0.5s;
            }
          }
        }
      }
    }
  }

  .contentShow {
    transform: translateY(0);
    opacity: 1;
  }
}

// 響應式網站
// 1600px以下
@media (max-width: 1600px) {
  .pictureBox {
    .content {
      .comment {
        .carousel {

          .el-carousel__item {
            h3 {
              font-size: 1em;
            }
          }
        }
      }
    }
  }
}

// 1440px以下
@media (max-width: 1440px) {
  .pictureBox {
    .content {
      .comment {
        .carousel {
          height: 60%;
        }
      }

      .restaurant {
        .carousel {
          height: 60%;
        }
      }
    }
  }
}

// 1366px以下
@media (max-width: 1366px) {
  .pictureBox {
    .content {
      .comment {
        .carousel {
          .el-carousel__item {
            h3 {
              font-size: 0.9em;
            }
          }
        }
      }
    }
  }
}
// 1280px以下
@media (max-width: 1280px) {
  .pictureBox {
    .content {
      .comment {
        .carousel {
          width: 75%;
          .el-carousel__item {
            h3 {
              font-size: 0.95em;
            }
          }
        }
      }
    }
  }
}

//  1024px以下
@media (max-width: 1024px) {
  .pictureBox {
    font-size: 18px;

    .content {
      .comment {
        .carousel {
          width: 90%;

          .el-carousel__item {
            h3 {
              font-size: 0.9em;
            }
          }
        }
      }

      .restaurant {
        .carousel {
          width: 90%;
        }
      }
    }
  }
}

//  768px以下
@media (max-width: 768px) {
  .pictureBox {
    height: 100%;
    font-size: 20px;

    .content {
      flex-direction: column;

      .comment {
        width: 90%;
        margin: 20px 0px;

        .carousel {
          height: 19em;

          .el-carousel__item {
            h3 {
              font-size: 1.1em;
            }
          }
        }
      }

      .restaurant {
        width: 90%;
        margin: 20px 0px;

        .carousel {
          height: 19em;
        }
      }
    }
  }
}

//  576px以下
@media (max-width: 576px) {
  .pictureBox {
    font-size: 20px;

    .content {
      .comment {
        width: 100%;

        h1 {
          font-size: 1.75em;
        }

        .carousel {
          height: 18.5em;

          .el-carousel__item {
            h3 {
              font-size: 0.9em;
            }
          }
        }
      }

      .restaurant {
        width: 100%;

        h1 {
          font-size: 1.75em;
        }

        .carousel {
          height: 18.5em;
        }
      }
    }
  }
}

//  420px以下
@media (max-width: 420px) {
  .pictureBox {
    .content {
      margin-bottom: 10px;

      .comment {
        h1 {
          font-size: 1.65em;
        }

        .carousel {
          height: 13.5em;

          .el-carousel__item {
            h3 {
              font-size: 0.8em;
            }

            img {
              height: 60%;
            }
          }
        }
      }

      .restaurant {
        h1 {
          font-size: 1.65em;
        }

        .carousel {
          height: 13.5em;

          .el-carousel__item {
            img {
              height: 70%;
            }
          }
        }
      }
    }
  }
}

//  375px以下
@media (max-width: 375px) {
  .pictureBox {
    font-size: 16px;

    .content {
      .comment {
        h1 {
          font-size: 1.75em;
        }

        .carousel {
          height: 16em;

          .el-carousel__item {
            h3 {
              font-size: 0.9em;
            }

            img {
              height: 55%;
            }
          }
        }
      }

      .restaurant {
        h1 {
          font-size: 1.75em;
        }

        .carousel {
          height: 16em;

          .el-carousel__item {
            img {
              height: 65%;
            }
          }
        }
      }
    }
  }
}
</style>