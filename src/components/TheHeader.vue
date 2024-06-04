<script setup>
import { useStore } from '@/store'
import { useAutoAnimate } from '@formkit/auto-animate/vue';
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue';

const store = useStore()
const { favorities, cart } = storeToRefs(store)
const { handlerOpenDrawer } = store

const isShow = ref(false)
const [parent] = useAutoAnimate({duration: 450})

onMounted(() => {
  isShow.value = true
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-100 px-10 py-8" ref="parent">
    <RouterLink to="/">
      <div class="flex items-center gap-4 max-md: mb-10">
        <img src="/logo.svg" alt="Logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">store</h2>
        </div>
      </div>
    </RouterLink>

    <nav class="flex items-center" v-if="isShow">
      <ul class="flex items-center gap-10">
        <li
          :class="cart.totalPrice.toFixed(1) > 0 ? 'text-black' : 'text-slate-400'"
          class="flex items-center gap-3 cursor-pointer hover:text-black transition"
          @click="handlerOpenDrawer"
        >
          <img
            src="/cart.svg"
            alt="Cart"
            :class="cart.totalPrice.toFixed(1) > 0 && 'animateCart'"
          />
          <span>{{ cart.totalPrice > 0 ? cart.totalPrice.toFixed(2) : 0 }}$</span>
        </li>
        <li
          :class="favorities.length > 0 ? 'text-black' : 'text-slate-400'"
          class="flex items-center gap-3 cursor-pointer hover:text-black transition"
        >
          <RouterLink to="/favorities" class="flex items-center gap-3">
            <img
              src="/heart.svg"
              alt="heart"
              :class="favorities.length > 0 && 'animateFavorities'"
            />
            <span>Закладки</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.animateCart {
  animation: animateCart 0.7s ease infinite alternate-reverse;
}
@keyframes animateCart {
  0% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(0deg);
  }
  100% {
    filter: drop-shadow(1px 1px 2px grey);
    transform: scale(1.2) rotate(10deg);
  }
}

.animateFavorities {
  animation: animateFavorities 1s ease infinite alternate-reverse;
}
@keyframes animateFavorities {
  to {
    filter: drop-shadow(1px 1px 2px grey);
    transform: scale(1.2);
  }
}
</style>
