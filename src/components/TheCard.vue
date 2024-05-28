<script setup>
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
defineProps({
  id: Number,
  imageUrl: String,
  title: String,
  price: Number,
  rating: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function
})

const store = useStore()
const { cart, favorities } = storeToRefs(store)
</script>

<template>
  <div>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 hover:shadow-xl transition"
    >
      <img
        :src="favorities.find((item) => item.id === id) ? '/like-2.svg' : '/like-1.svg'"
        alt="Like"
        class="absolute top-5 left-5"
        @click="onClickFavorite"
      />

      <div class="absolute top-2 right-3">
        <b>{{ rating }}</b>
      </div>

      <img :src="imageUrl" alt="Item" class="h-32 w-full object-contain" />
      <p class="mt-2 truncate" :title="title">{{ title }}</p>
      <div class="flex justify-between mt-5">
        <div class="flex flex-col">
          <span class="text-slate-400">Price:</span>
          <b>{{ price }}$</b>
        </div>
        <img
          :src="!cart.products.some((product) => product.id === id) ? '/plus.svg' : '/checked.svg'"
          alt="Plus"
          @click="onClickAdd"
          class="active:scale-125"
        />
      </div>
    </div>
  </div>
</template>
