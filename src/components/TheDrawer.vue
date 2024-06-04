<script setup>
import { ref, watchEffect } from 'vue'
import DrawerHead from '@/components/DrawerHead.vue'
import CartListItem from '@/components/CartListItem.vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/store'
import { onClickOutside, useSwipe } from '@vueuse/core'

const store = useStore()
const { cart, drawerIsOpen: isOpen } = storeToRefs(store)
const { handlerOpenDrawer, handlerCloseDrawer } = store
const { isSwiping, direction } = useSwipe(target)

const target = ref(null)

const handlerCreateOrder = () => {
  alert('Order is created')
}

watchEffect(() => {
  if (isSwiping.value && direction.value === 'right') {
    handlerCloseDrawer()
  }
})

onClickOutside(target, () => handlerCloseDrawer())
</script>

<template>
  <Transition name="slide">
    <div
      v-show="isOpen"
      class="flex flex-col bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 shadow-2xl"
      ref="target"
    >
      <DrawerHead @click="handlerOpenDrawer" />
      {{ isSwiping }}
      {{ direction }}
      <div v-if="cart.products.length" class="flex flex-col h-[93%]">
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
            class="mt-4 bg-custom-btn w-full rounded-xl py-4 text-white hover:bg-custom-btn-hover active:bg-custom-btn-active disabled:cursor-default disabled:bg-slate-300 transition cursor-pointer"
            :disabled="!cart.totalItems"
            @click="handlerCreateOrder"
          >
            Make an order
          </button>
        </div>
      </div>
      <div v-else class="flex flex-col h-full items-center justify-center">
        <img src="/package-icon.png" width="120" height="120" alt="" />
        <p class="text-slate-400 font-bold text-center">The basket is empty</p>
        <p class="text-slate-400 text-center max-w-52">
          Add the product to the cart to place an order
        </p>
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
