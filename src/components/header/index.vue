<template>
  <div>
    <div class="headerBox" :class="{ 'headerFixed': isFixedHeader }">
      <div class="logo">
        <img src="@/assets/header/logo.png" alt="Logo">
        <h1>LOHAS Pets Café</h1>
      </div>
      <div class="menu">
        <el-anchor class="anchor" :offset="70" direction="horizontal">
          <el-anchor-link style="margin-left: 5px; " href="#welcome">
            <span style=" font-weight: bold; color: #ADD8E6; ">主頁</span>
          </el-anchor-link>
          <el-anchor-link href="#about">
            <span style=" font-weight: bold; color: #ADD8E6; ">關於我們</span>
          </el-anchor-link>
          <el-anchor-link href="#menu">
            <span style=" font-weight: bold; color: #ADD8E6; ">美味佳餚</span>
          </el-anchor-link>
          <el-anchor-link href="#staff">
            <span style=" font-weight: bold; color: #ADD8E6; ">毛孩子天地</span>
          </el-anchor-link>
          <el-anchor-link href="#shop">
            <span style=" font-weight: bold; color: #ADD8E6; ">寵物零食</span>
          </el-anchor-link>
          <el-anchor-link href=" #picture">
            <span style=" font-weight: bold; color: #ADD8E6; ">評論&用餐環境</span>
          </el-anchor-link>
        </el-anchor>
      </div>
      <div class="dropDown">
        <el-dropdown trigger="click" placement="bottom-start">
          <el-icon class="iconContent">
            <Menu class="icon" />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div class="dropDownMenu">
                  <el-anchor class="anchor" :offset="70" direction="horizontal">
                    <el-anchor-link style="margin-left: 5px; " href="#welcome">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">主頁</span>
                    </el-anchor-link>
                    <el-anchor-link href="#about">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">關於我們</span>
                    </el-anchor-link>
                    <el-anchor-link href="#menu">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">美味佳餚</span>
                    </el-anchor-link>
                    <el-anchor-link href="#staff">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">毛孩子天地</span>
                    </el-anchor-link>
                    <el-anchor-link href="#shop">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">寵物零食</span>
                    </el-anchor-link>
                    <el-anchor-link href="#picture">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">評論&用餐環境</span>
                    </el-anchor-link>
                  </el-anchor>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <div class="dropDownVertical">
        <el-dropdown trigger="click" placement="bottom-start">
          <el-icon class="iconContent">
            <Menu class="icon" />
          </el-icon>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <div class="dropDownMenu">
                  <el-anchor class="anchor" :offset="70">
                    <el-anchor-link style="margin-left: 5px; " href="#welcome">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">主頁</span>
                    </el-anchor-link>
                    <el-anchor-link href="#about">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">關於我們</span>
                    </el-anchor-link>
                    <el-anchor-link href="#menu">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">美味佳餚</span>
                    </el-anchor-link>
                    <el-anchor-link href="#staff">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">毛孩子天地</span>
                    </el-anchor-link>
                    <el-anchor-link href="#shop">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">寵物零食</span>
                    </el-anchor-link>
                    <el-anchor-link href="#picture">
                      <span style="font-size: 1.2em; font-weight: bold; color: #ADD8E6; ">評論&用餐環境</span>
                    </el-anchor-link>
                  </el-anchor>
                </div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, watch, onMounted, nextTick, onBeforeUnmount } from 'vue'
// 控制是否顯示菜單
const isFixedHeader = ref(false)
// 控制是否顯示導航
const isShowNav = ref(false)
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
// 組件成功渲染後
nextTick(() => {
  // 監聽滾動位置變化
  watch(() => scrollPosition.value, () => {
    // 如果高度大於或等於360
    // 則顯示菜單
    if (scrollPosition.value >= 50) {
      isFixedHeader.value = true
    } else {
      isFixedHeader.value = false
    }
  })
})
</script>

<style lang="scss">
.headerBox {
  width: 100%;
  height: 100px;
  background: #ADD8E6;
  opacity: .8;
  z-index: 1;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    margin-left: 20px;

    img {
      width: 80px;
      height: 80px;
    }

    h1 {
      margin-left: 10px;
      font-size: 2em;
      font-weight: bold;
      color: transparent;
      background: #5a4034 linear-gradient(to left, transparent, #fff, transparent) no-repeat 0 0;
      background-size: 20% 100%;
      background-position: 0 0;
      background-clip: text;
      animation: shine 7.5s infinite;
    }
  }

  .menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    .anchor {
      margin-right: 10px;
      width: 28em;
      border-radius: 20px;

      span {
        font-size: 1.5em;
        font-weight: bold;
        color: #ADD8E6;
      }
    }
  }

  .dropDown {
    .iconContent {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: end;
      align-items: center;
      background: white;
      border-radius: 10px;
      margin-right: 10px;
      cursor: pointer;

      .icon {
        width: 100%;
        height: 100%;
        color: #ADD8E6;
      }
    }
  }

  .dropDownVertical {
    .iconContent {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: end;
      align-items: center;
      background: white;
      border-radius: 10px;
      margin-right: 10px;
      cursor: pointer;

      .icon {
        width: 100%;
        height: 100%;
        color: #ADD8E6;
      }
    }
  }
}


.headerFixed {
  position: fixed;
  border-bottom-left-radius: 15%;
  border-bottom-right-radius: 15%;
}

// 文字閃爍效果
@keyframes shine {
  from {
    background-position: 0% 0%;
  }

  to {
    background-position: 100% 100%;
  }
}

// 響應式網站
// 1280px以下
@media (max-width: 1280px) {
  .headerBox {
    .logo {
      h1 {
        font-size: 1.8em;
      }
    }
  }
}

// 1024px以上
@media (min-width: 1025px) {
  .headerBox {
    .dropDown {
      display: none;
    }
  }
}

//  1024px以下
@media (max-width: 1024px) {
  .headerBox {
    .logo {
      justify-content: center;
    }

    .menu {
      display: none;
    }
  }
}

//  576px以上
@media (min-width: 577px) {
  .headerBox {
    .dropDownVertical {
      display: none;
    }
  }
}

//  576px以下
@media (max-width: 576px) {
  .headerBox {
    height: 80px;
    font-size: 15px;

    .logo {
      img {
        width: 70px;
        height: 70px;
      }
    }

    .dropDown {
      display: none;
    }

    .dropDownVertical {
      .iconContent {
        width: 50px;
        height: 50px;
      }
    }
  }
}

// 420px以下
@media (max-width: 420px) {
  .headerBox {
    height: 70px;
    font-size: 13px;

    .logo {
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}

// 375px以下
@media (max-width: 375px) {
  .headerBox {
    height: 60px;
    font-size: 10px;

    .logo {
      img {
        width: 50px;
        height: 50px;
      }
    }

    .dropDownVertical {
      .iconContent {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>