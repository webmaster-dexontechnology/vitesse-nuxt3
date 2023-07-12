<script setup>
const props = defineProps({
  cardDetail: Object,
  activeBtn: Boolean,
  videoUrl: String,
  btnColor: {
    type: String,
    default: 'green-500',
  },
})
defineEmits(['action'])
const { myCld } = cloudinary()
const target = ref(null)
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target)
const glow = ref(null)
const centerX = ref('')
const centerY = ref('')
function cardEffect() {
  const leftX = elementX.value - glow.value?.getBoundingClientRect().x
  const topY = elementY.value - glow.value?.getBoundingClientRect().y
  const center = [
    leftX - glow.value?.getBoundingClientRect().width / 2,
    topY - glow.value?.getBoundingClientRect().height / 2,
  ]

  centerX.value = (center[0] * 2 + glow.value?.getBoundingClientRect().width / 2).toFixed(2)
  centerY.value = (center[1] * 2 + glow.value?.getBoundingClientRect().height / 2).toFixed(2)

  return isOutside.value
    ? ''
    : `
    radial-gradient(
      circle at ${centerX.value / 40}px ${centerY.value * 3}px, rgba(223, 220, 246, 1) 25%, rgba(20, 10, 75, 0.3)
    )
  `
}

const cardTransform = computed (() => {
  const MAX_ROTAION = 8
  const rX = (
    MAX_ROTAION / 2
    - (elementY.value / elementHeight.value) * MAX_ROTAION
  ).toFixed(2)
  const rY = (
    (elementX.value / elementWidth.value) * MAX_ROTAION - MAX_ROTAION / 2
  ).toFixed(2)
  return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`
})
const handleClick = (e) => {
  e.preventDefault()
}
</script>

<template>
  <div
    class="
      lg:px-0 container lg:absolute lg:w-[450px] lg:h-[650px]
      cursor-pointer lg:-bottom-12 right-0 m-auto lg:mt-0 sm:-mt-14 -mt-12 xl:translate-x-4 lg:translate-x-5
    "
    @contextmenu.prevent="handleClick"
  >
    <div
      class="h-full sm:rounded-3xl rounded-2xl group/card relative"
    >
      <div
        ref="target"
        :style="{
          perspective: '1000px',
          transform: cardTransform,
        }"
        class="h-full w-full bg-primary transition-[transform,shadow] duration-300 ease-out ring-1 ring-white ring-opacity-10 shadow-custom-xl hover:shadow-custom-3xl  sm:rounded-3xl rounded-2xl"
        @click="$emit('action')"
      >
        <div
          v-if="props.cardDetail"
          class="flex sm:justify-normal justify-center sm:h-auto h-full absolute z-10 inset-x-0 bottom-0 items-center md:p-10 sm:p-8 p-4"
        >
          <div
            v-if="props.activeBtn"
            class="group-hover/card:scale-90 scale-100 transition duration-200 ease-out relative mr-3
              shadow-custom-xl rounded-full xl:w-[80px] xl:h-[80px] md:w-[70px] md:h-[70px] w-[60px] h-[60px] flex items-center
            "
            :class="btnColor ? `[&>*]:group-hover/card:bg-${btnColor} [&>*]:bg-${btnColor} bg-${btnColor}` : ''"
          >
            <div :class="btnColor ? `bg-${btnColor}` : ''" class="border-0 w-full h-full absolute -z-1 rounded-full m-auto inset-0 scale-100 animate-ping group-hover/card:animate-none group-hover/card:scale-125" />
            <svg class="text-white m-auto xl:w-10 md:w-8 xl:h-10 md:h-8 w-7 h-7 relative" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7l-11 7Z" /></svg>
          </div>
          <div
            class="block"
          >
            <div v-if="props.cardDetail.header" class="md:text-lg sm:text-md text-sm text-white/60 uppercase font-semibold lg:leading-[1] leading-[1.4]">
              {{ props.cardDetail.header }}
            </div>
            <div class="uppercase font-bold md:text-4xl sm:text-3xl text-lg mb-custom-sm">
              <p v-if="props.cardDetail.title_top" class="text-white lg:leading-[1.1] leading-[1.3]">
                {{ props.cardDetail.title_top }}
              </p>
              <p v-if="props.cardDetail.title_bottom" class="text-white leading-[1]">
                {{ props.cardDetail.title_bottom }}
              </p>
            </div>
          </div>
        </div>
        <div
          v-else
          class="flex sm:justify-normal justify-center sm:h-auto h-full absolute z-10 inset-x-0 bottom-0 items-center md:pl-10 sm:pl-6 md:py-10 py-6"
        >
          <div
            class="group-hover/card:scale-90 scale-100 transition duration-200 ease-out border-2 relative
          bg-secondary-red-100 shadow-custom-xl border-secondary-red-100 rounded-full xl:w-[80px] xl:h-[80px] md:w-[70px] md:h-[70px] w-[60px] h-[60px] flex items-center
          "
          >
            <div class="bg-secondary-red-100 border-0 w-full h-full absolute -z-1 rounded-full m-auto inset-0 scale-100 animate-ping group-hover/card:bg-secondary-red-100/25 group-hover/card:animate-none group-hover/card:scale-125" />
            <svg class="text-white m-auto xl:w-10 md:w-8 xl:h-10 md:h-8 w-7 h-7 relative" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M8 19V5l11 7l-11 7Z" /></svg>
          </div>
          <div
            class="sm:block hidden ml-6"
          >
            <div class="md:text-xl text-lg text-white/60 uppercase font-semibold leading-[1]">
              watch now
            </div>
            <div class="uppercase font-bold md:text-4xl text-3xl">
              <p class="text-white leading-[1.1]">
                company
              </p>
              <p class="text-white leading-[1]">
                video
              </p>
            </div>
          </div>
        </div>
        <div class="sm:rounded-3xl rounded-2xl bg-primary/80 absolute inset-0 z-5 w-full h-full mix-blend-screen" />
        <div class="sm:rounded-3xl rounded-2xl bg-gradient-to-r from-[#3922B2] from-50% to-primary opacity-20 mix-blend-overlay absolute inset-0 z-5 w-full h-full" />
        <div class="sm:rounded-3xl rounded-2xl bg-primary/30 absolute inset-0 z-3 w-full h-full mix-blend-color" />
        <div v-if="props.cardDetail" class="lg:h-full md:h-[425px] sm:h-[350px] xs:h-[225px] h-[175px]">
          <nuxt-img
            :src="myCld.image(props.cardDetail.imageUrl).toURL()"
            loading="lazy"
            class="object-cover w-full h-full overflow-hidden sm:rounded-3xl rounded-2xl
              transition-shadow duration-150 ease-out"
          />
        </div>
        <video
          v-else
          class="object-cover w-full h-full overflow-hidden sm:rounded-3xl rounded-2xl
        transition-shadow duration-150 ease-out" autoplay muted loop playsinline preload="metadata"
        >
          <source :src="myCld.video(`dexon/assets/video/company-video_ziklhr`).toURL()" type="video/mp4">
        </video>
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="transform opacity-0" enter-to-class="transform opacity-100"
          leave-active-class="transition duration-300 ease-out" leave-from-class="transform opacity-100"
          leave-to-class="transform opacity-0"
        >
          <div
            v-if="cardEffect() !== ''"
            ref="glow"
            class="glow sm:rounded-3xl rounded-2xl" :style="{
              backgroundImage: cardEffect(),
            }" @mousemove="cardEffect"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<style>
.glow {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  transition: all 0.3s ease-out;
  mix-blend-mode: soft-light;
  background-image: radial-gradient(circle at 50% -20%, #ffffff22, #0000000f);
}
</style>
