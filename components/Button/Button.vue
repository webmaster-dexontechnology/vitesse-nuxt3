<script setup>
defineProps({
  buttonClass: String,
  buttonText: String,
  href: String,
  target: String,
  icon: String,
  routePath: {
    type: String,
    default: '',
  },
  hash: {
    type: String,
    default: '',
  },
})
const emits = defineEmits(['onClick'])
const handleClick = () => {
  emits('onClick')
}
</script>

<template>
  <div>
    <NuxtLink
      v-if="!href"
      :target="target"
      :to="
        localePath({
          path: routePath,
          hash,
        })"
      :class="buttonClass"
      class="
        md:text-2xl text-xl px-7 py-4 md:leading-[3] leading-[3.5]
        ring-secondary-red-100/25 hover:ring-4 transition duration-200 ease-out font-semibold
        items-center rounded-full bg-red-gradient text-white whitespace-nowrap"
      @click="handleClick"
    >
      <span>{{ buttonText }}</span>
    </NuxtLink>
    <a
      v-else
      :target="target"
      :class="buttonClass"
      rel="noopener noreferrer"
      class="
        md:text-2xl text-xl px-7 py-4 md:leading-[3] leading-[3.5]
        ring-secondary-red-100/25 hover:ring-4 transition duration-200 ease-out font-semibold
        items-center rounded-full bg-red-gradient text-white whitespace-nowrap"
      :href="href"
    >

      <span>{{ buttonText }}</span>
    </a>
  </div>
</template>
