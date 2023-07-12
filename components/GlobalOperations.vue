<template>
  <div class="lg:py-desktop py-mobile overflow-hidden">
    <div class="container">
      <div
        class="capitalize text-center lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
      >
        {{ $t('global_operations.header') }}
      </div>
      <h2 class="text-center xl:text-5xl md:text-4xl text-3xl font-bold xl:max-w-4xl lg:max-w-3xl mx-auto mb-custom-md">
        {{ $t('global_operations.title') }}
      </h2>
      <p class="text-center max-w-6xl mx-auto">
        {{ $t('global_operations.subtitle') }}
      </p>
      <Maps class="mt-custom-2xl" />
    </div>
  </div>
</template>
