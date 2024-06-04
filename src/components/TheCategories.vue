<script setup>
import { useStore } from '@/store'
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

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

const isShow = ref(false)

onMounted(() => {
  isShow.value = true
})

const [parent] = useAutoAnimate({ duration: 300 })
</script>
<template>
  <div ref="parent">
    <ul class="flex justify-center items-center gap-3 flex-wrap animation-init" v-if="isShow">
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
  </div>
</template>

<style></style>
