<i18n locale="en" src="@/lang/en/cookies.json"></i18n>

<i18n locale="th" src="@/lang/th/cookies.json"></i18n>

<script setup lang="ts">
const { locale, t } = useI18n()
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
  showControl,
} = useCookieControl()

onMounted(() => {
  moduleOptions.isAcceptNecessaryButtonEnabled = false
  showControl.value = true
})

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('google-analytics')
          && current?.includes('google-analytics'))
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>

<template>
  <CookieControl :locale="locale" class="!font-sans">
    <template #bar>
      <svg class="absolute z-[-1] rotate-[25deg] text-secondary-red-100/10 h-[175px] w-[175px] left-0 top-0 translate-x-[-20%] translate-y-[-40%] opacity-90" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          d="M510.52 255.82c-69.97-.85-126.47-57.69-126.47-127.86-70.17 0-127-56.49-127.86-126.45-27.26-4.14-55.13.3-79.72 12.82l-69.13 35.22a132.221 132.221 0 00-57.79 57.81l-35.1 68.88a132.645 132.645 0 00-12.82 80.95l12.08 76.27a132.521 132.521 0 0037.16 72.96l54.77 54.76a132.036 132.036 0 0072.71 37.06l76.71 12.15c27.51 4.36 55.7-.11 80.53-12.76l69.13-35.21a132.273 132.273 0 0057.79-57.81l35.1-68.88c12.56-24.64 17.01-52.58 12.91-79.91zM176 368c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm32-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm160 128c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
        />
      </svg>
      <div class="flex items-center gap-x-3 mb-4">
        <svg class="text-secondary-red-100" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c.714 0 1.419.075 2.106.222a.75.75 0 0 1 .374 1.263a2.501 2.501 0 0 0 1.206 4.201a.75.75 0 0 1 .577.811a2.5 2.5 0 0 0 4.36 1.908a.75.75 0 0 1 1.307.409c.047.39.07.787.07 1.186c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 1.5a8.5 8.5 0 1 0 8.466 9.265l.019-.257l.007-.157l-.194.088c-.33.139-.68.233-1.043.28l-.274.024l-.231.007a4.001 4.001 0 0 1-3.956-3.402l-.025-.201l-.014-.187l-.145-.06a4.004 4.004 0 0 1-2.338-3.234l-.017-.216l-.005-.2c0-.447.074-.882.214-1.292l.091-.243l.085-.19l-.276-.017L12 3.5ZM15 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-7-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm4-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM7 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" /></svg>
        <h3 class="!text-2xl">
          {{ t('title') }}
        </h3>
      </div>
      <p>
        {{ t('body') }} <a href="https://www.dexon-technology.com/wp-content/uploads/2022/11/CMP-024-Cookies-Policy.pdf" class="text-secondary-red-100 hover:underline font-semibold" target="_blank" rel="noopener">{{ t('policy') }}</a>
      </p>
      <!-- <button class @click="isModalActive = true" v-text="'Open cookie control'" /> -->
    </template>
  </CookieControl>
</template>

<style>
.cookieControl__ModalContent h3, .cookieControl__ModalContent span, .cookieControl__ModalContent label {
  color: #140A4B !important;
}

.cookieControl__BarContainer, .cookieControl__BarContainer p, .cookieControl__BarContainer button, .cookieControl__BarContainer h3 {
  font-family: 'Montserrat', 'Kanit', sans-serif !important;
}

.cookieControl__BarButtons {
  margin-top: 25px !important;
  width: 100%;
}

.cookieControl__Bar--center p, .cookieControl__Bar--top-left p, .cookieControl__Bar--top-right p, .cookieControl__Bar--bottom-left p, .cookieControl__Bar--bottom-right p {
    max-width: 480px !important;
}

.cookieControl__BarButtons button {
  /* width: 100%; */
  /* margin-right: auto; */
  font-size: 16px;
  transition: .2s ease-in-out;
  font-weight: 600;
  border-radius: 6px;
  padding: 10px 20px;
}

.cookieControl__BarButtons button:hover {
  box-shadow: 0 0 1px 3px rgba(237, 36, 52, 0.25);
  box-shadow: 0 0 0 3px -moz-mac-focusring; /* Firefox */
  outline: auto 0 -webkit-focus-ring-color; /* Webkit, Safari */
}

.cookieControl__BarButtons button:focus, .cookieControl__Modal button:focus {
  outline: none;
  box-shadow: none;
}

.cookieControl__BarButtons button:first-child, .cookieControl__BarButtons button:first-child:hover, .cookieControl__ModalContent button:not(:last-child), .cookieControl__ModalContent button:not(:last-child):hover {
  color: #fff;
  background-color: #EE2334 !important;
  border-radius: 6px;
}

.cookieControl__BarButtons button:last-child, .cookieControl__BarButtons button:last-child:hover, .cookieControl__ModalContent button:last-child, .cookieControl__ModalContent button:last-child:hover {
  color: #EE2334;
  border: 1px solid #EE2334 !important;
  background-color: #ffff;
  border-radius: 6px;
}

.cookieControl__ModalContent input:checked:disabled + button {
  background-color: #cbd5e1 !important;
}

.cookieControl__ModalContent input + button {
  border-radius: 50px !important;
}

.cookieControl__Bar.cookieControl__Bar {
  overflow: hidden;
  background-color: #fff !important;
  border-radius: 6px;
  box-shadow: 0 4px 20px 0px rgb(97,88,170, 0.15), 0 2px 12px -7px rgb(97,88,170, 0.15);
}

.cookieControl__Bar::before {
  content: '';
  z-index: 10;
  position: absolute;
  background-color: #EE2334;
  height: 4px;
  width: 100%;
}

.cookieControl__Bar.cookieControl__Bar h3 {
  font-weight: 700;
}

.cookieControl__Bar.cookieControl__Bar h3, .cookieControl__Bar.cookieControl__Bar p {
  font-family: inherit;
  color: #140A4B;
}

.cookieControl__ModalContent {
  overflow-y: auto !important;
  border-radius: 6px;
}

@media screen and (min-width: 376px) {
  .cookieControl__Bar::before {
    content: '';
    z-index: 10;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #EE2334;
    width: 4px;
    height: 100%;
  }

  .cookieControl__BarButtons {
    flex-direction: row !important;
    justify-content: flex-start !important;
  }
  .cookieControl__BarButtons button {
    margin-top: 0 !important;
    width: auto !important;
  }
  .cookieControl__Bar button + button {
    margin-left: 10px !important;
  }
}
</style>
