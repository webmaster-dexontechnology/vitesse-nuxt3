<script setup>
defineProps({
  content: Object,
})
</script>

<template>
  <div class="lg:py-desktop py-mobile bg-primary relative overflow-hidden">
    <div class="overflow-hidden 2xl:min-h-[550px] lg:min-h-[450px] sm:min-h-[250px] min-h-[200px] 2xl:min-w-[550px] lg:min-w-[450px] sm:min-w-[250px] min-w-[200px]  absolute right-0 -scale-x-100 top-0 origin-center -z-1">
      <DecorlationRstriped current-color="text-secondary-red-100" class="origin-center h-full w-auto rotate-180 mix-blend-darken absolute right-0 top-0 translate-x-0 z-0" />
    </div>
    <div class="container relative">
      <div class="grid lg:grid-flow-col grid-flow-row-dense lg:gap-x-10">
        <div class="flex flex-col items-start justify-center xl:mr-custom-2xl lg:mr-custom-xl lg:mb-0 mb-custom-xl">
          <div
            class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
          >
            {{ content.heading }}
          </div>
          <h2 class="xl:text-5xl md:text-4xl text-3xl font-bold mb-custom-md text-white xl:max-w-xl lg:max-w-lg">
            {{ content.title }}
          </h2>
          <h3 class="text-2xl leading-[1.6] lg:mb-3 mb-2 text-white font-semibold">
            {{ content.subtitle1 }}
          </h3>
          <p class="text-xl leading-[1.6] mb-custom-xl text-white/90">
            {{ content.subtitle2 }}
          </p>
          <div class="grid sm:grid-cols-3 mx-auto sm:max-w-full max-w-[200px] gap-x-6 gap-y-custom-lg mb-custom-xl text-center">
            <div v-for="item in content.card" :key="item">
              <header class="text-white xl:text-6xl sm:text-5xl text-4xl font-bold mb-4">
                {{ item.value }}
              </header>
              <h4 class="text-white lg:text-lg text-md font-semibold">
                {{ item.text }}
              </h4>
            </div>
          </div>
          <Button class="lg:mx-0 mx-auto" :button-text="`${$t(content.btn)}`" :route-path="content.path" />
        </div>
        <div class="mx-auto w-full relative lg:flex hidden">
          <Picture
            :alt-text="content.title"
            class="object-cover z-0" :url="content.url"
            custom-class="sm:rounded-2xl rounded-2xl h-auto"
          />
        </div>
      </div>
    </div>
  </div>
</template>
