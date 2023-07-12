<script setup>
const { rt, tm, t } = useI18n()
const options = ref([
  {
    value: 'English',
  },
  {
    value: 'Thai',
  },
])
const selected = ref(options.value[0])
const activeIndex = ref(0)
const isActive = ref(false)
const { useAuthUser } = useAuth()
const user = useAuthUser()

const dropdownSelected = (item, index) => {
  selected.value = item
  activeIndex.value = index
  isActive.value = false
}

const closeDropdown = () => {
  isActive.value = false
}
</script>

<template>
  <div class="flex items-center gap-4">
    <DarkToggle class="xs:flex hidden" />
    <div class="relative" @mouseleave="isActive = false">
      <button
        type="button" aria-controls="dropdown" aria-expanded="false" class="border border-primary/10 dark:border-none z-10 sm:x-4 px-3 sm:py-3 py-2 relative flex items-center text-left transition duration-200 dark:text-white text-primary shadow-sm dark:bg-[#d41338] bg-white text-sm rounded-sm w-full"
        @mouseover="isActive = true"
      >
        <div class="mr-3">
          <svg class="h-[20px] w-[20px] dark:text-white text-primary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" /></svg>
        </div>
        <span class="font-semibold capitalize">{{ user.name }}</span>
        <div class="flex items-center sm:ml-8 ml-4">
          <svg class="h-[20px] w-[20px] dark:text-white text-primary transition-transform duration-200 ease-in-out" :class="{ 'rotate-180': isActive }" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z" /></svg>
        </div>
      </button>
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-10 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-10 opacity-0"
      >
        <ul v-if="isActive" role="listbox" class="pl-0 absolute bg-white shadow-shadow-light/10 shadow-custom-lg text-left transition duration-200 hover:border-secondary-red-100 text-primary text-sm rounded-sm focus:ring-offset-1 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 block w-full">
          <li
            v-for="(item, index) in options" :key="item" class="mb-0 flex items-center cursor-pointer p-4 pl-4 hover:bg-secondary-gray-100 [&:first-child]:rounded-tr-md  [&:first-child]:rounded-tl-md [&:last-child]:rounded-br-md  [&:last-child]:rounded-bl-md"
            :class="selected.value === item.value ? 'bg-secondary-gray-100 font-bold' : 'bg-white'" @click="dropdownSelected(item, index)"
          >
            <span>{{ item.value }}</span>
            <div v-if="selected.value === item.value " class="h-[20px] flex items-center ml-auto">
              <svg class="text-secondary-red-100 transition-transform duration-200 ease-in-out" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z" /></svg>
            </div>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
