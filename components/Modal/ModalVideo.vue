<script setup>
defineProps({
  modalActive: Boolean,
  videoUrl: String,
  youtubeUrl: String,
})
defineEmits(['close'])
const { myCld } = cloudinary()
</script>

<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity opacity-0"
    enter-to-class="opacity opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity opacity-100"
    leave-to-class="opacity opacity-0"
  >
    <div v-if="modalActive" class="relative z-[100]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-[100] overflow-y-auto">
        <div class="relative flex items-center justify-center h-full">
          <div class="z-10 transform overflow-hidden rounded-none text-left shadow-xl transition-all sm:my-8 px-4 w-full sm:max-w-6xl">
            <IFrame v-if="youtubeUrl" :url="youtubeUrl" />
            <video
              v-else-if="videoUrl"
              class="rounded-xl transition duration-150 ease-out object-cover w-full m-auto" autoplay playsinline controls preload="metadata"
            >
              <source :src="myCld.video(`${videoUrl}`).toURL()" type="video/mp4">
            </video>
          </div>
          <div class="fixed inset-0 bg-[#0e0c1f] backdrop-blur-[3px] bg-opacity-50 transition-opacity z-0" @click="$emit('close')" />
        </div>
      </div>
    </div>
  </transition>
</template>
