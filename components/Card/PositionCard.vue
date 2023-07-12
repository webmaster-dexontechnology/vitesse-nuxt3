<i18n locale="en" src="@/lang/en/career/position.json"></i18n>

<i18n locale="th" src="@/lang/th/career/position.json"></i18n>

<script setup>
const props = defineProps({
  category: String,
  myLocation: {
    type: String,
  },
  search: {
    type: String,
  },
  careerActive: {
    type: Boolean,
    default: false,
  },
})
const { jobPosition } = usePosition()
const { selectedPosition, selectLocation } = usePosition()
const { t, rt } = useI18n()
const router = useRouter()
const activeIndex = ref(0)
const activeTabIndex = ref(0)
const activeLocation = ref(0)
const showAmout = ref(3)
const location = ref(selectLocation[0].value)
const selected = ref({ value: selectedPosition[0].value })

const filteredPosition = computed(() => {
  // eslint-disable-next-line array-callback-return
  return jobPosition.filter((item) => {
    if (props.careerActive) {
      if (props.category === selected.value.value)
        return rt(item.type) && t(item.location) === t(props.myLocation) && rt(item.title).toLowerCase().includes(props.search.toLowerCase())
      else
        return rt(item.type) === props.category && t(item.location) === t(props.myLocation) && rt(item.title).toLowerCase().includes(props.search.toLowerCase())
    }
    if (!props.careerActive) {
      if (selected.value.value === selectedPosition[0].value)
        return rt(item.type) && t(item.location) === t(location.value)
      else
        return rt(item.type) === selected.value.value && t(item.location) === t(location.value)
    }
  })
})
const filterAmountPosition = computed(() => {
  return filteredPosition.value.slice(0, showAmout.value)
})

function compare(a, b) {
  if (a.type < b.type)
    return -1
  if (a.type > b.type)
    return 1
  return 0
}
const sortPosition = computed(() => {
  return filterAmountPosition.value.sort(compare)
})

const hover = (index) => {
  activeIndex.value = index
}

const tabActive = (item, index) => {
  activeTabIndex.value = index
  selected.value = item
}

const showMore = () => {
  showAmout.value = jobPosition.length
}

const hideMore = () => {
  showAmout.value = 3
}

const onSelectLocation = (item, index) => {
  activeLocation.value = index
  location.value = item.value
}
const handleClick = (event) => {
  router.push(event)
}
</script>

<template>
  <div>
    <div v-if="!props.careerActive" class="flex flex-wrap gap-2 mb-custom-lg">
      <div
        v-for="(item, index) in selectLocation" :key="index"
        class="cursor-pointer flex items-center gap-3 px-3 py-2 rounded-[4px] transition duration-200 ease-linear"
        :class="activeLocation === index ? 'bg-white shadow-shadow-light/10 shadow-custom-md' : 'bg-white'"
        @click="onSelectLocation(item, index)"
      >
        <svg
          v-if="item.value === t('career.location.th')"
          id="b" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="19" height="13"
          viewBox="0 0 33.25 20.88"
        >
          <rect y="10.08" width="33.23" height="10.77" fill="#fff" />
          <rect width="33.23" height="12.46" fill="#fff" />
          <rect width="33.23" height="2.93" fill="#dd3330" />
          <rect y="17.95" width="33.23" height="2.93" fill="#dd3330" />
          <rect y="5.94" width="33.25" height="8.86" fill="#2f4794" />
        </svg>
        <svg v-if="item.value === t('career.location.nl')" id="a" class="w-6 h-6" data-name="4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 33.6 19.6">
          <defs>
            <clipPath id="c">
              <rect width="33.6" height="19.6" fill="none" />
            </clipPath>
          </defs>
          <g id="b" data-name="NETHERLANDS">
            <g clip-path="url(#c)">
              <rect width="33.6" height="19.6" fill="#314588" />
              <rect width="33.6" height="13.1" fill="#fff" />
              <rect width="33.6" height="6.5" fill="#9f1330" />
            </g>
          </g>
        </svg>
        <span class="text-base font-medium">{{ item.value }}</span>
      </div>
    </div>
    <div class="flex flex-wrap md:gap-x-10 gap-x-6 lg:gap-y-0 gap-y-3 mb-custom-lg">
      <div v-if="props.category">
        <a class="text-secondary-gray-400 font-semibold md:text-lg text-md cursor-pointer capitalize">{{ t(props.category) }}</a>
      </div>
      <div v-for="(item, index) in selectedPosition" v-else :key="item">
        <a
          :class="activeTabIndex === index ? 'text-secondary-red-100' : ''"
          class="text-secondary-gray-400 font-semibold md:text-lg text-md cursor-pointer capitalize"
          @click="tabActive(item, index)"
        >
          {{ rt(item.value) }}
        </a>
      </div>
    </div>
    <div
      class="flex flex-col relative"
      :style="{
        minHeight: 'auto',
      }"
    >
      <transition-group
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-5 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="absolute delay-200 transition duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform translate-y-5 opacity-0"
        tag="ul"
        class="pl-0 gap-y-custom-sm grid"
      >
        <li
          v-for="(item, index) in sortPosition" :key="index"
          class="border border-secondary-gray-100 w-full sm:px-6 px-4 sm:py-8 py-6 flex md:flex-row flex-col bg-white cursor-pointer transition ease-linear duration-200 rounded-lg md:items-center md:justify-normal justify-center relative z-0"
          :class="activeIndex === index ? 'shadow-shadow-light/10 shadow-custom-lg z-20 scale-[102%]' : 'scale-100 z-0'"
          @mouseover="hover(index)"
          @click="handleClick(`/career-at-dexon/${rt(item.id)}`)"
        >
          <div
            class="grid md:grid-cols-2 w-full"
          >
            <div class="w-full">
              <h3 class="text-primary lg:text-2xl md:text-xl text-lg font-semibold mb-4">
                {{ rt(item.title) }}
              </h3>
              <div class="flex flex-wrap gap-3">
                <div
                  class="flex flex-row gap-x-1 items-center justify-center bg-slate-100 rounded-full px-3 py-1"
                >
                  <svg class="text-primary/80" width="18" height="18" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35ZM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.5-1.988 5.438T12 22Zm0-11.8Z"
                    />
                  </svg>
                  <span class="text-primary/80 text-md font-medium">{{ rt(item.location) }}</span>
                </div>
                <div
                  class="flex flex-row gap-x-1 items-center justify-center bg-slate-100 rounded-full px-3 py-1"
                >
                  <svg class="text-primary/80" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" /></svg>
                  <span class="text-primary/80 text-md font-medium">{{ rt(item.time) }}</span>
                </div>
                <div
                  class="flex flex-row gap-x-1 items-center justify-center bg-slate-100 rounded-full px-3 py-1"
                >
                  <svg class="text-primary/80" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M14 6V4h-4v2h4zM4 8v11h16V8H4zm18-2v15H2.01V6H8V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v2h6z" /></svg>
                  <span class="text-primary/80 text-md font-medium">{{ rt(item.skill) }}</span>
                </div>
              </div>
            </div>
            <div class="md:ml-auto md:mt-0 mt-custom-lg flex sm:flex-nowrap flex-wrap items-center gap-x-6 gap-y-4">
              <UIButton :theme="activeIndex === index ? '' : 'outline'" size="sm" class="rounded-md">
                <span>{{ t('button.apply') }}</span>
              </UIButton>
              <div class="rounded-full flex items-center justify-center cursor-pointer">
                <svg class="text-secondary-red-100" width="28" height="28" viewBox="0 0 512 512">
                  <circle
                    cx="128" cy="256" r="48" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  />
                  <circle
                    cx="384" cy="112" r="48" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  />
                  <circle
                    cx="384" cy="400" r="48" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                  />
                  <path
                    fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="32" d="m169.83 279.53l172.34 96.94m0-240.94l-172.34 96.94"
                  /></svg>
              </div>
            </div>
          </div>
        </li>
      </transition-group>
      <div class="text-center mt-custom-xl cursor-pointer text-secondary-red-100 font-bold">
        <div v-if="filteredPosition.length > 3 && filteredPosition.length !== sortPosition.length " class="flex items-center justify-center gap-x-2" @click="showMore()">
          <span>{{ t('header.show') }}</span><div class="h-[20px] flex items-center">
            <svg class="text-secondary-red-100 transition-transform duration-200 ease-in-out" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" /></svg>
          </div>
        </div>
        <div v-else-if="sortPosition.length > 3" class="flex items-center justify-center gap-x-2" @click="hideMore()">
          <span>{{ t('header.hide') }}</span><div class="h-[20px] flex items-center">
            <svg class="text-secondary-red-100 transition-transform duration-200 rotate-180 ease-in-out" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
