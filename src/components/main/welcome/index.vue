<template>
  <div class="welcomeBox">
    <div class="welcomeText">
      <h1>探索你與毛孩子一起的新樂趣！</h1>
      <h4>享受一杯咖啡，結識新的毛絨朋友。</h4>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.welcomeBox {
  width: 100%;
  height: 1080px;
  background: no-repeat url('@/assets/welcome/Welcome-Bg.png');
  background-size: 100% 100%;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  .welcomeText {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 3em;
      font-weight: bold;
      color: #fff;
      text-shadow: 4.5px 3px 1px #ff0054;
      transition: text-shadow 1.5s ease-in-out;
    }

    h4 {
      margin-top: 20px;
      font-size: 2em;
      font-weight: bold;
      color: #fff;
      text-shadow: 3.5px 2px 1px #ff0054;
      transition: text-shadow 1.5s ease-in-out;
    }
  }
}

// 響應式網站
//  1280px以下
@media (max-width: 1280px) {
  .welcomeBox {
    font-size: 17px;
    height: 864px;
  }
}

//  1024px以下
@media (max-width: 1024px) {
  .welcomeBox {
    font-size: 15px;
    height: 756px;
  }
}

//  768px以下
@media (max-width: 768px) {
  .welcomeBox {
    font-size: 12px;
    height: 540px;
  }
}

//  576px以下
@media (max-width: 576px) {
  .welcomeBox {
    font-size: 9px;
    height: 486px;
  }
}

//  420px以下
@media (max-width: 420px) {
  .welcomeBox {
    font-size: 8px;
    height: 432px;
  }
}

//  375px以下
@media (max-width: 375px) {
  .welcomeBox {
    font-size: 7px;
    height: 324px;
  }
}
</style>