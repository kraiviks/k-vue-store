<script setup>
import CartItem from './CartItem.vue'
import { useStore } from '../store'

defineProps({
  items: Array
})

const store = useStore()

const { removeFromCart, addToCart } = store

const onClickAdd = (item) => {
  addToCart(item)
}

const onClickRemove = (id) => {
  removeFromCart(id)
}
</script>

<template>
  <div class="flex flex-col flex-1 gap-4 overflow-auto" v-auto-animate>
    <CartItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.image"
      :title="item.title"
      :price="item.price"
      :quantity="item.quantity"
      :onClickAdd="() => onClickAdd(item)"
      :onClickRemove="() => onClickRemove(item.id)"
    />
  </div>
</template>
