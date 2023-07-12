<script setup>
const props = defineProps(['routePath', 'buttonClass', 'buttonText', 'hash', 'schedule', 'course'])
const emits = defineEmits(['onClick'])
const handleClick = () => {
  emits('onClick')
}
</script>

<template>
  <div>
    <NuxtLink
      :to="
        localePath({
          path: routePath,
          hash,
          query: {
            schedule: props.schedule !== '' ? props.schedule : '',
            course: props.course !== '' ? props.course : '',
          },
        })"
      :class="props.buttonClass"
      class="
        leading-[3.5] hover:ring-4 hover:ring-secondary-red-100/25
        rounded-full text-primary whitespace-nowrap font-semibold"
      @click="handleClick"
    >
      <span>{{ props.buttonText }}</span>
    </NuxtLink>
  </div>
</template>
