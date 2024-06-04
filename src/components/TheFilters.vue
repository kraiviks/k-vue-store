<script setup>
import { useStore } from '@/store'
import { debounce } from '@/utils/helpers';
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue';
const store = useStore()
const { category, filters } = storeToRefs(store)
const isShow = ref(false)

const onChangeSelect = ({ target }) => {
  store.setSorting(target.value)
}

const onChangeSearch = ({ target }) => {
  store.setSearchQuery(target.value)
}

const debouncedOnChangeSearch = debounce(onChangeSearch, 300);


onMounted(() => {
  isShow.value = true
})

const [parent] = useAutoAnimate({ duration: 400 })
</script>

<template>
  <div class="flex justify-between items-center flex-wrap" ref="parent">
    <h2 class="text-3xl font-bold mb-8">{{ category }}</h2>

    <div class="flex gap-4 flex-wrap" v-if="isShow">
      <select
        @change="onChangeSelect"
        :value="filters.byPrice"
        class="py-2 px-3 border rounded-md outline-none max-md:w-full"
      >
        <option value="default">Sorting default</option>
        <option value="cheap">For the price (cheap)</option>
        <option value="expensive">For the price (expensive)</option>
      </select>

      <div class="relative max-md:w-full">
        <img src="/search.svg" alt="search-icon" class="absolute left-4 top-3" />
        <input
          @input="debouncedOnChangeSearch"
          :value="filters.searchQuery"
          class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400 max-md:w-full"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
</template>
