<template>
  <div class="footerBox">
    <div class="footTop">
      <div class="content">
        <p>本餐廳目前無提供電話訂位服務</p>
        <p>如有用餐需求請至現場排隊等候入場</p>
        <p><span style="margin-right: 5px; font-weight: bold;">餐廳地址:</span>貓貓市 肥貓區 貓爪路三段 貓尾巷5號</p>
      </div>
      <div class="link">
        <img src="@/assets/footer/facebook.png" alt="facebook">
        <img src="@/assets/footer/instagram.png" alt="instagram">
        <p>可以追蹤我們的<span style="margin-right: 5px; font-weight: bold;">FaceBook</span>以及<span
            style="margin-right: 5px; font-weight: bold;">Instagram</span>獲得最新資訊</p>
      </div>
    </div>
    <div class=" footBottom">
      <p>Copyright © 2024 LOHAS Pets Cafe All Rights Reserved. </p>
    </div>
  </div>
</template>

<script setup>
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

  .footTop {
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

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

      img {
        width: 30px;
        height: 30px;
        margin: 0px 10px;
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
    margin-top: 20px;

    p {
      font-size: 1em;
      font-weight: bold;
      color: #654735;
      line-height: 26px;
      text-align: center;
    }
  }

}
</style>