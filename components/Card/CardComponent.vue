<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
defineProps({
  content: Array || Object,
})
const activeIndex = ref(0)
const { myCld } = cloudinary()
const onHover = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div>
    <div v-for="(item, index) in content" :key="item" @mouseover="onHover(index)">
      <div
        :class="activeIndex === index ? 'shadow-shadow-light/10 h-full shadow-custom-xl scale-105' : 'scale-100'"
        class="group/card rounded-lg transition duration-200 ease-in-out"
      >
        <div class="bg-white rounded-lg cursor-pointer">
          <div v-if="item.image" class="w-full">
            <nuxt-img loading="lazy" width="250" height="200" :alt="item.title" class="rounded-tl-lg rounded-tr-lg w-full h-full object-cover min-h-[200px]" :src="myCld.image(item.image).delivery(quality(80)).toURL()" />
          </div>
          <div class="p-custom-md relative">
            <h3 v-if="item.title" class="font-bold text-lg mb-custom-sm leading-[1.35]">
              {{ item.title }}
            </h3>
            <p v-if="item.subtitle" class="mb-custom-lg leading-[1.6] line-clamp-3">
              {{ item.subtitle }}
            </p>
            <ButtonHover
              class="[&>a]:leading-0 max-h-[25px] flex items-center"
              :button-class="activeIndex === index ? 'text-md text-secondary-red-100 transition duration-200 ease-in-out !ring-0' : 'transition duration-200 ease-in-out !ring-0'"
              :button-text="$t('button.more')"
              :route-path="item.path"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
