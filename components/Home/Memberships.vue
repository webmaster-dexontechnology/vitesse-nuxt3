<script setup>
defineProps({
  content: Object,
})
</script>

<template>
  <div class="lg:pb-desktop pb-mobile">
    <div class="container">
      <h2 v-if="content.title" class="capitalize text-center xl:text-5xl md:text-4xl text-3xl font-bold xl:max-w-4xl lg:max-w-3xl mx-auto mb-custom-lg">
        {{ content.title }}
      </h2>
      <p v-if="content.subtitle" class="text-center text-xl leading-[1.6] mb-custom-xl">
        {{ content.subtitle }}
      </p>
      <ClientsMembership />
    </div>
  </div>
</template>
