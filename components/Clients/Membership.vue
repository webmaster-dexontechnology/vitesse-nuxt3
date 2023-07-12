<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
import { Resize } from '@cloudinary/url-gen/actions/resize'
const { myCld } = cloudinary()

const logos = ref([
  {
    url: '/dexon/assets/logo/iso_9001_sxbabr.webp',
  },
  {
    url: '/dexon/assets/logo/iso_14001_lpxjw3.webp',
  },
  {
    url: '/dexon/assets/logo/iso_45001_tva7mp.webp',
  },
  {
    url: '/dexon/assets/logo/partner_03_w5lp94.webp',
  },
  {
    url: '/dexon/assets/logo/gwo_certified_training_provider_2018_xn1yys.webp',
  },
  {
    url: '/dexon/assets/logo/partner_05_cznlhc.webp',
  },
  {
    url: '/dexon/assets/logo/irata_member_ije9uo.webp',
  },
  {
    url: '/dexon/assets/logo/partner_08_kcrtmq.webp',
  },
  {
    url: '/dexon/assets/logo/partner_09_die2qr.webp',
  },
  {
    url: '/dexon/assets/logo/partner_010_un22iz.webp',
  },
  {
    url: '/dexon/assets/logo/partner_011_cprmmw.webp',
  },
  {
    url: '/dexon/assets/logo/partner_012_tswxl8.webp',
  },
  {
    url: '/dexon/assets/logo/green_logo_iqpw9l.webp',
  },
  {
    url: '/dexon/assets/logo/partner_014_ibv5ii.webp',
  },
])
</script>

<template>
  <div
    class="pt-custom-sm grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 lg:gap-5 gap-6
      [&>*:nth-child(1)>img]:max-w-[90px]
      [&>*:nth-child(2)>img]:max-w-[90px]
      [&>*:nth-child(3)>img]:max-w-[90px]
      [&>*:nth-child(4)>img]:max-w-[90px]
      [&>*:nth-child(5)>img]:max-w-[90px]
      [&>*:nth-child(6)>img]:max-w-[45px]
      [&>*:nth-child(7)>img]:max-w-[100px]
      [&>*:nth-child(8)>img]:max-w-[55px]
      [&>*:nth-child(9)>img]:max-w-[45px]
      [&>*:nth-child(10)>img]:max-w-[80px]
      [&>*:nth-child(11)>img]:max-w-[70px]
      [&>*:nth-child(12)>img]:max-w-[90px]
      [&>*:nth-child(13)>img]:max-w-[115px]
      [&>*:nth-child(14)>img]:max-w-[55px]
      md:[&>*:nth-child(13)]:order-none
      [&>*:nth-child(13)]:order-1
      "
  >
    <div
      v-for="(logo, index) in logos" :key="logo"
      class="flex items-center justify-center"
    >
      <nuxt-img loading="lazy" class="w-full block max-w-[100px]" :alt="`Memberships logo 0${index + 1}`" width="100" height="100" :src="myCld.image(logo.url).delivery(quality(80)).resize(Resize.scale().width(200)).toURL()" />
    </div>
  </div>
</template>
