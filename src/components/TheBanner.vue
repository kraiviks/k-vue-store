<script setup>
defineProps({
  imageUrl: String,
  handlerOnClick: Function
})
</script>
<template>
  <div
    class="mx-10 max-lg:mt-5 flex justify-center"
    :class="handlerOnClick && 'cursor-pointer'"
    @click="handlerOnClick"
  >
    <img src="/banner.jpg" alt="banner" class="rounded-3xl lg:w-[50%]" />
  </div>
</template>
