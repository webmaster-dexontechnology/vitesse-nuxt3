<script setup>
const emits = defineEmits(['onClick'])
const { selectedPosition } = usePosition()
const { t } = useI18n()
const route = useRoute()
const search = ref('')
const category = ref(t('career.category.all'))
const categoryActive = ref(false)
const location = ref(t('career.location.th'))
const locationActive = ref(false)

function openCategory() {
  categoryActive.value = true
}

function closeCategory() {
  categoryActive.value = false
}

function onCategorySelect(event) {
  category.value = event
}

function openLocation() {
  locationActive.value = true
}

function closeLocation() {
  locationActive.value = false
}

function onLocationSelect(event) {
  location.value = event
}
function onSearch() {
  emits('onClick', category.value, location.value, search.value)
}
</script>

<template>
  <div
    class="shadow-custom-lg mt-custom-xl z-10 rounded-md bg-white shadow-shadow-light/10 lg:mt-0 lg:w-[min(56rem)] xl:w-[min(66rem)]"
  >
    <div class="flex flex-wrap border-t-4 border-secondary-red-100 divide-x divide-gray-200 lg:border-l-4 lg:border-t-0">
      <div class="w-full px-6 py-6 lg:w-[30%]">
        <label for="search" class="text-md mb-2 font-bold uppercase">
          {{ t('career.search.title') }}
        </label>
        <div class="flex items-center border-b border-b-gray-200 pb-1.5">
          <svg class="mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" /></svg>
          <UIInput
            v-model="search" class="w-full" type="text" custom-class="text-primary/70 capitalize text-[0.95rem] placeholder:capitalize placeholder:text-gray-400 w-full" :placeholder="t('career.search.search')"
          />
        </div>
      </div>
      <div class="gap-custom-md w-full flex flex-col px-6 py-6 lg:w-[30%] lg:flex-row lg:items-center">
        <div class="relative w-full cursor-pointer">
          <UIDropdown
            dropdown-class="max-w-xl"
            label-class="uppercase mb-2 font-bold text-md"
            select-class="text-gray-400 capitalize text-[0.95rem] flex items-center"
            label-select="text-gray-400 font-medium"
            :options="selectedPosition"
            :selected="t('career.category.all')"
            :label="t('career.category.title')"
            @on-select="onCategorySelect"
          />
        </div>
      </div>
      <div class="gap-custom-md w-full flex flex-col px-6 py-6 lg:w-[40%] lg:flex-row lg:items-center">
        <div class="relative w-full cursor-pointer">
          <UIDropdown
            label-class="uppercase mb-2 font-bold text-md"
            select-class="text-gray-400 capitalize text-[0.95rem] flex items-center"
            label-select="text-gray-400 font-medium"
            :options="[
              {
                value: t('career.location.th'),
              },
              {
                value: t('career.location.nl'),
              },
            ]"
            :selected="t('career.location.th')"
            :label=" t('career.location.title')"
            @on-select="onLocationSelect"
          />
        </div>
        <ButtonHover
          :career="category"
          :location="location"
          route-path="/career-at-dexon" class="lg:ml-auto"
          button-class="cursor-pointer bg-red-gradient rounded-md text-white py-3 px-4 font-medium text-md transition duration-200 ease-in-out"
          :button-text="t('button.findjobs')" @on-click="onSearch"
        />
      </div>
    </div>
  </div>
</template>
