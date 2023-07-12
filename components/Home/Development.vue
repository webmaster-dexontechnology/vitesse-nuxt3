<script setup>
import { vElementSize } from '@vueuse/components'

defineProps({
  content: Object,
})

const getWidth = ref(0)
const getHeight = ref(0)

function onResize({ width, height }) {
  getWidth.value = width
  getHeight.value = height
}

const models = ref([
  {
    model: '/model/Dexon_Scorpion.glb',
  },
])
</script>

<template>
  <div id="dexon-services" class="lg:py-desktop py-mobile">
    <div
      :style="{
        minWidth: `${getWidth}px`,
        minHeight: `${getHeight}px`,
      }"
      class="relative flex items-center"
    >
      <div class="container">
        <div class="flex lg:flex-row flex-col lg:items-center">
          <div id="parent" v-element-size="onResize" class="3xl:relative lg:absolute left-0 inset-y-0 lg:w-[45%] w-full flex items-center lg:mb-0 mb-custom-xl xl:h-[600px] lg:h-[500px] md:h-[600px] sm:h-[400px] h-[300px]">
            <Suspense>
              <Scene
                :scale="1"
                :pos-y="0"
                :ro-y="0"
                :models="models"
                class="flex items-center justify-center w-full h-full"
              />
            </Suspense>
          </div>
          <div class="lg:w-[50%] w-full lg:ml-auto">
            <div
              class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
            >
              {{ content.heading }}
            </div>
            <h2 class="xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-lg">
              {{ content.title }}
            </h2>
            <p class="text-xl leading-[1.6] lg:mb-3 mb-2">
              {{ content.subtitle1 }}
            </p>
            <p class="text-xl leading-[1.6] font-semibold italic mb-custom-lg">
              {{ content.subtitle2 }}
            </p>
            <div class="flex flex-wrap gap-4 gap-y-2">
              <Button :button-text="`${$t(content.btn1.text)}`" :route-path="content.btn1.path" />
              <Button class="[&>a]:bg-white [&>a]:bg-none [&>a]:text-secondary-red-100 [&>a]:border [&>a]:border-secondary-red-100" icon="phone" :button-text="`${$t(content.btn2.text)}`" :href="content.btn2.phone" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* canvas {
  position: static !important;
  touch-action: unset !important;
} */
</style>
