<template>
  <div class="pictureBox">
    <div class="comment">
      <h1>
        五星好評
        <el-icon v-for="item in 5" :key="item" style="color: yellow; ">
          <StarFilled />
        </el-icon>
      </h1>
      <div class="carousel">
        <el-carousel :interval="3000" arrow="never" style="width: 350px; height: 300px;" indicator-position="none"
          :pause-on-hover="false">
          <el-carousel-item v-for="item in comment" :key="item">
            <img style="width: 350px; height: 250px;" :src="item.img" alt="" />
            <h3>{{ item.text }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="restaurant">
      <h1> 用餐環境 </h1>
      <div class="carousel">
        <el-carousel :interval="3000" arrow="never" style="width: 350px; height: 300px;" indicator-position="none">
          <el-carousel-item v-for="item in restaurant" :key="item">
            <img style="width: 350px; height: 300px;" :src="item.img" alt="" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

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
  height: 756px;
  font-size: 20px;
  background: no-repeat url('@/assets/picture/Picture-Bg.png');
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
    }

    .carousel {
      width: 450px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 20px;


      .el-carousel__item {
        border-radius: 20px;

        img {
          border-radius: 20px;
        }

        h3 {
          color: #5a4034;
          font-weight: bold;
          height: 50px;
          text-align: center;
          line-height: 50px;
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
    }

    .carousel {
      width: 450px;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 20px;

      .el-carousel__item {
        border-radius: 20px;

        img {
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
</style>