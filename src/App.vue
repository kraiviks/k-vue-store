<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import axios from 'axios'
import { useStore } from '@/store'
import TheHeader from '@/components/TheHeader.vue'
import TheCategories from '@/components/TheCategories.vue'
import TheDrawer from '@/components/TheDrawer.vue'
import TheFilters from '@/components/TheFilters.vue'
import TheBanner from '@/components/TheBanner.vue'
import router from '@/router'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { useSwipe } from '@vueuse/core'
import TheModal from '@/components/TheModal.vue'

const isShow = ref(false)
const [parent] = useAutoAnimate({ duration: 500 })

const store = useStore()
const { setItems, setFavorities, setCart, handlerOpenDrawer } = store

const localCart = localStorage.getItem('cart')
const localFavorities = localStorage.getItem('favorities')

const targetMain = ref(null)
const { isSwiping, direction } = useSwipe(targetMain)

watchEffect(() => {
  if (isSwiping.value && direction.value === 'left') {
    handlerOpenDrawer()
  }
})

onMounted(async () => {
  await axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
      isShow.value = true
      setItems(response.data)
      if (localCart) {
        setCart(JSON.parse(localCart))
      }
      if (localFavorities) {
        setFavorities(JSON.parse(localFavorities))
      }
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <TheDrawer />
  <div class="bg-white w-[90%] m-auto rounded-xl shadow-xl my-14" ref="targetMain">
    <TheHeader class="flex flex-wrap" />
    <TheCategories class="flex justify-center my-5" />
    <TheFilters class="px-10" />
    <TheBanner imageUrl="/banner.jpg" :handlerOnClick="() => router.push('/')" />
    <main class="py-10" ref="parent">
      <RouterView v-if="isShow" />
    </main>
  </div>
</template>
