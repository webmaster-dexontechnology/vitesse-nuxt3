<script setup>
const props = defineProps({
  content: {
    tye: Object,
    default: null,
  },
})
</script>

<template>
  <li
    class="border border-secondary-gray-100 origin-center w-full md:px-6 px-4 py-6 flex md:flex-row flex-col bg-white cursor-pointer transition ease-linear duration-200 rounded-lg md:items-center md:justify-normal justify-center relative z-0"
  >
    <div
      class="flex flex-col w-full md:flex-row gap-x-8"
    >
      <div class="my-auto">
        <h3 v-if="props.content.title" class="text-primary md:text-xl text-lg font-semibold mb-2">
          {{ props.content.title }}
        </h3>
        <p class="text-md font-medium mb-0">
          {{ props.content.text }}
        </p>
      </div>
      <div class="md:ml-auto md:mt-0 mt-custom-lg flex md:flex-nowrap flex-wrap items-center gap-x-6 gap-y-4">
        <slot name="btn" />
      </div>
    </div>
  </li>
</template>
