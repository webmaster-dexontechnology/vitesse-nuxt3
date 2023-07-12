<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { vElementSize } from '@vueuse/components'
const props = defineProps({
  opacity: String,
  altText: {
    type: String,
    default: '',
  },
  url: String,
  customClass: String,
})

const { myCld } = cloudinary()
const image = ref(myCld.image(props.url).delivery(quality(80)).toURL())
const getWidth = ref(0)
const getHeight = ref(0)

function onResize({ width, height }) {
  getWidth.value = width
  getHeight.value = height
}
function handleClick(e) {
  e.preventDefault()
}
</script>

<template>
  <div class="relative w-full" @contextmenu.prevent="handleClick">
    <div
      :style="{
        maxWidth: `${getWidth}px`,
        maxHeight: `${getHeight}px`,
      }"
      :class="opacity"
      class="absolute inset-0 w-full h-full"
    >
      <div :class="customClass" class="bg-primary absolute inset-0 opacity-20 mix-blend-soft-light z-3 w-full h-full" />
      <div :class="customClass" class="bg-gradient-to-r from-[#3922B2] from-50% to-primary absolute inset-0 opacity-20 mix-blend-overlay z-2 w-full h-full" />
      <div :class="customClass" class="bg-primary absolute inset-0 opacity-10 mix-blend-color z-1 w-full h-full" />
    </div>
    <nuxt-img v-element-size="onResize" loading="lazy" sizes="lg:900px, sm:600px, xs:300px" :alt="altText" class="w-full h-full" :class="customClass" :src="image" />
  </div>
</template>
