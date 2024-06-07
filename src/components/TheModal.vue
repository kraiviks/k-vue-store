<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'buttonLabel', 'buttonIcon', 'buttonClassNames'])


const showModal = ref(false)
</script>

<template>
  <div>
	
		<button @click="showModal = true" class="flex items-center gap-3" :class="props.buttonClassNames">
			<buttonIcon/>
      {{ props.buttonLabel }}
    </button>

    <div v-if="showModal" class="modal" @click="showModal = false">
      <div class="modal-content" @click.stop="">
        <div class="modal-head">
          <h3>{{ props.title }}</h3>
          <button @click="showModal = false">X</button>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
