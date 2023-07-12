<script setup>
import SwiperCore, {
  Autoplay,
  EffectCreative,
  Pagination,
} from 'swiper'
import {
  Swiper,
  SwiperSlide,
} from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-creative'
import { vElementSize } from '@vueuse/components'

defineProps({
  items: Array,
})
const getWidth = ref(0)
const getHeight = ref(0)
const { t, rt } = useI18n()

function onResize({ width, height }) {
  getWidth.value = width
  getHeight.value = height
}
SwiperCore.use([Pagination, Autoplay, EffectCreative])
const swiperRef = ref(null)
const pagination = ref({
  clickable: true,
  el: '.hero-swiper-pagination',
  renderBullet(index, className) {
    return `<span class="${className}"></span>`
  },
})

const onSwiper = (swiper) => {
  swiperRef.value = swiper
  swiperRef.value.updateSlides()
  // swiperRef.value.updateSlides()
}

const slidePrev = () => {
  swiperRef.value.slidePrev()
}

const slideNext = () => {
  swiperRef.value.slideNext()
}

const onSlideChange = () => {
  // console.log(swiperRef.value)
}

const handleClick = (e) => {
  e.preventDefault()
}

const handleRouter = (url, href) => {
  if (url)
    router.push(url)

  else if (href)
    window.open(href, '_blank')
  else
    return ''
}
</script>

<template>
  <Swiper
    ref="swiperRef"
    v-element-size="onResize"
    effect="creative"
    class="hero-carousel w-full"
    :resize-re-init="true"
    :slides-per-view="1"
    :space-between="0"
    :navigation="false"
    :pagination="pagination"
    :scrollbar="false"
    :grab-cursor="false"
    :loop="true"
    :observer="false"
    :speed="600"
    :parallax="true"
    :modules="[EffectCreative]"
    :autoplay="{
      disableOnInteraction: true,
      delay: 5000,
    }"
    :creative-effect="{
      limitProgress: 10,
      prev: {
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    @swiper="onSwiper"
    @slide-change="onSlideChange"
  >
    <SwiperSlide v-for="item in items" :key="item" class="flex lg:items-center lg:pt-0 lg:pb-0 sm:pt-24 pt-20 xs:pb-[100px] pb-[60px]">
      <div class="lg:min-h-[700px] container lg:flex lg:items-center h-full relative z-10">
        <div class="flex lg:flex-row flex-col lg:-mt-10">
          <div class="xl:max-w-3xl lg:max-w-xl max-w-full lg:mr-8 lg:mb-0 flex flex-col justify-center">
            <div
              v-if="item.header"
              class="uppercase lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 flex items-center font-semibold text-secondary-red-100"
            >
              <span class="lg:w-10 md:w-8 w-6 h-[2px] bg-secondary-red-100 mr-4" />
              {{ rt(item.header) }}
            </div>
            <h1
              class="line-clamp-2 xl:text-6xl md:text-5xl xs:text-4xl text-3xl font-bold uppercase text-white !leading-[1.1]"
            >
              {{ rt(item.title) }}
            </h1>
            <div class="my-5">
              <!-- eslint-disable -->
              <p
                v-for="description in item.description"
                v-if="item.description"
                :key="description" class="md:text-xl sm:text-xl text-lg font-normal text-white first:pb-3 !leading-8 line-clamp-4"
              >
                {{ rt(description) }}
              </p>
            </div>
            <div class="flex flex-wrap sm:justify-start justify-center gap-4 lg:absolute bottom-[15%] left-[22.5%] lg:opacity-50 opacity-80 z-[-1] lg:mb-0 lg:mt-0 mt-4 mb-5">
              <div class="w-[120px] h-[120px] text-white text-center p-2 rounded-md border border-white flex items-center justify-center flex-col" v-if="item.icon" v-for="(icon, index) in item.icon" :key="icon">
                <svg v-if="index === 0" class="mx-auto text-white w-9 h-9" xmlns="http://www.w3.org/2000/svg" width="41.9" height="41" viewBox="0 0 41.9 41"><path d="m32.9,2.4c-.2.4-.6.6-1.1.6s-.8-.2-1-.6h2.1Z" fill="currentColor" /><path d="m35.1,2.4c-.2.3-.6.6-1,.6s-.8-.2-1-.6h2Z" fill="currentColor" /><path d="m37.3,2.4c-.2.3-.6.5-1,.5s-.7-.2-1-.5h1.9Z" fill="currentColor" /><path d="m29.5,12.2c-.2,0-.3,0-.5,0,.2.1.4.3.5.5.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.6.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.2-1.1,1.2-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.5-.6.8-1.2.8s-.3,0-.5,0c.2.1.4.3.5.6.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.4.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.6.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.4-.6.8-1.2.8s-.3,0-.5,0c.2.1.4.3.5.6.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.5.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.4-.6.8-1.2.8s-.3,0-.5,0c.2.1.4.3.5.5.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.6.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.4-.6.7-1.2.7s-.3,0-.5,0c.2.1.4.3.5.5.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.5.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2,1c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.4-.6.8-1.2.8s-.3,0-.5,0c.2.1.4.3.5.6.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6,1-1.2,1s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.5.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1,0,.2,0,.3h-2.2s0,0,0,0c0,0,0,0,0,0H3.1V2.4h27.5c-.2.4-.6.7-1.1.7s-.3,0-.5,0c.2.1.4.3.5.6.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.4.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.6.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.4-.6.8-1.2.8s-.3,0-.5,0c.2.1.4.3.5.5.2-.4.6-.7,1.1-.7s1,.4,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6.9-1.2.9s-1-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c0,.2-.3.4-.5.5.1,0,.3,0,.5,0,.5,0,1,.3,1.2.8.2-.4.6-.7,1.1-.7s1,.3,1.2.8c.2-.5.6-.8,1.1-.8s1,.4,1.2.9c.1-.5.6-.9,1.1-.9s1.1.5,1.1,1.1-.5,1.1-1.1,1.1-1-.4-1.1-.9c-.1.5-.6,1-1.2,1s-.9-.3-1.1-.8c-.2.5-.6.8-1.2.8s-.9-.3-1.1-.7c-.2.4-.6.8-1.2.8Z" fill="currentColor" /><path d="m39.1,37.2v1.2h-1.6c0,0,0-.2,0-.3,0-.6.5-1.1,1.1-1.1s.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,35.1v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="35.9" r="1.1" fill="currentColor" /><path d="m39.1,32.7v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,30.5v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="31.4" r="1.1" fill="currentColor" /><path d="m39.1,28.1v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,26v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="26.8" r="1.1" fill="currentColor" /><path d="m39.1,23.6v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,21.4v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="22.3" r="1.1" fill="currentColor" /><path d="m39.1,19v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,16.9v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.9Z" fill="currentColor" /><circle cx="37.5" cy="17.7" r="1.1" fill="currentColor" /><path d="m39.1,14.5v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,12.3v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="13.2" r="1.1" fill="currentColor" /><path d="m39.1,10v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,7.8v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="8.6" r="1.1" fill="currentColor" /><path d="m39.1,5.4v1.9c-.1,0-.3.1-.5.1-.6,0-1.1-.5-1.1-1.1s.5-1.1,1.1-1.1.4,0,.5.1Z" fill="currentColor" /><path d="m39.1,3.2v1.7c-.3-.2-.4-.5-.4-.8s.2-.7.4-.8Z" fill="currentColor" /><circle cx="37.5" cy="4.1" r="1.1" fill="currentColor" /><path d="m39.1,2.4v.3c-.1,0-.3.1-.5.1-.4,0-.7-.2-.9-.5h1.4Z" fill="currentColor" /><rect width="4.7" height="4.7" fill="currentColor" /><rect x="37.2" width="4.7" height="4.7" fill="currentColor" /><rect y="36.2" width="4.7" height="4.7" fill="currentColor" /><rect x="37.2" y="36.2" width="4.7" height="4.7" fill="currentColor" /><path d="m40.1,39.5H2.1V1.5h38v38Zm-37-1h36V2.5H3.1v36Z" fill="currentColor" /></svg>
                <svg v-else-if="index === 1" class="mx-auto text-white w-10 h-10"  xmlns="http://www.w3.org/2000/svg" width="46.4" height="48.2" viewBox="0 0 46.4 48.2"><path d="m13.1,3.1c-.2-1-.4-2-.6-3.1,4.2,1,8.3,2.1,12.5,3.3-3.6,2.7-7,5.4-10.3,8.3-.2-1-.4-2-.5-3-.3.2-.6.3-.8.4-3.1,2-5.4,4.6-7,7.8-.9,1.9-1.5,3.8-1.8,5.9-.5,3.8,0,7.4,1.6,10.9,1.1,2.3,2.5,4.4,4.4,6.2,1.3,1.2,2.7,2.2,4.2,3,2.6,1.5,5.4,2.3,8.4,2.5,2.3.2,4.6,0,6.8-.8,2.9-.9,5.6-2.2,7.9-4.2,3.1-2.7,5.2-6.1,6.3-10.1.7-2.3.9-4.7.7-7.1-.3-4.7-2-8.9-5-12.4-2.5-3-5.7-5.1-9.4-6.3-1-.3-2-.6-3-.9.4,0,.8.2,1.3.2,3.8.8,7.2,2.4,10.2,5,2.9,2.5,4.9,5.6,6.2,9.2.7,1.8,1.1,3.7,1.2,5.6.3,4-.4,7.9-2,11.5-1.2,2.5-2.7,4.8-4.7,6.7-1.6,1.5-3.4,2.8-5.3,3.9-2.3,1.3-4.9,1.9-7.5,2.3-1.1.2-2.1.3-3.2.3-3.1,0-6-.6-8.9-1.8-2.6-1-4.9-2.5-7-4.4-2.9-2.7-5.1-6-6.4-9.7-.7-2-1.1-4-1.2-6.1-.3-4.1.4-8,2.2-11.8,2.3-4.9,5.8-8.6,10.6-11.2,0,0,.2,0,.3-.2Z" fill="currentColor" /><path d="m14.1,31.2h5.8c-.3.8-.5,1.7-.8,2.5,0,.3-.2.6-.3.9,0,.2-.1.3-.3.3-3.6,0-7.1,0-10.7,0,0,0,0,0-.2,0,0-.2.1-.5.2-.7.2-.7.5-1.4.6-2.2.1-.5.4-.8.7-1.1,1.6-1.6,3.1-3.3,4.7-4.9,1.4-1.4,2.7-2.9,4-4.3.6-.6,1.1-1.4,1.4-2.2.1-.3.1-.6.2-.8,0-.5-.3-.8-.8-.8-.5,0-1,.3-1.3.7-.5.5-.7,1.2-.9,1.9,0,.3-.2.5-.2.8,0,.3-.2.3-.5.3-1.3,0-2.5,0-3.8,0h-.4c.6-2.3,1.5-4.4,3.3-6,1.3-1.1,2.9-1.6,4.6-1.7,1,0,2.1,0,3,.4,1.1.5,1.8,1.5,1.9,2.8,0,2.1-.8,3.9-2,5.4-1,1.2-2.1,2.3-3.2,3.5-1.6,1.7-3.3,3.4-4.9,5,0,0,0,0-.1.2Z" fill="currentColor" /><path d="m37.7,14.3c-1.3,4.3-2.6,8.5-3.9,12.8h1.9c-.3,1-.6,2.1-.9,3.1,0,0-.2.1-.3.1-.4,0-.9,0-1.3,0-.2,0-.3,0-.4.3-.4,1.3-.8,2.7-1.2,4,0,.1-.2.3-.2.3-1.3,0-2.6,0-4,0,.5-1.5.9-3,1.4-4.5h-6.4c.2-.6.4-1.2.5-1.8.2-1.2,1-2.1,1.7-3.1,2.6-3.7,5.3-7.3,7.9-11,0,0,.2-.2.3-.2,1.6,0,3.2,0,4.8,0,0,0,0,0,.1,0Zm-5.5,4.6s0,0,0,0c-1.8,2.7-3.7,5.5-5.5,8.2,1,0,2,0,2.9,0,0,0,.2-.1.3-.2.2-.6.4-1.2.6-1.8.6-2,1.2-4.1,1.9-6.1Z" fill="currentColor" /><path d="m37.9,34.9c.2-.7.4-1.4.6-2.1.3-1.1.7-2.1,1-3.2,0-.2.2-.4,0-.6-.2-.1-.7.1-.8.4-.2.7-.4,1.4-.7,2.1-.3,1.1-.6,2.1-1,3.2,0,0-.1.2-.2.2-.7,0-1.4,0-2.2,0,.2-.6.3-1.1.5-1.6.8-2.8,1.7-5.6,2.5-8.4,0-.2.2-.3.4-.3.7,0,1.3,0,2,0-.4,1.2-.7,2.3-1.1,3.5.3-.1.4-.3.7-.3.5-.1.9-.3,1.4-.3.5,0,1,.4.9.9,0,.5-.1.9-.3,1.4-.5,1.6-1,3.3-1.5,4.9,0,.2-.1.3-.4.3-.7,0-1.3,0-2,0Z" fill="currentColor" /></svg>
                <svg v-else-if="index === 2" class="mx-auto text-white w-10 h-10" xmlns="http://www.w3.org/2000/svg" width="48" height="53" viewBox="0 0 48 53"><path d="m25.3,0c-.2.9-.4,1.6-.5,2.3,0,.5-.3.7-.9.8-1,0-1.9.2-2.9.4C3.2,6.7-5.7,26.6,3.9,41.7c5.2,8.1,12.9,12,22.5,11.2,9.1-.7,15.7-5.5,19.7-13.7.8-1.6,1.2-3.4,1.8-5.1h-.3c0,.2-.2.6-.3.9-2.8,8.5-8.5,14-17.2,15.8-8.6,1.8-16-.7-21.6-7.5C-1.9,30.9,4.6,12.3,20,8.8c1.1-.2,2.2-.3,3.4-.5-.1.8-.2,1.3-.4,2,3.4-1,6.6-2.1,10-3.1-2.5-2.3-4.8-4.4-7.1-6.5-.2-.2-.4-.3-.7-.6Zm-1.9,27.8c0-.8,0-1.6,0-2.3,0-.5,0-1,.2-1.4.2-.3.6-.7.9-.7.3,0,.7.4.9.7.2.3.2.7.2,1.1,0,2-.7,3.7-1.8,5.3-.9,1.3-1.9,2.5-2.9,3.8-1.1,1.5-1.8,3.2-1.9,5.1,0,.9.2,1.2,1.1,1.2,2.9,0,5.7,0,8.6,0,.3,0,.7,0,1,0v-3.9h-5.6c.3-.5.5-.9.7-1.2,1.1-1.5,2.3-3.1,3.4-4.6,1.3-1.9,1.9-4.1,1.7-6.4-.2-2.4-1.4-4.1-3.4-4.5-1.3-.3-2.8-.2-4.2,0-1.5.2-2.6,1.3-2.9,2.8-.3,1.5-.4,3.1-.5,4.6,0,.2.3.6.5.7,1.2,0,2.5,0,3.8,0Zm9.6-9.4v5.1h1c.8-.6-.6-2,1-2.1,1.9-.1.5,1.5,1.2,2.1h1v-5.1h-1.2c0,.6-.1,1.2-.2,1.8h-1.6c0-.7,0-1.3-.1-1.8h-1.2Zm-7.5-6.8c0,0,.1,0,.2-.1-.2-.3-.4-.7-.7-1-.1.4-.3.7-.4,1.1,0,.2,0,.5,0,.7,0,.2.3.3.4.5.1-.2.3-.3.4-.5,0-.2,0-.5,0-.7Zm0,34.5c0,0,.1,0,.2-.1-.2-.3-.5-.7-.7-1-.1.4-.3.7-.4,1.1,0,.2,0,.5,0,.7,0,.2.3.3.4.5.1-.2.3-.3.4-.5,0-.2,0-.5,0-.7Zm16.8-16.8s0,0,0,0c.1,0,.2,0,.3,0,.3-.1.5-.3.8-.4-.3-.1-.5-.3-.8-.4-.3,0-.6,0-.9,0-.2,0-.4.3-.5.4.2.1.3.3.5.3.2,0,.4,0,.6,0Zm-34.4,0c0,0,0,.1,0,.2l1-.6c-.3-.1-.7-.3-1-.4-.1,0-.3,0-.4,0-.3.1-.5.2-.8.4.3.1.5.3.8.4.1,0,.3,0,.4,0Z" fill="currentColor" /></svg>
                <div class="text-sm flex justify-center leading-6 mt-1 font-semibold">
                  <span>{{ rt(icon.title) }}</span><span class="text-[8px] translate-y-[-5px]" v-if="icon.text_small">{{ rt(icon.text_small) }}</span>
                </div>
                <div class="text-xs font-medium leading-[1.4]">
                  <span>{{ rt(icon.subtitle) }}</span>
                </div>
              </div>
            </div>
            <div>
              <UIButton size="xl" class="rounded-full mt-4" @click="handleRouter(rt(item.url))">
              <template #default>
                {{ t('button.learn') }}
              </template>
            </UIButton>
            </div>
          </div>
        </div>
      </div>
      <HeroImage :item="rt(item.url)" :height="getHeight" />
    </SwiperSlide>
    <div class="container lg:absolute lg:inset-x-0 relative z-50 bottom-[8%]">
      <div class="flex items-center min-h-[40px]">
        <div class="flex items-center">
          <div class="hero-swiper-pagination gap-x-3 mr-4" />
          <div
            class="cursor-pointer mr-3 flex items-center justify-center p-4 bg-secondary-gray-200 w-[40px] h-[40px] rounded-full ring-4 ring-secondary-gray-100/25 hover:scale-110 hover:ring-8 transition duration-200 ease-out"
            @click="slidePrev"
          >
            <div>
              <svg class="text-primary m-auto" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
                />
              </svg>
            </div>
          </div>
          <div
            class="cursor-pointer flex items-center justify-center p-4 bg-secondary-red-100 w-[40px] h-[40px] rounded-full ring-4 ring-secondary-red-100/25 hover:scale-110 hover:ring-8 transition duration-200 ease-out"
            @click="slideNext"
          >
            <div>
              <svg class="text-white" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Swiper>
</template>

<style>
  /* .swiper.hero-carousel {
    width: 100% !important;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 375px) {
    .swiper.hero-carousel {
      padding-bottom: 120px;
    }

    @media screen and (min-width: 1024px) {
      .swiper.hero-carousel {
        padding-bottom: 0;
      }
    }
  } */

  .hero-carousel .swiper-slide-active h1 {
    position: relative;
    animation-name: glitch-anim-text;
    animation-duration: var(--time-anim);
    animation-delay: var(--delay-anim);
    animation-timing-function: linear;
    animation-iteration-count: forward;
  }

  .hero-carousel .swiper-slide-active .bg-hero {
    -ms-animation: .4s blur linear forwards;
    -webkit-animation: .4s blur linear forwards;
    -moz-animation: .4s blur linear forwards;
    animation: .4s blur linear forwards;
    animation-delay: .2s;
    will-change: filter;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }

  @keyframes blur {
      0% {
        filter: blur(10px);
        -webkit-filter: blur(10px);
      }

      100% {
        filter: blur(0px);
        -webkit-filter: blur(0px);
      }
  }

  .hero-swiper-pagination {
    position: relative !important;
    width: auto !important;
    top: 0 !important;
    bottom: 0 !important;
    display: flex;
  }

  .hero-carousel .hero-swiper-pagination .swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    margin: 0 !important;
    border-radius: 50%;
  }

  .hero-carousel .swiper-slide {
    display: flex !important;
    overflow: unset !important;
  }

  @media only screen and (min-width: 1024px) {
    .hero-carousel .swiper-slide {
      align-items: center !important;
    }
  }
</style>
