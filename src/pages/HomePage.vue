<script setup>
import CardList from '@/components/CardList.vue'
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
import { filterItems } from '@/utils/helpers'
const store = useStore()
const { items, category } = storeToRefs(store)
</script>

<template>
  <div class="px-10">
    <CardList :items="filterItems(items, category)" />
  </div>
</template>
