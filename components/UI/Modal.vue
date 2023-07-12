<script setup>
import { vOnClickOutside } from '@vueuse/components'
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  modalClass: {
    type: String,
    default: '',
  },
})

const emits = defineEmits(['onClose'])

function closeModal() {
  emits('onClose')
}
</script>

<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" class="relative z-[200]" @close="closeModal">
      <TransitionChild
        as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-[#0e0c1f]/50 backdrop-blur-[3px]" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex items-start justify-center min-h-full p-4 text-center">
          <TransitionChild
            as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              v-on-click-outside="closeModal"
              :class="props.modalClass ? props.modalClass : 'w-full max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md mt-[7.5%]'"
            >
              <slot />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
