<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { useStore } from './store'
import TheHeader from './components/TheHeader.vue'
import TheCategories from './components/TheCategories.vue'
import TheDrawer from './components/TheDrawer.vue'
import TheFilters from './components/TheFilters.vue'

const store = useStore()

const { setItems, setFavorities, setCart } = store

const localCart = localStorage.getItem('cart')

const localFavorities = localStorage.getItem('favorities')

onMounted(async () => {
  await axios
    .get('https://fakestoreapi.com/products')
    .then((response) => {
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
  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl my-14">
    <TheHeader class="flex flex-wrap" />
    <TheCategories class="flex justify-center mb-5" />
    <TheFilters class="px-10" />
    <main class="py-10">
      <RouterView />
    </main>
  </div>
</template>
