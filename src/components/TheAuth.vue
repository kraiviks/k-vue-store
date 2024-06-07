<script setup>
import TheModal from '@/components/TheModal.vue'

import IconProfile from '@/assets/images/profile.svg'

</script>

<template>
  <TheModal
    title="Login"
    buttonLabel="Profile"
    :buttonIcon="IconProfile"
    buttonClassNames="text-slate-400 hover:text-black transition"
  >
    Login content
  </TheModal>
</template>

