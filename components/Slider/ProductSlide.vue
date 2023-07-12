<i18n locale="en" src="@/lang/en/pipeline-services/index.json"></i18n>

<i18n locale="th" src="@/lang/th/pipeline-services/index.json"></i18n>

<script setup>
const { rt, tm, t } = useI18n()
const product = reactive([
  {
    title: t('body.content2.product_list[0].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[0].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/UT_Furnace_bmrgcf.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[0].url'),
    },
  },
  {
    title: t('body.content2.product_list[1].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[1].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/UT_R_rrifwz.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[1].url'),
    },
  },
  {
    title: t('body.content2.product_list[2].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[2].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/UT_MC_hmqkvk.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[2].url'),
    },
  },
  {
    title: t('body.content2.product_list[3].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[3].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/UT_MC_Octopus_gpzbcn.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[3].url'),
    },
  },
  {
    title: t('body.content2.product_list[4].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[4].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/UTC_MC_Hawk_ekn4bb.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[4].url'),
    },
  },
  {
    title: t('body.content2.product_list[5].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[5].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/Caliper_zlgvuu.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[5].url'),
    },
  },
  {
    title: t('body.content2.product_list[6].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[6].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/MFL_jewmk0.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[6].url'),
    },
  },
  {
    title: t('body.content2.product_list[7].name'),
    subtitle: `${t('body.content2.offer1')} ${t('body.content2.product_list[7].name')} ${t('body.content2.offer2')}`,
    image: '/dexon/assets/product/Wellhead_tn0lwf.webp',
    btn: {
      name: 'button.view_service',
      path: t('body.content2.product_list[7].url'),
    },
  },
])
</script>

<template>
  <div class="container">
    <div
      class="capitalize lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1 text-center"
    >
      Services Overview
    </div>
    <h2 class="lg:max-w-4xl md:max-w-2xl sm:max-w-xl xl:text-5xl md:text-4xl text-3xl font-bold mx-auto mb-custom-lg text-center">
      {{ t('body.content1.title') }}
    </h2>
    <SliderNewsCarousel
      :grid-option="{
        rows: 2,
      }"
      slide-class="slide-transparent"
      :freemode="true"
      :content="product"
      :event="false"
      :slides-per-view="4"
      :breakpoints-option="{
        0: {
          centeredSlides: false,
          slidesPerView: 1,
        },
        478: {
          centeredSlides: false,
          slidesPerView: 1,
        },
        768: {
          centeredSlides: false,
          slidesPerView: 2,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 3,
        },
        1280: {
          centeredSlides: false,
          slidesPerView: 3,
        },
        1366: {
          centeredSlides: false,
          slidesPerView: 4,
        },
        2560: {
          centeredSlides: false,
          slidesPerView: 4,
        },
      }"
      :space-between="10"
      :dark-active="true"
    />
  </div>
</template>
