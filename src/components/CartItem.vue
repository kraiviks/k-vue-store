<script setup>
defineProps({
  imageUrl: String,
  title: String,
  price: Number,
  quantity: Number,
  onClickAdd: Function,
  onClickRemove: Function
})
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
    <img :src="imageUrl" alt="sneaker" class="w-16 h-16" />

    <div class="flex flex-col w-full">
      <p>{{ title }}</p>

      <div class="flex justify-between mt-2">
        <b>{{ price }}$</b>
        <div class="flex items-center gap-2">
          <span class="cursor-pointer p-3" @click="onClickRemove">-</span>{{ quantity
          }}<span class="cursor-pointer p-3" @click="onClickAdd">+</span>
        </div>
        <img
          @click="onClickRemove"
          src="/close.svg"
          alt="close"
          class="opacity-30 hover:opacity-100 cursor-pointer transition"
        />
      </div>
    </div>
  </div>
</template>
