<script setup>
import { vElementSize } from '@vueuse/components'
defineProps({
  content: Object,
  imageCss: String,
  textCss: String,
  customClass: String,
  customColor: String,
})

const { rt, tm, t } = useI18n()

const getWidth = ref(0)
const getHeight = ref(0)

function onResize({ width, height }) {
  getWidth.value = width
  getHeight.value = height
}
</script>

<template>
  <div id="dexon-services" class="lg:pb-desktop pb-mobile">
    <div
      :style="{
        minWidth: `${getWidth}px`,
        minHeight: `${getHeight}px`,
      }"
      class="relative flex items-center"
    >
      <div class="container">
        <div class="flex lg:flex-row flex-col-reverse items-center gap-y-custom-lg">
          <div :class="imageCss ? imageCss : 'left-0'" class="lg:absolute inset-y-0 lg:w-[45%] flex items-center lg:mb-0 ">
            <Picture
              v-element-size="onResize"
              :alt-text="content.title"
              class="object-cover z-0" :url="content.url"
              :custom-class="customClass ? customClass : 'sm:rounded-2xl rounded-lg  lg:rounded-bl-[0] lg:rounded-tl-[0]'"
            />
          </div>
          <div :class="textCss ? textCss : 'lg:ml-auto'" class="lg:w-[50%] w-full">
            <div
              v-if="content.heading"
              class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
            >
              {{ content.heading }}
            </div>
            <h2 v-if="content.title" class="xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-md" :class="customColor">
              {{ content.title }}
            </h2>
            <p v-if="content.subtitle" class="text-xl leading-[1.6] mb-custom-md" :class="customColor">
              {{ content.subtitle }}
            </p>
            <p v-for="item in content.subtitleArray" v-else-if="content.subtitleArray" :key="item" class="text-xl leading-[1.6] mb-custom-md" :class="customColor">
              {{ rt(item.text) }}
            </p>
            <ul v-if="content.sublist">
              <li v-for="sublist in content.sublist" :key="sublist" class=" text-xl leading-[1.6] [&:not(:last-child)]:mb-3 list-disc">
                <div class="flex items-center">
                  <span>{{ rt(sublist.text) }}</span>
                </div>
              </li>
            </ul>
            <NuxtLink
              :to="localePath({
                path: content.path,
              })"
            >
              <UIButton v-if="content.btn" class="rounded-full" size="xl">
                <template #default>
                  {{ t(content.btn) }}
                </template>
              </UIButton>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
