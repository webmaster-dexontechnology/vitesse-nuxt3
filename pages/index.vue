<script setup>
const { locale } = useI18n()
</script>

<template>
  <div class="mt-20">
    <form>
      <select v-model="locale">
        <option value="en">
          en
        </option>
        <option value="th">
          th
        </option>
      </select>
      <p>{{ $t('button.click_here') }}</p>
    </form>
  </div>
</template>
