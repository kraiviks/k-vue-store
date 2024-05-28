<script setup>
import CardList from '@/components/CardList.vue'
import { useStore } from '../store'
import { storeToRefs } from 'pinia'
import { filterItems } from '@/utils/helpers'
const store = useStore()
const { favorities, category } = storeToRefs(store)
</script>

<template>
  <div class="px-10">
    <CardList :items="filterItems(favorities, category)" />
  </div>
</template>
