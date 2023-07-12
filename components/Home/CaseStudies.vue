<i18n locale="en" src="@/lang/en/case-studies/index.json"></i18n>

<i18n locale="th" src="@/lang/th/case-studies/index.json"></i18n>

<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
const activeIndex = ref(1)
const { t } = useI18n()
const content = ref({
  card: [
    {
      title: t('content[0].title'),
      subtitle2: [
        {
          text: t('content[0].subtitle[0].text'),
        },
        {
          text: t('content[0].subtitle[1].text'),
        },
        {
          text: t('content[0].subtitle[2].text'),
        },
      ],
      image: '/dexon/case-studies/case_studies_01_wvfjkz.webp',
    },
    {
      title: t('content[1].title'),
      subtitle2: [
        {
          text: t('content[1].subtitle[0].text'),
        },
        {
          text: t('content[1].subtitle[1].text'),
        },
      ],
      image: '/dexon/case-studies/case_studies_02_d9x2l3.webp',
    },
    {
      title: t('content[2].title'),
      subtitle2: [
        {
          text: t('content[2].subtitle[0].text'),
        },
        {
          text: t('content[2].subtitle[1].text'),
        },
        {
          text: t('content[2].subtitle[2].text'),
        },
      ],
      image: '/dexon/case-studies/case_studies_03_wqwqgx.webp',
    },
    {
      title: t('content[3].title'),
      subtitle2: [
        {
          text: t('content[3].subtitle[0].text'),
        },
        {
          text: t('content[3].subtitle[1].text'),
        },
        {
          text: t('content[3].subtitle[2].text'),
        },
      ],
      image: '/dexon/case-studies/case_studies_04_uahgma.webp',
    },
  ],
  btn: {
    text: 'button.explore',
    path: '',
  },
})
const { myCld } = cloudinary()
const onHover = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="xl:py-desktop py-mobile mt-custom-md">
    <div class="container">
      <div class="grid xl:grid-cols-4 sm:grid-cols-2 gap-x-custom-md sm:gap-y-custom-md gap-y-custom-xl">
        <div
          v-for="(item, index) in content.card" :key="item"
          :class="activeIndex === index ? 'shadow-shadow-light/10 h-full shadow-custom-xl scale-105' : 'scale-95'"
          class="transition-transform duration-200 ease-in-out shadow-custom-xl rounded-lg shadow-shadow-light/10 relative" @mouseover="onHover(index)"
        >
          <div class="z-20 bg-white rounded-lg cursor-pointer">
            <div class="w-full">
              <nuxt-img loading="lazy" width="250" height="200" :alt="item.title" class="rounded-tl-lg rounded-tr-lg w-full h-full object-cover max-h-[200px]" :src="myCld.image(item.image).delivery(quality(80)).toURL()" />
            </div>
            <div class="py-custom-lg px-custom-md relative">
              <div>
                <span class="text-secondary-red-100 text-sm font-semibold">SEP 2018</span>
              </div>
              <h3 class="font-bold text-lg mb-custom-sm leading-[1.35]">
                {{ item.title }}
              </h3>
              <p v-if="item.subtitle2?.length" class="mb-custom-lg leading-[1.6] line-clamp-3">
                {{ item.subtitle2[0].text }}
              </p>
              <p v-else class="mb-custom-lg leading-[1.6]">
                {{ item.subtitle }}
              </p>
              <ButtonHover
                :button-class="activeIndex === index ? 'text-md px-5 py-3 bg-red-gradient text-white transition-shadow duration-200 ease-in-out' : 'bg-white'"
                :button-text="`${$t(content.btn.text)}`" :route-path="content.btn.path"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
