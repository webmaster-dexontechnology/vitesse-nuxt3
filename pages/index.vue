<script setup lang="ts">
</script>

<template>
  <div>
    <Logos mb-6 />
    <div class="custom-div container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nihil iste necessitatibus saepe eum temporibus molestiae. Laboriosam odio reiciendis molestiae suscipit enim, recusandae blanditiis, praesentium, nulla quis explicabo natus ipsa!
    </div>
    <Suspense>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry />
  </div>
</template>
