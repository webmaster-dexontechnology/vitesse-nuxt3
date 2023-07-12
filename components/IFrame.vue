<script setup>
defineProps({
  url: String,
})
</script>

<template>
  <div>
    <iframe class="w-full rounded-lg" width="1280" height="550" :src="`${url}?showinfo=0&controls=0&autohid=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
  </div>
</template>
