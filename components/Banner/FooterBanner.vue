<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="w-full">
    <div class="relative overflow-hidden rounded-2xl">
      <div
        class="flow-root rounded-lg group/footer md:p-10 sm:p-8 p-6 cursor-pointer"
      >
        <div class="relative z-20 flex flex-wrap items-center gap-y-3">
          <span class="z-10 text-md text-primary/75 mr-auto">
            <p class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-white font-bold">{{ $t('banner.proposal.title1') }}</p>
            <p class="lg:text-3xl md:text-2xl text-lg text-white font-medium">{{ $t('banner.proposal.title2') }}</p>
          </span>
          <NuxtLink
            :to="
              localePath({
                path: '/contact',
              })"
            class="
                sm:text-xl text-md sm:px-6 px-4 sm:py-4 py-3 shadow-shadow-light/20 shadow-custom-lg
                ring-secondary-red-100/25 hover:ring-4 transition duration-200 ease-out font-semibold
                items-center rounded-full bg-red-gradient text-white whitespace-nowrap"
          >
            <span>{{ t('button.proposal') }}</span>
          </NuxtLink>
        </div>
        <div class="opacity-70 h-full absolute inset-x-0 top-0 z-[2]">
          <div class="bg-primary absolute inset-0 w-full h-full z-[3] opacity-30 mix-blend-overlay" />
          <div class="bg-primary absolute inset-0 w-full h-full z-[2] opacity-80 mix-blend-screen" />
          <slot name="background" />
        </div>
        <div class="bg-primary absolute inset-0 w-full h-full z-[0]" />
        <div class="overflow-hidden min-w-[250px] min-h-[250px] absolute right-0 -scale-x-100 top-0 origin-center z-[5]">
          <DecorlationRstriped current-color="text-secondary-red-100" class="origin-center h-full w-auto rotate-180 mix-blend-difference absolute right-0 top-0 translate-x-0 z-0" />
        </div>
      </div>
    </div>
  </div>
</template>
