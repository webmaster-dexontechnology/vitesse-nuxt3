<script setup>
const { defaultTransition } = useTailwindConfig()

const isActive = ref(false)

const openModal = () => {
  isActive.value = true
}
const closeModal = () => {
  isActive.value = false
}
</script>

<template>
  <div>
    <div class="flex items-center justify-center" @click="openModal">
      <svg class="h-6 w-6 dark:text-white lg:text-white text-primary cursor-pointer hover:opacity-50" :class="defaultTransition" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
    </div>
    <UIModal :is-open="isActive" @on-close="closeModal">
      <FormSearchEngine />
    </UIModal>
  </div>
</template>
