<template>
  <div class="aboutBox">
    <div class="aboutLeft">
      <img src="@/assets/about/About-Img.png" alt="about" />
    </div>
    <div class="aboutRight">
      <div class="story">
        <h1>創立故事</h1>
        <p> 在一個晴朗的下午，<br>幾個寵物愛好者聚在一起喝咖啡，<br>分享著彼此的愛護毛孩子的故事。</p>
        <p>他們意識到，<br>在城市中找到一個寵物友好的地方並不容易，<br>而大多數咖啡廳都不允許寵物進入。</p>
        <p>這個想法在他們之間迅速發酵，<br>於是他們決定創立一個獨特的咖啡廳，<br>一個可以讓人們和他們的毛孩子一起放鬆的地方。</p>
        <p>於是，<span style="color: #5a4034; font-weight: bold;">LOHAS Pets Café</span>誕生了。</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.aboutBox {
  width: 100%;
  height: 864px;
  display: flex;
  justify-content: center;
  align-items: center;

  .aboutLeft {
    width: 55%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .aboutRight {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'monospace', DFKai-SB;
    background: #e6c4e7;

    .story {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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
  }
}
</style>