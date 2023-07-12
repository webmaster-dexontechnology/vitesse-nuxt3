<script setup>
defineProps({
  content: Array,
})

const { rt, tm, t } = useI18n()
</script>

<template>
  <div>
    <div v-for="item in content" :key="item">
      <h4 v-if="item.title" class="md:text-lg text-md font-bold mb-custom-sm capitalize text-primary">
        {{ rt(item.title) }}
      </h4>
      <ul>
        <li v-for="subItem in item.subtitle" :key="subItem" class="list-disc">
          {{ rt(subItem.text) }}
        </li>
      </ul>
    </div>
  </div>
</template>
