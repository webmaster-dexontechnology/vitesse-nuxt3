<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
const props = defineProps({
  imageUrl: String,
  customColor: {
    type: String,
    default: 'bg-secondary-red-100',
  },
})
const { myCld } = cloudinary()
const image = ref(myCld.image(props.imageUrl).delivery(quality(80)).toURL())
</script>

<template>
  <div class="container">
    <div class="z-10 lg:max-w-[54rem] max-w-xl">
      <div
        class="uppercase lg:text-xl md:text-lg sm:text-md text-sm xl:leading-17 flex items-center font-semibold text-secondary-red-100"
      >
        <span class="lg:w-8 md:w-8 w-6 h-[2px] mr-4" :class="customColor" />
        <slot name="header" />
      </div>
      <h1
        class="lg:text-5xl sm:text-4xl xs:text-2xl text-xl uppercase text-white lg:leading-[1.2]"
      >
        <slot name="title" />
      </h1>
      <!-- <Button :button-text="`${$t(item.btn)}`" :hash="item.link" /> -->
    </div>
  </div>
  <div
    class="bg-hero inset-0 absolute z-[-10]"
  >
    <div
      class="opacity-40 h-full w-full lg:relative absolute inset-x-0 top-0 overflow-hidden"
    >
      <div class="bg-primary absolute inset-0 w-full h-full z-[3] opacity-30 mix-blend-difference" />
      <div class="bg-primary absolute inset-0 w-full h-full z-[2] opacity-80 mix-blend-screen" />
      <nuxt-img loading="lazy" width="1366" height="768" alt="hero image" class="object-cover object-center h-full w-full z-[1] inset-0 absolute opacity-80" :src="image" />
    </div>
  </div>
  <div class="bg-primary absolute inset-0 w-full h-full z-[-11]" />
  <!-- <DecorlationRstriped current-color="text-secondary-red-100" class="opacity-60 mix-blend-hard-light origin-center lg:h-[250px] md:h-[200px] sm:h-[150px] h-[100px] w-auto lg:-scale-x-100 -scale-y-100 absolute lg:left-0 lg:right-[none] right-0 top-0 translate-x-0 z-1" /> -->
</template>
