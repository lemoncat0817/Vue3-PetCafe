import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScrollIntoViewStore = defineStore('scrollIntoView', () => {
  const welcome = ref()
  const about = ref()
  const menu = ref()
  const staff = ref()
  const shop = ref()
  const picture = ref()
  return { welcome, about, menu, staff, shop, picture }
})