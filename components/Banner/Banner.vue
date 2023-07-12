<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
const banner = reactive({
  title: 'Become our partner',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempore odit et dignissimos delectus, ipsam obcaecati praesentium ducimus harum sint reprehenderit aperiam facilis tenetur sed consequatur quasi maiores. Eligendi, voluptatibus.',
  url: '/dexon/home/hero/slide1_nw3gxr.webp',
})
const { myCld } = cloudinary()
const image = ref(myCld.image(banner.url).delivery(quality(80)).toURL())
</script>

<template>
  <div class="container">
    <BannerTemplate>
      <template #title>
        {{ banner.title }}
      </template>
      <template #subtitle>
        {{ banner.subtitle }}
      </template>
      <template #background>
        <nuxt-img loading="lazy" alt="cover banner" class="object-cover object-center h-full w-full z-[1] inset-0 absolute" :src="image" />
      </template>
    </BannerTemplate>
  </div>
</template>
