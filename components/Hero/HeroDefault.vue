<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
const props = defineProps({ careerActive: Boolean, bgPosition: String, template: String, lightMode: Boolean, content: Object, heroClass: String, modelActive: Boolean, models: Array, labelId: String, triangleActive: Boolean })
const emits = defineEmits(['action'])
const { myCld } = cloudinary()
const image = ref(myCld.image(props.content.url).delivery(quality(80)).toURL())
const handleClick = (e) => {
  e.preventDefault()
}
</script>

<template>
  <div class="w-full" :class="triangleActive ? 'lg:!overflow-visible' : ''" @contextmenu.prevent="handleClick">
    <div class="lg:py-0 sm:pt-24 pt-20" :class="careerActive ? '' : 'xs:pb-[120px] pb-[80px]'">
      <div class="lg:min-h-[700px] container lg:flex lg:items-center h-full relative lg:z-0 z-10">
        <div class="flex lg:flex-row flex-col lg:items-center">
          <div :class="heroClass" class="xl:max-w-3xl lg:max-w-xl max-w-full lg:mr-8 lg:mb-0">
            <div
              :class="template === 'sustainability' ? 'text-green-500' : 'text-secondary-red-100'"
              class="uppercase lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 flex items-center font-semibold"
            >
              <span
                :class="template === 'sustainability' ? 'bg-green-500' : 'bg-secondary-red-100'"
                class="lg:w-10 md:w-8 w-6 h-[2px] mr-4"
              />
              {{ $t(content.header) }}
            </div>
            <h1
              :class="lightMode ? 'text-primary xl:text-6xl lg:text-[4rem] xl:leading-[1.2] lg:leading-[1.2]' : 'text-white'"
              class="line-clamp-4 lg:text-[3.5rem] md:text-5xl xs:text-4xl text-2xl font-bold uppercase lg:leading-[1.2] md:leading-[1.2] leading-[1.2]"
            >
              {{ content.title }}
              <div v-if="content.title_bottom" class="text-green-500">
                {{ content.title_bottom }}
              </div>
            </h1>
            <p
              :class="[modelActive ? 'lg:w-full md:w-1/2' : '', lightMode ? 'text-primary' : 'text-white']"
              class="line-clamp-5 md:text-xl sm:text-xl text-lg font-normal lg:mt-6 mt-4 md:leading-[1.8] sm:leading-[1.7] leading-[1.6]"
            >
              {{ content.subtitle }}
            </p>
            <div v-if="content.path" class="lg:mt-6 mt-4">
              <NuxtLink
                :to="localePath({
                  path: content.path,
                })"
              >
                <UIButton size="xl" class="rounded-full">
                  <template #default>
                    {{ $t(content.btn) }}
                  </template>
                </UIButton>
              </NuxtLink>
            </div>
            <div v-if="!content.path && content.btn" class="lg:mt-6 mt-4">
              <UIButton :ring="template === 'sustainability' ? 'green' : ''" :theme="template === 'sustainability' ? 'green' : ''" size="xl" class="rounded-full" @on-click="emits('action')">
                <template #default>
                  {{ $t(content.btn) }}
                </template>
              </UIButton>
            </div>
            <div v-if="careerActive">
              <slot name="JobSearch" />
            </div>
          </div>
        </div>
      </div>
      <UIHexagon v-if="triangleActive && lightMode" custom-class="absolute bottom-0 left-0 z-[-1] translate-y-[50%] 2xl:translate-x-[15%] translate-x-[-30%]" size="w-[340px] h-[340px]" />
      <div v-if="modelActive" class="absolute lg:right-0 right-[-5%] inset-y-0 lg:w-[45%] w-2/3 sm:flex items-center h-full py-16 z-10">
        <div id="parent" class="h-full w-full relative pointer-events-auto">
          <Suspense>
            <Scene
              :label-id="labelId"
              :scale="1"
              :pos-y="0"
              :ro-y="0"
              :models="models"
              :model-label="true"
              class="md:flex hidden items-center justify-center w-full h-full lg:z-10 z-0 xl:pl-0 lg:pl-custom-xl "
            />
          </Suspense>
          <!-- <div id="css" class="absolute w-full h-full top-0 left-0" /> -->
          <div :id="labelId" class="h-full w-full inset-0 absolute md:flex hidden pointer-events-auto" />
        </div>
      </div>
      <div v-if="triangleActive" class="absolute right-0 inset-y-0 z-[-1] lg:min-h-[700px] w-full lg:flex hidden">
        <div
          :class="lightMode ? 'xl:items-end lg:items-center' : 'items-end'"
          class="h-full w-full flex"
        >
          <div
            class="2xl:h-[600px] xl:h-[550px] lg:h-[475px] w-full mask z-20 ml-auto relative translate-y-[10%]" :style="{
              backgroundImage: `url(${image})`,
              backgroundPosition: lightMode ? 'right' : '50% 93%',
              backgroundSize: lightMode ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
            }"
          />
          <svg
            :class="lightMode ? 'translate-y-0  right-0' : 'bottom-0 right-0'"
            class="w-auto scale-[112.5%] 2xl:h-[600px] xl:h-[550px] lg:h-[475px] z-[-0] absolute translate-y-[10%]" xmlns="http://www.w3.org/2000/svg" width="536.1" height="447.7" viewBox="0 0 536.1 447.7"
          >
            <path id="industries-stroke-1" d="m150.4,447.4c-17.8,0-34.3-9.5-43.2-24.9L7,248.8c-8.9-15.4-8.9-34.4,0-49.9L107.2,25.2C116.2,9.8,132.6.3,150.4.3h385.4v447.1H150.4Z" fill="none" stroke="#ee2334" stroke-miterlimit="10" stroke-width=".6" />
            <path id="industries-stroke-2" d="m150.4,444c-16.6,0-31.9-8.9-40.3-23.3L9.9,247.1c-8.3-14.4-8.3-32.1,0-46.5L110.1,26.9c8.3-14.4,23.7-23.2,40.3-23.3h382v440.4H150.4Z" fill="none" stroke="#ee2334" stroke-miterlimit="10" stroke-width="1.2" />
            <path id="industries-stroke-3" d="m150.4,439.5c-15,0-28.9-8-36.4-21L13.8,244.9c-7.5-13-7.5-29,0-42L114,29.2c7.5-13,21.4-21,36.4-21h377.5v431.4H150.4Z" fill="none" stroke="#ee2334" stroke-miterlimit="10" stroke-width="1.8" />
            <path id="industries-stroke-4" d="m150.4,433.9c-13,0-25-7-31.5-18.2L18.6,242.1c-6.5-11.3-6.5-25.1,0-36.4L118.9,32c6.5-11.3,18.5-18.2,31.5-18.2h371.9v420.2H150.4Z" fill="none" stroke="#ee2334" stroke-miterlimit="10" stroke-width="2.4" />
          </svg>
        </div>
      </div>
      <HeroImage v-if="!lightMode" :item="content.url" />
      <div v-if="lightMode" class="bg-white absolute inset-0 w-full h-full z-[-11] lg:pb-0 md:pb-[18rem] sm:pb-[16rem] xs:pb-[10rem] pb-[8rem]" />
    </div>
  </div>
</template>

<style scoped>
#industries-stroke-1 {
  stroke-linecap: round;
  stroke-dasharray: 166, 2000;
  stroke-dashoffset: -163;
  /* animation: dash1 5s linear infinite; */
}

#industries-stroke-2 {
  stroke-linecap: round;
  stroke-dasharray: 162, 2000;
  stroke-dashoffset: -160;
  /* animation: dash2 5s linear infinite; */
}

#industries-stroke-3 {
  stroke-linecap: round;
  stroke-dasharray: 157, 2000;
  stroke-dashoffset: -155;
  /* animation: dash3 5s linear infinite; */
}

#industries-stroke-4 {
  stroke-linecap: round;
  stroke-dasharray: 150, 2000;
  stroke-dashoffset: -150;
  /* animation: dash4 5s linear infinite; */
}

@keyframes dash1{
  0% {
    stroke-dashoffset: 2000;
  }
  100% {
    stroke-dashoffset: -163;
  }
}
@keyframes dash2{
  0% {
    stroke-dashoffset: 2000;
  }
  100% {
    stroke-dashoffset: -160;
  }
}
@keyframes dash3{
  0% {
    stroke-dashoffset: 2000;
  }
  100% {
    stroke-dashoffset: -155;
  }
}
@keyframes dash4{
  0% {
    stroke-dashoffset: 2000;
  }
  100% {
    stroke-dashoffset: -150;
  }
}
.mask {
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: right;
  mask-image: url('/svg/triangle_left.svg');
}
</style>
