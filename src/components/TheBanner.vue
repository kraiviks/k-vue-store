<script setup>
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { onMounted, ref } from 'vue'
defineProps({
  imageUrl: String,
  handlerOnClick: Function
})
const isShow = ref(false)

onMounted(() => {
  isShow.value = true
})

const [parent] = useAutoAnimate({duration: 450})
</script>
<template>
  <div
    class="mx-10 max-lg:mt-5 flex justify-center"
    :class="handlerOnClick && 'cursor-pointer'"
    @click="handlerOnClick"
    ref="parent"
    >
    <img v-if="isShow" src="/banner.jpg" alt="banner" class="rounded-3xl lg:w-[50%]" />
  </div>
</template>
