<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    deafault: 'md',
  },
  liquid: {
    type: Boolean,
    deafult: false,
  },
  theme: {
    type: String,
    deafault: 'fill',
  },
  ring: {
    type: String,
    deafault: 'red',
  },
})
const emits = defineEmits(['onClick'])
const { defaultTransition } = useTailwindConfig()
const ringClasses = computed(() => {
  switch (props.ring) {
    case 'green':
      return 'ring-green-500/25 hover:ring-4'
    case 'blue':
      return 'ring-[#202edd]/25 hover:ring-4'
    default:
      return 'ring-secondary-red-100/25 hover:ring-4'
  }
})

const themeClasses = computed(() => {
  switch (props.theme) {
    case 'outline':
      return 'border border-secondary-red-100 text-secondary-red-100'
    case 'text':
      return 'text-primary'
    case 'green':
      return 'bg-green-500 text-white'
    default:
      return 'bg-red-gradient text-white'
  }
})

const paddingClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3.5 py-2'
    case 'lg':
      return 'px-6 py-3'
    case 'xl':
      return 'px-7 py-4'
    default:
      return 'px-4 py-3'
  }
})

const textFontSize = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-sm'
    case 'lg':
      return 'text-lg'
    case 'xl':
      return 'md:text-2xl text-xl'
    default:
      return 'text-md'
  }
})

const defaultWidth = computed(() => {
  switch (props.size) {
    default:
      return 'w-auto'
  }
})

const classes = computed(() => `${ringClasses.value} ${themeClasses.value} ${paddingClasses.value} ${props.liquid ? 'w-full' : defaultWidth.value}`)

function handleClick(event) {
  emits('onClick', event)
}
</script>

<template>
  <button
    class="disabled:opacity-50 disabled:cursor-not-allowed font-semibold leading-6 transition-shadow duration-200 ease-in-out"
    :disabled="props.disabled" :class="[classes]" @click="handleClick"
  >
    <span :class="textFontSize">
      <slot />
    </span>
  </button>
</template>
