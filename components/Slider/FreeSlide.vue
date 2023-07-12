<script setup>
import SwiperCore, {
  Autoplay,
  FreeMode,
  Pagination,
} from 'swiper'
import {
  Swiper,
  SwiperSlide,
} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { quality } from '@cloudinary/url-gen/actions/delivery'
const props = defineProps({
  initialSlide: Number,
  freemode: {
    tyep: Boolean,
    default: false,
  },
  spaceBetween: Number,
  slidesPerView: Number || Object,
  content: Array,
  breakpointsOption: Object,
  customClass: String,
  theme: {
    type: String,
    default: 'bg-green-500 ring-green-200',
  },
})

const { myCld } = cloudinary()
SwiperCore.use([FreeMode, Pagination, Autoplay])
const swiperRef = ref(null)
const modules = ref([FreeMode])
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

const slidePrev = () => {
  swiperRef.value.slidePrev()
}

const slideNext = () => {
  swiperRef.value.slideNext()
}

const onSlideChange = () => {
  // console.log(swiperBegin.value, swiperEnd.value, swiperIndex.value)
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
  window.addEventListener('resize', onSwiper)
  window.addEventListener('resize', onReachBegin)
})
</script>

<template>
  <div class="freeslide-swiper">
    <div class="flex justify-start items-center container">
      <div class="flex flex-row items-center justify-center gap-4">
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
            class="cursor-pointer flex items-center justify-center p-4 bg-secondary-gray-400 w-[40px] h-[40px] rounded-full ring-4 ring-secondary-gray-200 hover:scale-110 transition-all duration-200 ease-out"
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
            :class="props.theme"
            class="cursor-pointer flex items-center justify-center p-4 w-[40px] h-[40px] rounded-full ring-4 hover:scale-110 transition-all duration-200 ease-out"
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
    <Swiper
      :class="customClass"
      :round-lengths="true"
      :grab-cursor="true"
      :space-between="props.spaceBetween"
      :slide-to-clicked-slide="true"
      :initial-slide="props.initialSlide"
      :centered-slides="false"
      :watch-slides-progress="true"
      :freemode="props.freemode"
      :slides-per-view="props.slidesPerView"
      :loop="true"
      :autoplay="{
        disableOnInteraction: false,
        delay: 2500,
      }"
      :speed="1000"
      :pagination="pagination"
      :navigation="false"
      :modules="modules"
      :breakpoints="props.breakpointsOption"
      :mousewheel="true"
      :keyboard-control="true"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
      @reach-end="onReachEnd"
      @reach-beginning="onReachBegin"
      @from-edge="onEdge"
    >
      <SwiperSlide
        v-for="(item, index) in props.content" :key="item"
        class="shadow-shadow-light/10 shadow-custom-xl"
        @mouseover="onHover(index)"
      >
        <a :href="myCld.image(item.url).delivery(quality(80)).toURL()" target="_blank">
          <Picture class="slide-image max-w-xl [&>img]:rounded-sm" :url="item.image" />
        </a>
      </SwiperSlide>
    </swiper>
  </div>
</template>

<style>
.freeslide-swiper .swiper {
    max-width: 100%;
    width: 100% !important;
    padding: 0px;
    overflow: unset !important;
}
</style>
