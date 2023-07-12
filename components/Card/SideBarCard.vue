<script setup>
const props = defineProps(['location', 'time', 'type', 'action'])
const emits = defineEmits(['action'])
const { t } = useI18n()
</script>

<template>
  <div>
    <div class="lg:w-full w-full max-w-full bg-white rounded-md shadow-custom-2xl shadow-shadow-light/10 p-5">
      <div class="flex flex-col gap-y-4">
        <div class="flex flex-row gap-x-5 items-center">
          <div class="w-[45px] h-[45px] bg-slate-100 flex items-center justify-center rounded-full">
            <svg class="text-secondary-red-100" width="23" height="23" viewBox="0 0 256 256"><path fill="currentColor" d="M128 64a40 40 0 1 0 40 40a40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24a24 24 0 0 1-24 24Zm0-112a88.1 88.1 0 0 0-88 88c0 31.4 14.51 64.68 42 96.25a254.19 254.19 0 0 0 41.45 38.3a8 8 0 0 0 9.18 0a254.19 254.19 0 0 0 41.37-38.3c27.45-31.57 42-64.85 42-96.25a88.1 88.1 0 0 0-88-88Zm0 206c-16.53-13-72-60.75-72-118a72 72 0 0 1 144 0c0 57.23-55.47 105-72 118Z" /></svg>
          </div>
          <div class="flex flex-col text-md">
            <span class="font-semibold text-primary/90">Location</span>
            <span class="font-medium text-primary/70">{{ location }}</span>
          </div>
        </div>
        <div class="flex flex-row gap-x-5 items-center">
          <div class="w-[45px] h-[45px] bg-slate-100 flex items-center justify-center rounded-full">
            <svg class="text-secondary-red-100" width="23" height="23" viewBox="0 0 24 24"><path fill="currentColor" d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" /></svg>
          </div>
          <div class="flex flex-col text-md">
            <span class="font-semibold text-primary/90">Working Model</span>
            <span class="font-medium text-primary/70">{{ time }}</span>
          </div>
        </div>
        <div class="flex flex-row gap-x-5 items-center">
          <div class="w-[45px] h-[45px] bg-slate-100 flex items-center justify-center rounded-full">
            <svg class="text-secondary-red-100" width="23" height="23" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="17" cy="7" r="3" /><circle cx="7" cy="17" r="3" /><path d="M14 14h6v5a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-5ZM4 4h6v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4Z" /></g></svg>
          </div>
          <div class="flex flex-col text-md">
            <span class="font-semibold text-primary/90">Job category</span>
            <span class="font-medium text-primary/70">{{ type }}</span>
          </div>
        </div>
        <div class="flex lg:flex-nowrap flex-wrap gap-4 items-center mt-custom-xs">
          <div class="lg:flex lg:w-full text-center">
            <a
              class="
                md:text-md text-sm px-6 w-full min-h-[48px] flex justify-center cursor-pointer
                ring-secondary-red-100/25 hover:ring-4 transition duration-200 ease-out font-semibold
                items-center rounded-md bg-red-gradient text-white whitespace-nowrap"
              @click="emits('action')"
            >
              <span>{{ t('button.apply') }}</span>
            </a>
          </div>
          <div class="lg:flex lg:w-full text-center">
            <a
              class="
                text-md px-6 w-full min-h-[48px] flex justify-center cursor-pointer
                ring-secondary-red-100/25 hover:ring-4 transition duration-200 ease-out font-semibold
                items-center rounded-md border border-secondary-red-100 text-secondary-red-100 whitespace-nowrap"
            >
              <span>{{ t('button.share') }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
