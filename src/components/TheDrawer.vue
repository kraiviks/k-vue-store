<script setup>
import DrawerHead from './DrawerHead.vue'
import CartListItem from './CartListItem.vue'
import { storeToRefs } from 'pinia'
import { useStore } from '../store'

const store = useStore()
const { cart, drawerIsOpen: isOpen } = storeToRefs(store)
const { handlerOpenDrawer } = store
</script>

<template>
  <Transition name="slide">
    <div
      v-show="isOpen"
      class="flex flex-col bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 shadow-2xl"
    >
      <DrawerHead @click="handlerOpenDrawer" />

      <CartListItem :items="cart.products" />

      <div class="flex flex-col gap-5 mt-7">
        <div class="flex gap-2">
          <span>Total items:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ cart.totalItems }}</b>
        </div>
        <div class="flex gap-2">
          <span>Total price:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ cart.totalPrice > 0 ? cart.totalPrice.toFixed(2) : 0 }}$</b>
        </div>

        <div class="flex gap-2">
          <span>Tax 5%:</span>
          <div class="flex-1 border-b border-dashed"></div>
          <b>{{ cart.tax > 0 ? cart.tax.toFixed(2) : 0 }}$</b>
        </div>
        <button
          :disabled="!cart.totalItems"
          class="mt-4 bg-custom-btn w-full rounded-xl py-4 text-white hover:bg-custom-btn-hover active:bg-custom-btn-active disabled:cursor-default disabled:bg-slate-300 transition cursor-pointer"
        >
          Make an order
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.7s ease;
  transform: translateX(100%);
  opacity: 1;
}

.slide-enter-to {
  transition: all 0.7s ease;
  transform: translateX(0%);
}

.slide-leave-active {
  transition: all 0.7s ease;
  transform: translateX(100%);
  opacity: 0;
}
</style>
