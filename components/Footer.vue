<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
defineProps({
  bannerDisable: {
    type: Boolean,
    default: false,
  },
})
const { t } = useI18n()
const footer = reactive({
  company: [
    {
      path: '/inspection-services',
      text: t('footer.company.item[0].text'),
    },
    {
      path: '/pipeline-services',
      text: t('footer.company.item[1].text'),
    },
    {
      path: '/industries',
      text: t('footer.company.item[2].text'),
    },
    {
      href: 'https://investor.dexon-technology.com/',
      text: t('footer.company.item[3].text'),
    },
    {
      path: '/case-studies',
      text: t('footer.company.item[4].text'),
    },
  ],
  about: [
    {
      path: '/aboutus',
      text: t('footer.about.item[0].text'),
    },
    {
      path: '/news',
      text: t('footer.about.item[1].text'),
    },
    {
      path: '/career-at-dexon',
      text: t('footer.about.item[2].text'),
    },
    {
      path: '/resources',
      text: t('footer.about.item[3].text'),
    },
  ],
  support: [
    {
      path: '/contact',
      text: t('footer.support.item[0].text'),
    },
    // {
    //   path: '',
    //   text: t('footer.support.item[1].text'),
    // },
    {
      href: 'https://res.cloudinary.com/dfovim3lo/image/upload/v1689039130/dexon/assets/pdf/Code-of-Conduct-Rev.07-Thai_compressed_jwyw5q.pdf',
      text: t('footer.support.item[2].text'),
    },
    {
      href: 'https://res.cloudinary.com/dfovim3lo/image/upload/v1689039128/dexon/assets/pdf/GWO-Class-Evaluation-Overview-as-of-May-2023_compressed_x6wkxp.pdf',
      text: t('footer.support.item[3].text'),
    },
    {
      href: 'https://forms.office.com/pages/responsepage.aspx?id=8GV5IFj68ku5RM-V9TP-60Wj5WMUGvNFvdEGBuIPCg1UM0FHWjU0M0s5SzgyQVRHMjRPNDVCVldINi4u',
      text: t('footer.support.item[4].text'),
    },
  ],
})
const imageUrl = '/dexon/home/hero/slide2_asc1ov.webp'
const { myCld } = cloudinary()
const image = ref(myCld.image(imageUrl).delivery(quality(80)).toURL())
</script>

<template>
  <div>
    <footer>
      <div v-if="!bannerDisable" class="container">
        <BannerFooterBanner class="translate-y-[50%] z-[1] relative -mt-20">
          <template #background>
            <nuxt-img loading="lazy" width="100" height="100" alt="footer banner" class="object-cover object-center h-full w-full z-[1] inset-0 absolute" :src="image" />
          </template>
        </BannerFooterBanner>
      </div>
      <div class="bg-primary lg:pt-desktop pt-mobile lg:pb-custom-3xl pb-custom-2xl relative">
        <div class="container mt-custom-lg">
          <div class="lg:grid lg:grid-flow-col flex flex-wrap lg:gap-y-0 gap-y-10 xl:gap-x-16 lg:gap-x-12 gap-x-10">
            <div>
              <div class="fill-white h-[50px] mb-6">
                <svg
                  class="lg:h-9 h-6 fill-white " xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 293.17 67.89"
                >
                  <defs>
                    <linearGradient
                      id="DX_Gradient_Footer" x1="84.8" y1="33.95" x2="209.88" y2="33.95"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" class="text-[#ec0677]" stop-color="#ec0677" />
                      <stop offset="1" class="text-[#ec1b34]" stop-color="#ec1b34" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M115.36,15.35h-9.08c-.32,0-.44,.42-.16,.59l34.78,21.24,7.8-3.7-26.55-16.21c-2.04-1.25-4.39-1.91-6.79-1.91Z"
                  />
                  <path
                    d="M173.81,52.48h9.08c.32,0,.44-.42,.16-.59l-34.78-21.24-7.8,3.7,26.55,16.21c2.04,1.25,4.39,1.91,6.79,1.91Z"
                  />
                  <path
                    d="M37.48,52.48H1.1c-.61,0-1.1-.49-1.1-1.1V16.45c0-.61,.49-1.1,1.1-1.1H37.48c5.95,0,10.77,4.82,10.77,10.77v15.58c0,5.95-4.82,10.77-10.77,10.77Zm-.44-29.87H7.57c-.17,0-.32,.14-.32,.32v21.97c0,.17,.14,.32,.32,.32h29.47c2.21,0,4-1.79,4-4v-14.61c0-2.21-1.79-4-4-4Z"
                  />
                  <path
                    d="M280.24,22.61h-26.86c-.22,0-.4,.18-.4,.4v29.15c0,.17-.14,.32-.32,.32h-6.92c-.17,0-.32-.14-.32-.32V16.45c0-.61,.49-1.1,1.1-1.1h34.05c6.96,0,12.6,5.64,12.6,12.6v24.22c0,.17-.14,.32-.32,.32h-6.63c-.17,0-.32-.14-.32-.32V28.28c0-3.13-2.54-5.67-5.67-5.67Z"
                  />
                  <path
                    d="M62.3,37.33h36.04c.17,0,.31-.14,.31-.31v-6.22c0-.17-.14-.31-.31-.31H62.3c-.17,0-.32-.14-.32-.32v-4.21c0-1.85,1.5-3.36,3.36-3.36h36.17c.17,0,.31-.14,.31-.31v-6.63c0-.17-.14-.31-.31-.31h-36.95c-5.42,0-9.83,4.92-9.83,10.96v15.2c0,6.05,4.41,10.97,9.83,10.97h36.95c.17,0,.31-.14,.31-.31v-6.63c0-.17-.14-.31-.31-.31h-36.17c-1.85,0-3.36-1.5-3.36-3.36v-4.21c0-.17,.14-.32,.31-.32Z"
                  />
                  <g>
                    <path d="M156.14,59.73h-2.95v8.03h-1.6v-8.03h-2.95v-1.32h7.51v1.32Z" class="fill-[#808285]" />
                    <path
                      d="M165.42,59.73v2.67h3.87v1.32h-3.87v2.71h5.21v1.32h-6.81v-9.35h6.81v1.32h-5.21Z"
                      class="fill-[#808285]"
                    />
                    <path
                      d="M178.15,63.22v-.27c0-3.74,1.07-4.68,4.03-4.68h.27c.96,0,2.02,.15,3.07,.4v1.34c-.94-.24-2.07-.41-3.07-.41h-.27c-1.79,0-2.43,.52-2.43,3v.96c0,2.48,.64,3,2.43,3h.27c1,0,2.14-.17,3.07-.41v1.34c-1.05,.26-2.11,.4-3.07,.4h-.27c-2.97,0-4.03-.94-4.03-4.68Z"
                      class="fill-[#808285]"
                    />
                    <path d="M200.72,58.41v9.35h-1.6v-4.03h-4.1v4.03h-1.6v-9.35h1.6v4h4.1v-4h1.6Z" class="fill-[#808285]" />
                    <path
                      d="M216.53,58.41v9.35h-1.79l-4.34-7.08v7.08h-1.36v-9.35h1.79l4.36,7.08v-7.08h1.35Z"
                      class="fill-[#808285]"
                    />
                    <path
                      d="M224.59,63.22v-.27c0-3.65,.8-4.68,3.85-4.68h.27c3.03,0,3.84,1.03,3.84,4.68v.27c0,3.66-.8,4.68-3.84,4.68h-.27c-3.05,0-3.85-.94-3.85-4.68Zm4.11,3.35c1.78,0,2.23-.52,2.23-3v-.96c0-2.48-.45-3-2.23-3h-.27c-1.79,0-2.24,.52-2.24,3v.96c0,2.48,.45,3,2.24,3h.27Z"
                      class="fill-[#808285]"
                    />
                    <path d="M247.15,66.44v1.32h-6.55v-9.35h1.6v8.03h4.94Z" class="fill-[#808285]" />
                    <path
                      d="M254.47,63.22v-.27c0-3.65,.8-4.68,3.85-4.68h.27c3.03,0,3.84,1.03,3.84,4.68v.27c0,3.66-.8,4.68-3.84,4.68h-.27c-3.05,0-3.85-.94-3.85-4.68Zm4.11,3.35c1.78,0,2.23-.52,2.23-3v-.96c0-2.48-.45-3-2.23-3h-.27c-1.79,0-2.24,.52-2.24,3v.96c0,2.48,.45,3,2.24,3h.27Z"
                      class="fill-[#808285]"
                    />
                    <path
                      d="M271.8,62.6v.96c0,2.48,.64,3,2.43,3h.27c.51,0,1.07-.05,1.55-.15v-3.46h1.52v4.53c-1.05,.26-2.11,.4-3.07,.4h-.27c-2.97,0-4.03-.94-4.03-4.68v-.27c0-3.74,1.07-4.68,4.03-4.68h.27c.96,0,2.02,.15,3.07,.4v1.34c-.94-.24-2.07-.41-3.07-.41h-.27c-1.79,0-2.43,.52-2.43,3Z"
                      class="fill-[#808285]"
                    />
                    <path
                      d="M293.17,58.41l-3.08,6.16v3.19h-1.6v-3.19l-3.29-6.16h1.7l2.44,4.68,2.31-4.68h1.52Z"
                      class="fill-[#808285]"
                    />
                  </g>
                  <path
                    d="M228.64,15.35h-33.95c-5.42,0-9.83,4.92-9.83,10.96v15.2c0,6.05,4.41,10.97,9.83,10.97h33.95c5.42,0,9.83-4.92,9.83-10.97v-15.2c0-6.05-4.41-10.96-9.83-10.96Zm2.57,26.51c0,1.86-1.5,3.36-3.36,3.36h-32.37c-1.86,0-3.36-1.5-3.36-3.36v-15.89c0-1.86,1.5-3.36,3.36-3.36h32.37c1.86,0,3.36,1.5,3.36,3.36v15.89Z"
                  />
                  <path
                    d="M209.88,0c-2.53,0-7.11,.59-9.37,1.73-17.85,8.98-38.75,19.39-55.62,29.47l-35.31,21.13-24.78,15.57h0c2.53,0,7.14-.57,9.42-1.67,20.59-9.96,41-20,60.3-31.7l33.74-20.39L209.88,0h0Z"
                    style="fill:url(#DX_Gradient_Footer);"
                  />
                </svg>
              </div>
              <p class="text-white mb-5">
                {{ t('footer.address.name') }}
              </p>
              <p class="text-white">
                <b>{{ t('footer.address.label.phone') }}:</b> {{ t('footer.address.phone') }}
              </p>
              <p class="text-white">
                <b>{{ t('footer.address.label.email') }}:</b> {{ t('footer.address.email') }}
              </p>
              <p class="text-white">
                <b>{{ t('footer.address.label.fax') }}:</b> {{ t('footer.address.fax') }}
              </p>
            </div>
            <div>
              <div class="text-lg font-bold uppercase text-white mb-6">
                {{ t('footer.company.name') }}
              </div>
              <div v-for="item in footer.company" :key="item" class="[&:not(:last-child)]:mb-5 text-white text-base capitalize">
                <NuxtLink v-if="item.path" :to="localePath({ path: item.path })" class="hover:underline">
                  {{ item.text }}
                </NuxtLink>
                <a v-else :href="item.href" target="_blank" class="hover:underline">
                  {{ item.text }}
                </a>
              </div>
            </div>
            <div>
              <div class="text-lg font-bold uppercase text-white mb-6">
                {{ t('footer.about.name') }}
              </div>
              <div v-for="item in footer.about" :key="item" class="[&:not(:last-child)]:mb-5 text-white text-base capitalize">
                <NuxtLink v-if="item.path" :to="localePath({ path: item.path })" class="hover:underline">
                  {{ item.text }}
                </NuxtLink>
                <a v-else :href="item.href" target="_blank" class="hover:underline">
                  {{ item.text }}
                </a>
              </div>
            </div>
            <div>
              <div class="text-lg font-bold uppercase text-white mb-6">
                {{ t('footer.support.name') }}
              </div>
              <div v-for="item in footer.support" :key="item" class="[&:not(:last-child)]:mb-5 text-white text-base capitalize">
                <NuxtLink v-if="item.path" :to="localePath({ path: item.path })" class="hover:underline">
                  {{ item.text }}
                </NuxtLink>
                <a v-else :href="item.href" target="_blank" class="hover:underline">
                  {{ item.text }}
                </a>
              </div>
            </div>
            <div class="col-span-6 lg:w-auto md:w-1/2 xs:w-3/4 w-full">
              <div class="text-lg font-bold uppercase text-white mb-6">
                {{ t('footer.follow.name') }}
              </div>
              <p class="mb-5 text-white text-base capitalize">
                {{ t('footer.follow.subscribe') }}
              </p>
              <FormInputEmail />
              <div class="flex items-center gap-x-4 mt-6">
                <a href="https://www.youtube.com/c/DexonTechnology" target="_blank" rel="noopener" class="bg-[#261A67] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <svg class="text-white" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z" /></svg>
                </a>
                <a href="https://www.linkedin.com/company/dexon-technology/" target="_blank" rel="noopener" class="bg-[#261A67] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <svg class="text-white" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48Zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68Z" /></svg>
                </a>
                <a href="https://www.facebook.com/Dexontechnology/" target="_blank" rel="noopener" class="bg-[#261A67] rounded-full w-[50px] h-[50px] flex items-center justify-center">
                  <svg class="text-white" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-red-gradient py-4">
        <div class="container">
          <div class="w-full flex flex-wrap items-center lg:gap-x-10 gap-x-4 gap-y-1">
            <div class="flex lg:flex-nowrap sm:flex-wrap sm:flex-row flex-col sm:items-center gap-x-10 ">
              <NuxtLink :to="localePath({ path: '/terms-and-conditions' })" class="text-white whitespace-nowrap">
                {{ t('footer.terms') }}
              </NuxtLink>
              <NuxtLink :to="localePath({ path: '/privacy-policy' })" class="text-white whitespace-nowrap">
                {{ t('footer.privacy') }}
              </NuxtLink>
              <a href="https://res.cloudinary.com/dfovim3lo/image/upload/v1689039129/dexon/assets/pdf/CMP-024-Cookies-Policy_compressed_g4dfkx.pdf" target="_blank" class="text-white whitespace-nowrap">
                {{ t('footer.cookies') }}
              </a>
              <!-- <a href="" target="_blank" class="text-white whitespace-nowrap">
                {{ t('footer.sitemap') }}
              </a> -->
            </div>
            <div class="lg:ml-auto">
              <p class="text-white">
                {{ t('footer.copyright') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
