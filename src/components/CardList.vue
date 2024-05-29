<script setup>
import TheCard from './TheCard.vue'
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
defineProps({
  items: Array
})

const store = useStore()
const { favorities, cart } = storeToRefs(store)

const { addToCart, removeFromCart, addToFavorities, removeFromFavorities } = store

const onClickAdd = (item) => {
  const isFinded = cart.value.products.find((product) => product.id === item.id)
  if (!isFinded) {
    addToCart(item)
  } else {
    removeFromCart(item.id)
  }
}
const onClickFavorite = (product) => {
  const isFinded = favorities.value.find((item) => item.id === product.id)
  if (isFinded) {
    removeFromFavorities(product)
  } else {
    addToFavorities(product)
  }
}
</script>

<template>
  <div class="grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1" v-auto-animate>
    <TheCard
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.image"
      :title="item.title"
      :price="item.price"
      :rating="item.rating.rate"
      :isAdded="true"
      :isFavorite="true"
      :onClickAdd="() => onClickAdd(item)"
      :onClickFavorite="() => onClickFavorite(item)"
    />
  </div>
</template>
