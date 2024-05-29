<script setup>
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'

const store = useStore()
const { favorities, cart } = storeToRefs(store)

const { handlerOpenDrawer } = store
</script>

<template>
  <header class="flex justify-between border-b border-slate-100 px-10 py-8">
    <RouterLink to="/">
      <div class="flex items-center gap-4 max-md: mb-10">
        <img src="/logo.svg" alt="Logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">store</h2>
        </div>
      </div>
    </RouterLink>

    <nav class="flex items-center">
      <ul class="flex items-center gap-10">
        <li
          :class="cart.totalPrice.toFixed(1) > 0 ? 'text-black' : 'text-slate-400'"
          class="flex items-center gap-3 cursor-pointer hover:text-black transition"
          @click="handlerOpenDrawer"
        >
          <img src="/cart.svg" alt="Cart" />
          <b>{{ cart.totalPrice > 0 ? cart.totalPrice.toFixed(2) : 0 }}$</b>
        </li>
        <li
          :class="favorities.length > 0 ? 'text-black font-bold' : 'text-slate-400'"
          class="flex items-center gap-3 cursor-pointer hover:text-black transition"
        >
          <RouterLink to="/favorities" class="flex items-center gap-3">
            <img src="/heart.svg" alt="heart" />
            <span>Закладки</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
