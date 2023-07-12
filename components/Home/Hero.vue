<i18n locale="en" src="@/lang/en/hero.json"></i18n>

<i18n locale="th" src="@/lang/th/hero.json"></i18n>

<script setup>
const { tm } = useI18n()
const data = tm('content')
const modalActive = ref(false)
const openModal = () => {
  modalActive.value = true
}
const closeModal = () => {
  modalActive.value = false
}
</script>

<template>
  <div class="lg:pb-desktop pb-mobile overflow-hidden ">
    <div ref="target" class="w-full inset-0 mx-auto">
      <div
        class="relative flex lg:flex-row flex-col items-center"
      >
        <HeroCarousel :items="data" />
        <CardTransform class="z-50" @action="openModal" />
      </div>
    </div>
    <ModalVideo video-url="/dexon/assets/video/company-video_ziklhr" :modal-active="modalActive" @close="closeModal" />
  </div>
</template>
