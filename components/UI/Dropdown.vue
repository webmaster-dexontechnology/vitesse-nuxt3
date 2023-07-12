<script setup>
import { vOnClickOutside } from '@vueuse/components'
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array,
    default: () => {},
  },
  selected: {
    type: String,
  },
  labelClass: {
    type: String,
    default: '',
  },
  selectClass: {
    type: String,
    default: '',
  },
  dropdownClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelSelect: {
    type: String,
    default: '',
  },
  required: Boolean,
})
const emits = defineEmits(['onHover', 'onClick', 'onClose', 'onSelect'])
const { defaultTransition } = useTailwindConfig()
const { t } = useI18n()
const selected = ref(props.selected)

const dropdownActive = ref(false)
const dropdownOpen = () => {
  dropdownActive.value = true
}

const dropdownClose = () => {
  dropdownActive.value = false
}

const onSelected = (item, index, event) => {
  selected.value = item
  emits('onSelect', item)
  dropdownClose()
}
</script>

<template>
  <div>
    <div v-on-click-outside="dropdownClose" @click="dropdownOpen">
      <label v-if="props.label" :class="labelClass ? labelClass : 'capitalize mb-2 font-medium text-md'" :for="props.label">{{ props.label }} <span v-if="required" class="text-lg leading-[0]">*</span></label>
      <div
        :class="[selectClass ? selectClass : 'mt-2 flex items-center hover:border-secondary-red-100 py-3 px-4 text-primary shadow-sm bg-white border border-primary/10 text-sm rounded-md focus:ring-offset-1 focus:ring-2 focus:ring-red-500/20 focus:border-red-500', defaultTransition]"
      >
        <p :class="labelSelect" class="font-medium capitalize text-[0.95rem]">
          <span v-if="selected !== props.options[0].value">
            {{ selected }}
          </span>
          <span v-else>{{ props.options[0].value }}</span>
        </p>
        <svg
          class="transition-all duration-200 ease-in-out ml-auto text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="20" height="20" viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
          />
        </svg>
      </div>
    </div>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-5 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <ul v-if="dropdownActive" role="listbox" :class="dropdownClass" class="z-40 w-full pl-0 absolute bg-white shadow-shadow-light/10 shadow-custom-lg text-left transition duration-200 hover:border-secondary-red-100 text-primary text-sm rounded-sm focus:ring-offset-1 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 block">
        <li
          v-for="(item, index) in props.options" :key="item" class="capitalize mb-0 flex items-center cursor-pointer p-4 pl-4 hover:bg-secondary-gray-50 [&:first-child]:rounded-tr-md  [&:first-child]:rounded-tl-md [&:last-child]:rounded-br-md  [&:last-child]:rounded-bl-md"
          :class="selected === item.value ? 'bg-secondary-gray-50 font-bold' : 'bg-white'" @click="onSelected(item.value, index)"
        >
          <span>{{ t(item.value) }}</span>
          <div v-if="selected === item.value" class="h-[20px] flex items-center ml-auto">
            <svg class="text-secondary-red-100 transition-transform duration-200 ease-in-out" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z" /></svg>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>
