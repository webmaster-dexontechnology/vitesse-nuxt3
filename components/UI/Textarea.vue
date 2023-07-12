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
  rows: String,
  required: Boolean,
})
const emits = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <label v-if="props.label" :class="labelClass ? labelClass : 'capitalize mb-2'" :for="props.label" class="block text-md font-medium">{{ props.label }} <span v-if="required" class="text-lg leading-[0]">*</span></label>
    <textarea
      :id="props.label"
      :rows="rows ? rows : '10'"
      cols="50"
      :type="props.type" :value="props.modelValue"
      :class="customClass ? customClass : 'hover:border-secondary-red-100 placeholder:font-medium placeholder-secondary-gray-400 py-3 px-4 text-primary shadow-sm bg-white border border-primary/10 text-sm rounded-md focus:ring-offset-1 focus:ring-2 focus:ring-red-500/20 focus:border-red-500'"
      class="transition duration-200 block w-full"
      :placeholder="props.placeholder"
      @input="event => emits('update:modelValue', event.target.value)"
    />
  </div>
</template>
