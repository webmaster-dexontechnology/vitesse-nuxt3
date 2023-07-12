<i18n locale="en" src="@/lang/en/news/index.json"></i18n>

<i18n locale="th" src="@/lang/th/news/index.json"></i18n>

<script setup>
import { vElementSize } from '@vueuse/components'
defineProps({
  content: Object,
})

const { t } = useI18n()
const getWidth = ref(0)
const getHeight = ref(0)

function onResize({ width, height }) {
  getWidth.value = width
  getHeight.value = height
}
</script>

<template>
  <div class="xl:py-desktop lg:py-48 bg-secondary-gray-50 relative">
    <div class="lg:flex hidden bg-primary absolute inset-y-0 left-0 h-full w-[45%] z-0">
      <div class="overflow-hidden 2xl:min-h-[400px] 2xl:min-w-[400px] lg:min-h-[300px] lg:min-w-[300px] absolute left-0 -scale-x-100 bottom-0 origin-center -z-1">
        <DecorlationRstriped current-color="text-secondary-red-100" class="lg:flex hidden origin-center h-full w-auto mix-blend-darken absolute left-0 bottom-0 translate-x-0 z-0" />
      </div>
    </div>
    <div
      :style="{
        minWidth: `${getWidth}px`,
        minHeight: `${getHeight}px`,
      }"
      class="lg:flex items-center relative"
    >
      <div class="lg:container w-full">
        <div class="flex lg:flex-row flex-col items-center">
          <div class="lg:py-0 py-mobile lg:bg-transparent bg-primary lg:w-[35%] w-full">
            <div class="lg:hidden flex overflow-hidden sm:min-h-[250px] min-h-[200px] sm:min-w-[250px] min-w-[200px] absolute right-0 -scale-x-100 top-0 origin-center -z-1">
              <DecorlationRstriped current-color="text-secondary-red-100" class="origin-center h-full -scale-100 w-auto mix-blend-darken absolute right-0 top-0 translate-x-0 z-0" />
            </div>
            <div class="lg:max-w-full lg:px-0 container">
              <div
                class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
              >
                {{ content.heading }}
              </div>
              <h2 class="text-white xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-md">
                {{ content.title }}
              </h2>
              <p class="text-white text-xl leading-[1.6] mb-custom-lg">
                {{ content.subtitle }}
              </p>
              <NuxtLink :to="localePath({ path: '/news' })">
                <UIButton size="xl" class="rounded-full">
                  <template #default>
                    {{ t('button.view') }}
                  </template>
                </UIButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:absolute right-0 lg:w-[58%] lg:mt-0 -mt-custom-xl lg:pb-0 pb-mobile w-full lg:ml-auto">
        <div class="lg:px-0 mx-0 lg:container">
          <SliderNewsCarousel
            v-element-size="onResize"
            slide-class="bg-white rounded-lg shadow-custom-xl shadow-shadow-light/10 slide-card pt-0"
            :freemode="false"
            :event="true"
            :initial-slide="1"
            :space-between="15"
            :breakpoints-option="{
              0: {
                centeredSlides: true,
                slidesPerView: 1,
              },
              500: {
                centeredSlides: false,
                slidesPerView: 2,
              },
              768: {
                centeredSlides: true,
                slidesPerView: 3,
              },
              1024: {
                centeredSlides: false,
                slidesPerView: 2,
              },
              1366: {
                centeredSlides: true,
                slidesPerView: 3,
              },
              2560: {
                centeredSlides: true,
                slidesPerView: 4,
              },
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>
