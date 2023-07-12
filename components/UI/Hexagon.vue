<script setup>
const props = defineProps({
  customClass: String,
  size: {
    type: String,
    default: 'w-[350px] h-[350px]',
  },
  color: {
    type: String,
    default: 'text-secondary-red-100',
  },
  opacity: {
    type: String,
    default: '.1',
  },
})
const classes = computed (() => `${props.size} ${props.color}`)
</script>

<template>
  <div :class="props.customClass" class="absolute">
    <svg :class="classes" xmlns="http://www.w3.org/2000/svg" width="338.4" height="303.1" viewBox="0 0 338.4 303.1"><g id="Group_786"><path id="Path_1083" d="m235.2,1.5H103.2c-12.8,0-24.6,6.8-31,17.9L6.3,133.6c-6.4,11.1-6.4,24.7,0,35.8l66,114.2c6.4,11.1,18.2,17.9,31,17.9h131.9c12.8,0,24.6-6.8,31-17.9l66-114.2c6.4-11.1,6.4-24.7,0-35.8l-66-114.2c-6.4-11.1-18.2-17.9-31-17.9Z" fill="none" isolation="isolate" :opacity="props.opacity" stroke="currentColor" stroke-width="3" /><path id="Path_1084" d="m226.7,20.7h-115c-11.1,0-21.4,5.9-27,15.6l-57.5,99.6c-5.6,9.7-5.6,21.5,0,31.2l57.5,99.6c5.6,9.7,15.9,15.6,27,15.6h115c11.1,0,21.4-5.9,27-15.6l57.5-99.6c5.6-9.7,5.6-21.5,0-31.2l-57.5-99.6c-5.6-9.7-15.9-15.6-27-15.6Z" fill="none" isolation="isolate" :opacity="props.opacity" stroke="currentColor" stroke-width="6" /></g></svg>
  </div>
</template>
