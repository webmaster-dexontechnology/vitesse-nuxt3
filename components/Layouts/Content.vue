<template>
  <div class="container relative lg:pb-desktop pb-mobile">
    <div class="max-w-6xl mr-auto md:py-custom-xl py-custom-md md:px-custom-lg px-custom-sm -mt-custom-2xl shadow-custom-xl shadow-shadow-light/10 bg-white rounded-xl">
      <h2 class="lg:text-3xl md:text-2xl text-xl font-bold mb-custom-sm capitalize">
        <slot name="title" />
      </h2>
      <p>
        <slot name="subtitle" />
      </p>
      <h3 class="lg:text-2xl md:text-xl text-lg font-bold mb-custom-sm">
        <slot name="title2" />
      </h3>
      <slot name="picture" />
    </div>
  </div>
</template>
