<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="relative">
    <div class="lg:max-w-5xl md:max-w-4xl sm:max-w-3xl max-w-full mx-auto lg:py-20 md:py-14 py-12 px-5 min-h-[325px]">
      <div class="lg:text-5xl md:text-4xl text-3xl font-bold text-white text-center relative z-10 mb-custom-md">
        <slot name="title" />
      </div>
      <div class="md:text-xl text-lg text-white text-center relative z-10 md:leading-[1.7] leading-[1.65]">
        <slot name="subtitle" />
      </div>
    </div>
    <FormInputEmail form-class="mx-auto min-w-[400px] mx-4" input-class="py-5 px-6 sm:!text-[16px]" button-class="px-8 sm:!text-[16px]" class="translate-y-[50%] max-w-full sm:w-[450px] w-[90%] -mt-7 mx-auto">
      <template #cta>
        {{ t('button.talk') }}
      </template>
    </FormInputEmail>
    <div
      class="bg-hero inset-0 absolute z-[-10] rounded-2xl overflow-hidden"
    >
      <div class="opacity-60 h-full w-full relative inset-x-0 top-0">
        <div class="bg-primary absolute inset-0 w-full h-full z-[3] opacity-40 mix-blend-difference" />
        <div class="bg-primary absolute inset-0 w-full h-full z-[2] opacity-60 mix-blend-screen" />
        <slot name="background" />
      </div>
    </div>
    <div class="bg-primary absolute inset-0 w-full h-full z-[-11] rounded-2xl" />
  </div>
</template>
