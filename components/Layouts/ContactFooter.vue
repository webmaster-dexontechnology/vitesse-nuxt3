<script setup>
const { t } = useI18n()
</script>

<template>
  <p class="mb-custom-sm">
    {{ $t('contact.contact_dexon') }}
  </p>
  <ButtonHover :button-text="$t('button.contact')" route-path="/contact" button-class="text-sm px-4 py-3 border border-secondary-red-100 text-secondary-red-100" />
</template>
