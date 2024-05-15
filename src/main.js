import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
// 重設scss
import '@/styles/reset.scss'
app.mount('#app')
