<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'

const props = defineProps({
  title: String,
  button: String,
  url: String,
  href: String,
})
const { myCld } = cloudinary()
const image = ref(myCld.image(props.url).delivery(quality(80)).toURL())
</script>

<template>
  <div class="max-w-[450px]">
    <div class="flex flex-wrap lg:items-center bg-white rounded-md shadow-custom-lg shadow-shadow-light/10">
      <div class="sm:w-[40%] w-full h-full">
        <nuxt-img loading="lazy" width="230" alt="152.7" class="w-full h-full rounded-tl-md rounded-bl-md " :src="image" />
      </div>
      <div class="sm:w-[60%] w-full">
        <div class="px-6 sm:py-4 py-6">
          <div class="font-bold text-xl mb-4 capitalize">
            {{ title }}
          </div>
          <Button
            button-class="btn-sm"
            target="_blank"
            :href="href"
            :button-text="button"
          />
        </div>
      </div>
    </div>
  </div>
</template>
