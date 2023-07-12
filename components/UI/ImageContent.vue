<script setup>
const props = defineProps({
  activeIndex: Number,
  content: {
    type: Object,
  },
})
const { rt } = useI18n()
</script>

<template>
  <div class="flex lg:flex-row flex-col lg:gap-x-custom-xl relative">
    <div class="lg:w-1/2 relative">
      <div class="lg:text-[15rem] md:text-[16rem] text-[12rem] text-blue-800/10 uppercase font-bold absolute left-0 top-0 translate-y-[-47.5%] translate-x-[-40%]">
        0{{ props.activeIndex }}
      </div>
      <div
        v-if="props.content.heading"
        class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
      >
        {{ props.content.heading }}
      </div>
      <h2 v-if="props.content.title" class="xl:text-7xl lg:text-6xl sm:text-5xl xs:text-4xl text-3xl font-bold mx-auto mb-custom-lg">
        {{ props.content.title }}
      </h2>
      <!-- eslint-disable-next-line vue/no-use-v-if-with-v-for -->
      <p v-for="item in props.content.subtitle" v-if="props.content.subtitle" :key="item" class="text-xl leading-[1.6]">
        {{ rt(item.text) }}
      </p>
    </div>
    <div class="lg:w-1/2">
      <Picture
        v-if="props.content.image"
        :alt-text="props.content.title"
        opacity="opacity-10"
        class="object-cover z-0 lg:mt-0 mt-custom-xl" :url="props.content.image"
        custom-class="md:rounded-xl rounded-lg h-auto"
      />
    </div>
  </div>
</template>
