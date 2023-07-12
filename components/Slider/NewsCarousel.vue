<i18n locale="en" src="@/lang/en/news/index.json"></i18n>

<i18n locale="th" src="@/lang/th/news/index.json"></i18n>

<script setup>
import SwiperCore, {
  Autoplay,
  FreeMode,
  Grid,
  Pagination,
} from 'swiper'
import {
  Swiper,
  SwiperSlide,
} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import { quality } from '@cloudinary/url-gen/actions/delivery'

const props = defineProps({
  initialSlide: Number,
  freemode: {
    tyep: Boolean,
    default: false,
  },
  gridOption: Object,
  spaceBetween: Number,
  slideClass: String,
  slidesPerView: Number || Object,
  content: Array,
  breakpointsOption: Object,
  event: Boolean,
  date: Boolean,
  darkActive: Boolean,
})

const { t, tm, rt } = useI18n()
const newsArticle = tm('article')
const { myCld } = cloudinary()
SwiperCore.use([Pagination, FreeMode, Autoplay, Grid])
const swiperRef = ref(null)
const modules = ref([Pagination, FreeMode, Grid])
const swiperIndex = ref(null)
const swiperBegin = ref(false)
const swiperEnd = ref(null)
const activeIndex = ref(0)
const pagination = ref({
  clickable: true,
  el: '.card-swiper-pagination',
  renderBullet(index, className) {
    return `<span class="${className}"></span>`
  },
})

const onSwiper = (swiper) => {
  swiperRef.value = swiper
  swiperIndex.value = swiperRef.value.activeIndex
  // swiper.updateSlides()
  // swiperRef.value.updateSize()
  // swiperRef.value.updateSlides()
}

const onSlideChange = () => {
  // console.log(swiperBegin.value, swiperEnd.value, swiperIndex.value)
}

const slidePrev = () => {
  swiperRef.value.slidePrev()
}

const slideNext = () => {
  swiperRef.value.slideNext()
}

const onReachBegin = () => {
  swiperBegin.value = true
}

const onReachEnd = () => {
  swiperEnd.value = true
}

const onEdge = () => {
  swiperBegin.value = false
  swiperEnd.value = false
}

const onHover = (index) => {
  activeIndex.value = index
}

onMounted(() => {
  onReachBegin()
  onEdge()
  window.addEventListener('resize', onSwiper)
  window.addEventListener('resize', onReachBegin)
})
</script>

<template>
  <div class="my-swiper overflow-hidden px-3 py-8">
    <Swiper
      :grid="gridOption"
      :round-lengths="true"
      :grab-cursor="false"
      :space-between="props.spaceBetween"
      :slide-to-clicked-slide="false"
      :initial-slide="props.initialSlide"
      :centered-slides="false"
      :watch-slides-progress="true"
      :free-mode="{
        enabled: props.freemode,
        sticky: false,
        momentumBounce: false,
      }"
      :slides-per-view="props.slidesPerView"
      :loop="false"
      :pagination="pagination"
      :navigation="false"
      :modules="modules"
      :loop-additional-slides="30"
      :breakpoints="props.breakpointsOption"
      class="my-swiper-wrapper"
      :class="props.darkActive ? 'my-swiper-grid' : ''"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
      @reach-end="onReachEnd"
      @reach-beginning="onReachBegin"
      @from-edge="onEdge"
    >
      <SwiperSlide
        v-for="(item, index) in darkActive ? props.content : newsArticle" :key="item"
        :class="[
          props.slideClass, activeIndex === index && props.darkActive ? 'bg-primary rounded-2xl shadow-custom-xl shadow-shadow-light/10 pt-6' : '',
          !props.darkActive ? 'pt-0' : 'pt-6 rounded-2xl',
        ]"
        class="my-swiper-slide z-10 group/card min-h-[440px]"
        @mouseover="onHover(index)"
      >
        <NuxtLink
          :to="localePath({
            path: darkActive ? item.btn.path : `/news/${rt(item.id)}`,
          })"
        >
          <div class="z-20 rounded-lg cursor-pointer" :class="{ 'text-center': props.darkActive }">
            <div v-if="item.image" class="w-full" :class="{ 'w-full mx-auto h-full': props.darkActive }">
              <div v-if="props.darkActive" :class="activeIndex === index ? 'opacity-100' : 'opacity-0'" class="transition duration-200 ease-in-out overflow-hidden min-w-[200px] min-h-[200px] absolute right-0 -scale-x-100 top-0 origin-center z-[-1] rounded-2xl">
                <DecorlationRstriped current-color="text-secondary-red-100" class="origin-center h-full w-auto rotate-180 mix-blend-difference absolute right-0 top-0 translate-x-0 z-0" />
              </div>
              <nuxt-img
                loading="lazy" width="250" height="200" :alt="rt(item.title)"
                :class="props.darkActive ? 'w-[200px] mx-auto' : 'rounded-tl-lg rounded-tr-lg w-full h-full object-cover max-h-[200px]'"
                :src="myCld.image(rt(item.image)).delivery(quality(80)).toURL()"
              />
            </div>
            <div class="py-custom-md px-custom-md relative" :class="props.darkActive ? 'sm:h-[235px]' : ''">
              <div class="min-h-[240px]">
                <!-- Card Content - Light -->
                <div v-if="!props.darkActive" class="mb-1">
                  <span class="text-secondary-red-100 text-sm font-bold uppercase">year 2022</span>
                </div>
                <h3 v-if="!props.darkActive" class="line-clamp-3 font-semibold text-md leading-6 mb-custom-sm" :class="activeIndex === index && props.darkActive ? 'text-lg text-white' : 'text-lg'">
                  {{ rt(item.title) }}
                </h3>
                <!-- eslint-disable -->
                <div v-for="(detail, index) in item.content" v-if="item.content && !props.darkActive" :key="detail">
                  <p
                    v-for="(subtitle, index) in detail.content.slice(0, 1)" v-if="detail.content && index === 0" :key="subtitle"
                    class="line-clamp-3 mb-custom-lg text-md"
                  >
                    <span v-if="subtitle.text">{{ rt(subtitle.text) }}</span>
                  </p>
                </div>

                <!-- Card Content - Dark -->
                <div v-if="props.darkActive">
                  <h3 class="line-clamp-2 font-bold text-lg mb-custom-sm leading-[1.35]" :class="activeIndex === index && props.darkActive ? 'text-lg text-white' : 'text-lg'">
                    {{ item.title }}
                  </h3>
                  <p class="mb-custom-lg text-[0.9rem] pb-0" :class="[{ 'text-white': activeIndex === index && props.darkActive }]">
                    {{ item.subtitle }}
                  </p>
                </div>
              </div>

              <!-- <UIButton
                class="rounded-full"
                size="lg"
                :theme="activeIndex === index ? '' : 'outline'"
                :class="activeIndex === index ? ' lg:absolute inset-x-0 bottom-0 lg:mt-0 mt-custom-lg lg:translate-y-[50%] max-w-[185px] max-h-[55px] mx-auto' : 'sm:absolute translate-y-[50%] sm:bottom-0'"
              >
                  {{ t(item.btn) }}
              </UIButton> -->

              <!-- Card Button - Light -->
              <div v-if="!props.darkActive" class="max-h-[20px] max-w-[120px] flex items-center sm:absolute bottom-0 sm:pb-custom-lg">
                <div class="text-md font-semibold" :class="activeIndex === index ? 'text-md group-hover/card:text-secondary-red-100 transition-colors hover:ring-[0]' : 'hover:ring-[0] text-md text-primary transition-colors'">
                  {{ t('button.explore') }}
                </div>
              </div>

              <!-- Card Button - Dark -->
              <div class="max-h-[20px] flex items-center justify-center absolute inset-x-0 bottom-0 translate-y-[50%]">
                <div 
                v-if="props.darkActive"
                :class="activeIndex === index ? 'text-white bg-red-gradient transition-[shadow, transform] duration-200 border border-secondary-red-100 translate-y-[0]' : 'translate-y-[-10px] border border-secondary-red-100 text-secondary-red-100 transition-[shadow, transform] duration-200 bg-white'"
                class="text-md px-5 py-3 hover:ring-4 hover:ring-secondary-red-100/25 rounded-full text-primary whitespace-nowrap font-semibold">
                  {{ t(item.btn.name) }}
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </SwiperSlide>
      <div class="flex justify-center items-center container">
        <div :class="props.darkActive ? '2xl:hidden flex' : ''" class="flex flex-row items-center justify-center">
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform translate-x-5 opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-5 opacity-0"
          >
            <div
              v-if="!swiperBegin"
              class="absolute z-50 inset-y-0 left-[-5px] my-auto cursor-pointer flex items-center justify-center p-4 bg-secondary-gray-400 w-[40px] h-[40px] rounded-full ring-4 ring-secondary-gray-100/25 hover:scale-110 transition duration-200 ease-out"
              @click="slidePrev"
            >
              <div>
                <svg class="text-primary m-auto" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
                  />
                </svg>
              </div>
            </div>
          </transition>
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform -translate-x-5 opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform -translate-x-5 opacity-0"
          >
            <div
              v-if="!swiperEnd"
              class="absolute z-50 inset-y-0 right-[-5px] my-auto cursor-pointer flex items-center justify-center p-4 bg-secondary-red-100 w-[40px] h-[40px] rounded-full ring-4 ring-secondary-red-100/25 hover:scale-110 transition duration-200 ease-out"
              @click="slideNext"
            >
              <div>
                <svg class="text-white" width="20" height="20" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
                  />
                </svg>
              </div>
            </div>
          </transition>
        </div>
        <!-- <div class="card-swiper-pagination gap-x-1 mt-custom-xl" /> -->
      </div>
    </swiper>
  </div>
</template>

<style>
.my-swiper .my-swiper-grid .swiper-wrapper {
  grid-template-columns: 100%;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  row-gap: 45px;
}

.my-swiper .swiper {
    max-width: 100%;
    width: 100% !important;
    padding: 0px;
    overflow: unset !important;
}

.my-swiper .swiper-slide {
  display:flex;
  align-items: center;
  justify-content:center;
  transition: all .2s ease-in-out;
  transform-origin: center;
}

.my-swiper .slide-transparent .wiper-slide {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

.my-swiper .swiper-slide {
  transform: scale(0.925);
}

.my-swiper .swiper-slide.swiper-slide-active{
  transform: scale(1);
}

.my-swiper .swiper-wrapper {
    transition-timing-function: ease-in !important;
}

.my-swiper .swiper-creative .swiper-slide {
  overflow: unset !important;
}

.my-swiper-wrapper .card-swiper-pagination .card-swiper-pagination-bullet {
    width: 10px !important;
    height: 10px !important;
    border-radius: 50%;
    cursor: pointer;
}

.my-swiper .swiper .swiper-wrapper {
    align-items: center !important;
}

.my-swiper-wrapper .my-swiper-slide {
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>
