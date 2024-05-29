<script setup>
import CardList from '@/components/CardList.vue'
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
import { filterItems } from '@/utils/helpers'
const store = useStore()
const { items, category, filters } = storeToRefs(store)
</script>

<template>
  <div class="px-10 flex justify-center">
    <CardList v-if="items.length" :items="filterItems(items, category, filters)" />
    <div v-else class="text-2xl text-slate-400 p-20">Products not found</div>
  </div>
</template>
