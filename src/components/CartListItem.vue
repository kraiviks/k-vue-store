<script setup>
import CartItem from '@/components/CartItem.vue'
import { useStore } from '@/store'

defineProps({
  items: Array
})

const store = useStore()
const { removeOneProductFromCart, removeProductFromCart, addToCart } = store

const onClickAdd = (item) => {
  addToCart(item)
}
const onClickRemoveOneItem = (id) => {
  removeOneProductFromCart(id)
}
const onClickRemoveAllItem = (id) => {
  removeProductFromCart(id)
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
      :onClickRemoveOneItem="() => onClickRemoveOneItem(item.id)"
      :onClickRemoveAllItem="() => onClickRemoveAllItem(item.id)"
    />
  </div>
</template>
