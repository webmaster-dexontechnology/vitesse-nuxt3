<template>
  <div class="lg:py-desktop py-mobile">
    <div class="container">
      <div
        class="capitalize text-center lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
      >
        {{ $t('career.header') }}
      </div>
      <h2 class="text-center xl:text-5xl md:text-4xl text-3xl font-bold lg:max-w-3xl mx-auto mb-custom-xl">
        {{ $t('career.title') }}
      </h2>
      <div>
        <slot name="JobPosition" />
      </div>
    </div>
  </div>
</template>
