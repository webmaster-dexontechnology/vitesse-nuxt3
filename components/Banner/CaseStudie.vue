<script setup>
defineProps({
  btn: String,
  link: String,
  content: {
    type: String,
    default: 'Our case studies demonstrate the quality of insp services.',
  },
})
</script>

<template>
  <div class="relative overflow-hidden">
    <NuxtLink
      :to="localePath({ name: link })"
      class="bg-secondary-gray-100 flow-root rounded-md rounded-t-none group/footer px-6 py-5 cursor-pointer"
    >
      <div class="relative z-10 flex flex-wrap items-center gap-x-2">
        <span class="z-10 text-sm font-semibold mr-auto text-primary">
          {{ content }}
        </span>
        <div class="font-semibold z-10 flex text-xs px-4 py-2 items-center rounded-full bg-secondary-red-100 text-white shadow-custom-md transition duration-150 ease-in-out scale-100 group-hover/footer:scale-95">
          <span>{{ btn }}</span>
        </div>
      </div>
      <div>
        <DecorlationRstriped current-color="text-secondary-gray-300" class="origin-bottom-right mix-blend-darken absolute inset-y-0 -right-3 h-full w-auto scale-[200%] translate-x-0 z-0" />
      </div>
    </NuxtLink>
  </div>
</template>
