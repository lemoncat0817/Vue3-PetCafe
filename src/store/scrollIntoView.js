import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useScrollIntoViewStore = defineStore('scrollIntoView', () => {
  const welcome = ref()
  const about = ref()
  const menu = ref()
  const staff = ref()
  const shop = ref()
  const picture = ref()

  onMounted(() => {
    console.log(picture.value);
  })
  return { welcome, about, menu, staff, shop, picture }
})