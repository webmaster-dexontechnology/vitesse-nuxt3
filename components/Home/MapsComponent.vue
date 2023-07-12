<i18n locale="en" src="@/lang/en/index.json"></i18n>

<i18n locale="th" src="@/lang/th/index.json"></i18n>

<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="lg:py-desktop py-mobile overflow-hidden">
    <div class="container">
      <div
        class="capitalize text-center lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
      >
        {{ t('content.section8.header') }}
      </div>
      <h2 class="text-center xl:text-5xl md:text-4xl text-3xl font-bold xl:max-w-4xl lg:max-w-3xl mx-auto lg:mb-custom-3xl mb-custom-2xl">
        {{ t('content.section8.title') }}
      </h2>
      <Maps />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
