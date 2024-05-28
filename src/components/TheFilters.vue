<script setup>
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
const store = useStore()
const { category } = storeToRefs(store)
</script>
<template>
  <div class="flex justify-between items-center flex-wrap">
    <h2 class="text-3xl font-bold mb-8">{{ category }}</h2>

    <div class="flex gap-4 flex-wrap">
      <select name="" id="" class="py-2 px-3 border rounded-md outline-none max-md:w-full">
        <option value="">By name</option>
        <option value="">For the price (cheap)</option>
        <option value="">For the price (expensive)</option>
      </select>

      <div class="relative max-md:w-full">
        <img src="/search.svg" alt="search-icon" class="absolute left-4 top-3" />
        <input
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 max-md:w-full"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
</template>
