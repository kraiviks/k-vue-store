<script setup>
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'

const store = useStore()
const { category: currentCategory } = storeToRefs(store)

const { setCategory } = store

const categories = [
  {
    id: 1,
    name: 'All'
  },
  {
    id: 2,
    name: 'Electronics'
  },
  {
    id: 3,
    name: 'Jewelery'
  },
  {
    id: 4,
    name: "Men's clothing"
  },
  {
    id: 5,
    name: "Women's clothing"
  }
]
</script>
<template>
  <ul class="flex items-center gap-3 flex-wrap">
    <li
      v-for="category in categories"
      :key="category.id"
      class="flex items-center border border-gray-500 rounded-full py-1 px-4 cursor-pointer hover:bg-slate-500 hover:text-white transition"
      :class="currentCategory === category.name ? 'bg-slate-500 text-white' : ''"
      @click="setCategory(category.name)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>
