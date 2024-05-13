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
  height: 100vh;
  background: no-repeat url('@/assets/welcome/Welcome-Bg.png');
  background-size: cover;
  opacity: 0.85;
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
    }

    h4 {
      margin-top: 20px;
      font-size: 1.5em;
      color: #fff;
    }
  }
}
</style>