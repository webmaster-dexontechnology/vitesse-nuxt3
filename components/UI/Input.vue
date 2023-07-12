<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  customClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  additionalClass: {
    type: String,
    default: '',
  },
  required: Boolean,
  upload: Boolean,
})
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label v-if="props.label" :class="labelClass ? labelClass : 'capitalize mb-2'" :for="props.label" class="block text-md font-semibold">{{ props.label }} <span v-if="required" class="text-lg leading-[0]">*</span></label>
    <div class="relative flex">
      <input
        :id="props.label"
        :type="props.type" :value="props.modelValue"
        :class="customClass ? customClass : `${additionalClass} hover:border-secondary-red-100 placeholder:font-medium placeholder-primary/70 py-4 px-4 text-primary shadow-sm bg-white border border-primary/10 text-sm rounded-md focus:ring-offset-1 focus:ring-2 focus:ring-red-500/20 focus:border-red-500`"
        class="transition duration-200 block w-full capitalize"
        :placeholder="props.placeholder"
        @input="event => emits('update:modelValue', event.target.value)"
      >
      <div v-if="props.upload" class="h-[20px] flex items-center ml-auto">
        <svg class="absolute right-4 inset-y-0 my-auto text-primary/80" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5l-5 5z" /></svg>
      </div>
    </div>
  </div>
</template>
