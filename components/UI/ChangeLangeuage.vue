<script setup>
const langActive = ref(false)
const localePath = useLocalePath()
const { t, setLocale, locale } = useI18n()
const currentLang = ref(locale)
async function changeLocale(event) {
  setLocale(event)
  currentLang.value = event
  await navigateTo(localePath(useRoute().path))
  if (locale.value === 'en' || locale.value === 'th') {
    // await setTimeout(() => {
    //   location.reload()
    // }, 500)
  }
}
function openLang() {
  langActive.value = true
}
function closeLang() {
  langActive.value = false
}
</script>

<template>
  <div @mouseover="openLang" @mouseleave="closeLang">
    <div
      class="navigation hidden items-center lg:flex"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" class="text-primary dark:text-white" width="18" height="18"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <circle
            cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            fill="currentColor"
            d="M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2a2 2 0 1 1-4 0a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2zm9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2zm-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2a2 2 0 0 0 2 2a2 2 0 0 1 2 2z"
          />
          <path
            stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 6V4c2.5-1.167 8.4-2 12 4h-1a2 2 0 0 0-2 2a2 2 0 1 1-4 0a2 2 0 0 0-2-2h-1a2 2 0 0 1-2-2zm9 10h3c-1.2 1.6-3.833 3.333-5 4v-2a2 2 0 0 1 2-2zm-6 2v2c-6.4-.4-8-5.5-8-8h2a2 2 0 0 1 2 2a2 2 0 0 0 2 2a2 2 0 0 1 2 2z"
          />
        </g>
      </svg>
    </div>
    <div
      class="flex cursor-pointer gap-x-2 border border-primary rounded-md p-1 text-[10px] font-semibold lg:hidden dark:border-white"
    >
      <div v-if="locale === 'en'" class="font-semibold text-primary dark:text-white" @click="changeLocale('th')">
        EN
      </div>
      <div v-if="locale === 'th'" class="font-semibold text-primary dark:text-white" @click="changeLocale('en')">
        TH
      </div>
    </div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="langActive" class="absolute right-0 top-0 z-50 mt-3 hidden translate-x-[50%] transform lg:flex sm:translate-x-0">
        <div
          class="shadow-custom-2xl flex translate-y-5 items-center whitespace-nowrap rounded-md shadow-shadow-light/10 dark:shadow-shadow-dark/1"
        >
          <div
            class="flex flex-col cursor-pointer text-sm font-semibold"
          >
            <div
              class="hocver:text-white flex items-center gap-2 rounded-tl-md rounded-tr-md bg-white px-4 py-2 text-primary hover:bg-secondary-gray-200"
              @click="changeLocale('en')"
            >
              <IconFlagUS class="h-5 w-5" />
              dexon-technology.com
            </div>
            <hr class="border-secondary-grey-300/60">
            <div
              class="hocver:text-white flex items-center gap-2 rounded-bl-md rounded-br-md bg-white px-4 py-2 text-primary hover:bg-secondary-gray-200"
              @click="changeLocale('th')"
            >
              <IconFlagTH class="h-5 w-5" />
              dexon-technology.th
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
