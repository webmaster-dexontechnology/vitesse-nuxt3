<script setup>
import { useI18n } from 'vue-i18n'

const { useAuthUser } = useAuth()
const user = useAuthUser()
const { y } = useWindowScroll()
const localePath = useLocalePath()
const { t, setLocale } = useI18n()
const { locale } = useI18n()
const navbarMobile = ref(null)
const navbarDesktop = ref(null)
const navbarSize = ref(0)
const currentLang = ref(locale)
const langActive = ref(null)
const affixActive = ref(true)
const { width, height } = useWindowSize()

async function changeLocale(event) {
  setLocale(event)
  currentLang.value = event
  await navigateTo(localePath(useRoute().path))
  if (locale.value === 'en' || locale.value === 'th') {
    await setTimeout(() => {
      location.reload()
    }, 500)
  }
}
function openLang() {
  langActive.value = true
}
function closeLang() {
  langActive.value = false
}
function affixHeader() {
  const element = navbarSize.value
  if (y.value < element)
    affixActive.value = true

  else
    affixActive.value = false
}
function onWindowResize() {
  const navbMobile = document.querySelectorAll('header.header-sm')
  const navDesktop = document.querySelectorAll('header.header-lg')

  if (width.value < 1024) {
    navbarMobile.value = true
    navbarDesktop.value = false
    for (let i = 0; i < navbMobile.length; i++)
      navbarSize.value = navbMobile[i].clientHeight
  }
  else {
    navbarDesktop.value = true
    navbarMobile.value = false
    for (let i = 0; i < navDesktop.length; i++)
      navbarSize.value = navDesktop[i].clientHeight
  }
}

onMounted(() => {
  window.addEventListener('resize', onWindowResize)
  window.addEventListener('scroll', affixHeader)
  window.addEventListener('resize', affixHeader)
  onWindowResize()
  affixHeader()
})
</script>

<template>
  <div class="z-50">
    <header
      :class="!affixActive ? 'top-0 affix lg:translate-y-0 transition-transform duration-200' : 'lg:translate-y-[-60px] lg:mt-[60px] lg:absolute lg:dark:bg-opacity-0'"
      class="lg:affix-pattern dark:bg-red-gradient lg:dark:bg-opacity-100 bg-white lg:flex fixed header-lg items-center inset-x-0  z-[100] dark:shadow-none shadow-shadow-light/10 shadow-lg"
    >
      <nav class="container flex py-3 items-center lg:h-auto h-[50px]">
        <!-- hamburger Menu -->
        <!-- logo -->
        <div class="flex mr-3">
          <NuxtLink :to="localePath({ name: 'index' })" class="cursor-pointer">
            <Logo :affix-active="false" />
          </NuxtLink>
        </div>

        <!-- Admin Menu -->
        <div v-if="user" class="ml-auto">
          <UIAdminMenu />
        </div>
      </nav>
    </header>
  </div>
</template>
