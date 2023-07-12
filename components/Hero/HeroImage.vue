<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
const props = defineProps({
  item: String,
  height: Number,
})
const { myCld } = cloudinary()
const image = ref(myCld.image(props.item).delivery(quality(80)).toURL())
</script>

<template>
  <div
    class="bg-hero inset-0 absolute z-[-10]"
  >
    <div class="opacity-40 h-full lg:relative absolute inset-x-0 top-0">
      <div class="bg-primary absolute inset-0 w-full h-full z-[3] opacity-60 mix-blend-difference lg:pb-0 md:pb-[18rem] sm:pb-[16rem] xs:pb-[10rem] pb-[8rem]" />
      <div class="bg-primary absolute inset-0 w-full h-full z-[2] opacity-80 mix-blend-screen lg:pb-0 md:pb-[18rem] sm:pb-[16rem] xs:pb-[10rem] pb-[8rem]" />
      <nuxt-img :style="{ height: `${props.height}px` }" loading="lazy" sizes="lg:1366px, sm:1000px" alt="hero banner" class="hero-image h-full object-cover object-center w-full z-[1] inset-0 absolute opacity-80 " :src="image" />
    </div>
  </div>
  <div class="bg-primary absolute inset-0 w-full h-full z-[-11] lg:pb-0 md:pb-[18rem] sm:pb-[16rem] xs:pb-[10rem] pb-[8rem]" />
</template>
