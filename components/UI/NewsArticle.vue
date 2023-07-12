<i18n locale="en" src="@/lang/en/news/index.json"></i18n>

<i18n locale="th" src="@/lang/th/news/index.json"></i18n>

<script setup>
import { quality } from '@cloudinary/url-gen/actions/delivery'
const activeIndex = ref(1)
const { t, tm, rt } = useI18n()
const content = tm('article')
const { myCld } = cloudinary()
const search = ref('')
const showAmout = ref(12)

const filterArticle = computed(() => {
  return content.filter((item) => {
    return item && rt(item.title).toLowerCase().includes(search.value.toLowerCase())
  })
})
const filterAmountArticle = computed(() => {
  return filterArticle.value.slice(0, showAmout.value)
})

function compare(a, b) {
  if (a.type < b.type)
    return -1
  if (a.type > b.type)
    return 1
  return 0
}
const sortArticle = computed(() => {
  return filterAmountArticle.value.sort(compare)
})

const onHover = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div>
    <div
      class="bg-white rounded-md shadow-shadow-light/10 shadow-custom-lg lg:mt-0 mt-custom-xl z-10 mb-custom-xl lg:w-[50%] overflow-hidden"
    >
      <div class="flex flex-wrap divide-x divide-gray-200">
        <div class="px-6 py-4 w-full">
          <label for="search" class="uppercase mb-2 font-bold text-md">
            {{ t('navgigator.search') }}
          </label>
          <div class="flex items-center border-b border-b-gray-200 pb-1.5 pt-1">
            <svg class="h-5 w-5 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
            <UIInput
              v-model="search" class="w-full" type="text" custom-class="text-primary/70 capitalize text-[0.95rem] placeholder:capitalize placeholder:text-gray-400 w-full" :placeholder="t('navgigator.search_news')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="grid xl:grid-cols-4 sm:grid-cols-2 gap-custom-lg">
      <NuxtLink
        v-for="(item, index) in sortArticle"
        :key="item" :to="localePath({
          path: `/news/${rt(item.id)}`,
        })"
        :class="activeIndex === index ? 'shadow-shadow-light/10 h-full shadow-custom-xl scale-105' : 'scale-100'"
        class="group/card transition duration-200 ease-in-out rounded-l relative border border-slate-100" @mouseover="onHover(index)"
      >
        <div class="z-20 rounded-lg cursor-pointer">
          <div class="w-full">
            <nuxt-img loading="lazy" width="250" height="200" :alt="rt(item.title)" class="rounded-tl-lg rounded-tr-lg w-full h-full object-cover max-h-[200px]" :src="myCld.image(rt(item.image)).delivery(quality(80)).toURL()" />
          </div>
          <div class="py-custom-md px-custom-md relative">
            <div class="min-h-[240px]">
              <div class="mb-1">
                <span class="text-secondary-red-100 text-sm font-bold uppercase">year 2022</span>
              </div>
              <h3 class="line-clamp-3 font-semibold text-md leading-6 mb-custom-sm">
                {{ rt(item.title) }}
              </h3>

              <!-- eslint-disable -->
            <div v-for="(detail, index) in item.content" v-if="item.content" :key="detail">
              <p
                v-for="(subtitle, index) in detail.content.slice(0, 1)" v-if="detail.content && index === 0" :key="subtitle"
                class="line-clamp-3 mb-custom-lg text-md"
              >
                <span v-if="subtitle.text">{{ rt(subtitle.text) }}</span>
              </p>
            </div>
          </div>
          <div class="max-h-[20px] max-w-[120px] flex items-center sm:absolute bottom-0 sm:pb-custom-lg">
            <div class="text-md font-semibold" :class="activeIndex === index ? 'text-md group-hover/card:text-secondary-red-100 transition-colors hover:ring-[0]' : 'hover:ring-[0] text-md text-primary transition-colors'">
                {{ t('button.explore') }}
            </div>
        </div>
        </div>
      </div>
    </NuxtLink>
  </div>
  </div>
</template>
