<script setup>
import CardList from '@/components/CardList.vue'
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
import { filterItems } from '@/utils/helpers'
const store = useStore()
const { favorities, category, filters } = storeToRefs(store)
</script>

<template>
  <div class="px-10 flex justify-center">
    <CardList v-if="favorities.length" :items="filterItems(favorities, category, filters)" />
    <div v-else class="text-2xl text-slate-400 p-20">Favorities is empty</div>
  </div>
</template>
