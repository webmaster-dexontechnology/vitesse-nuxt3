<script setup>
const props = defineProps({
  groupMenu: Array,
})

const emits = defineEmits(['closeSideMenu'])
const router = useRouter()
const { t } = useI18n()
const activeIndex = ref(null)
const activeSubmenuIndex = ref(null)
const isActive = ref(null)
const filteredMenu = computed(() => {
  return props.groupMenu.filter((item) => {
    return item
  })
})
function openMenu(item, index) {
  activeIndex.value = index
  isActive.value = true
  openeAllMenu()
}

function openSubmenu(item, index) {
  activeSubmenuIndex.value = index
  item.active = !item.active
}

function openeAllMenu() {
  const item = props.groupMenu
  item.forEach((element) => {
    element.active = true
  })
}

function closeAllMenu() {
  activeIndex.value = null
  isActive.value = false
  const item = props.groupMenu
  item.forEach((element) => {
    element.active = false
  })
}

function handleClose() {
  emits('closeSideMenu')
  closeAllMenu()
}
</script>

<template>
  <div class="mobile">
    <div class="fixed inset-0 z-[-1] overflow-hidden bg-[#0e0c1f]/50 backdrop-blur-[3px]" aria-hidden="true" data-headlessui-state="open" @click="handleClose" />
    <div class="min-h-full w-screen bg-white shadow-2xl ring-1 ring-secondary-gray-200 sm:w-[min(22rem)]">
      <nav class="h-full text-base">
        <div class="dark:bg-red-gradient h-[50px] flex items-center border-b border-secondary-gray-300 bg-white p-4 lg:h-auto">
          <div class="cursor-pointer">
            <svg v-if="isActive" class="text-primary dark:text-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" @click="closeAllMenu"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292" /></svg>
            <svg v-else class="text-primary dark:text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" @click="handleClose"><path fill="currentColor" d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L12 13.4Z" /></svg>
          </div>
          <div class="ml-auto">
            <NuxtLink :to="localePath({ name: 'index' })" class="cursor-pointer" @click="handleClose">
              <Logo :affix-active="false" />
            </NuxtLink>
          </div>
        </div>
        <div
          class="submenu my-2 h-full max-h-full px-4"
        >
          <div v-for="(item, index) in filteredMenu" :key="item.id" class="xs:text-sm relative flex flex-col text-xs">
            <div v-if="!item.active" class="py-2.5">
              <a
                v-if="item.target === '_blank'" :href="item.href" target="_blank" rel="noopener noreferrer"
              ><span class="font-medium text-primary">{{ item.name }}</span></a>
              <div
                v-else
                class="navigation flex items-center"
              >
                <NuxtLink class="w-auto whitespace-nowrap" :to="localePath({ path: item.href })" @click="handleClose">
                  <span class="font-medium text-primary">{{ item.name }}</span>
                </NuxtLink>
                <div v-if="item.submenu" class="ml-auto w-full flex cursor-pointer justify-end" @click="item.submenu ? openMenu(item, index) : null">
                  <svg
                    class="ml-10 text-primary -rotate-90" height="18" width="18" viewBox="0 0 24 24"
                  ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m7 10l5 5l5-5" /></svg>
                </div>
              </div>
            </div>
            <div v-if="index === activeIndex" class="mobile-submenu py-2.5">
              <div
                v-for="(submenu, submenuIndex) in item.submenu" :key="submenu"
                class="mb-0"
              >
                <div class="flex items-center pb-3">
                  <NuxtLink class="flex" :to="localePath({ path: submenu.href })" @click="handleClose">
                    <div v-if="submenu.icon === 'integrity'" class="mr-2 flex items-center justify-center">
                      <IconIntegriyIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'advancendt'" class="mr-2 flex items-center justify-center">
                      <IconAdvanceNdtIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'training'" class="mr-2 flex items-center justify-center">
                      <IconTrainingIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'inspection'" class="mr-2 flex items-center justify-center">
                      <IconInspectionIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'basicndt'" class="mr-2 flex items-center justify-center">
                      <IconBasicNdtIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'redev'" class="mr-2 flex items-center justify-center">
                      <IconReDevIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'pipeline'" class="mr-2 flex items-center justify-center">
                      <IconPipelineIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'industries'" class="mr-2 flex items-center justify-center">
                      <IconIndustiresIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'about'" class="mr-2 flex items-center justify-center">
                      <IconAboutusIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'history'" class="mr-2 flex items-center justify-center">
                      <IconHistoryIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'global'" class="mr-2 flex items-center justify-center">
                      <IconGlobalOperationsIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'career'" class="mr-2 flex items-center justify-center">
                      <IconCareerIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div v-if="submenu.icon === 'sustainability'" class="mr-2 flex items-center justify-center">
                      <IconSustainabilityIcon class="h-[20px] w-[20px]" />
                    </div>
                    <div class="xs:text-sm text-xs font-semibold tracking-tight text-primary">
                      {{ submenu.name }}
                    </div>
                  </NuxtLink>
                </div>

                <ul v-if="submenu.listmenu" class="mobile-submenu-inner grid mb-3 gap-y-2 border-l-2 border-secondary-gray-300 py-2 pl-4">
                  <li
                    v-for="(listmenu, listmenuIndex) in submenu.listmenu"
                    :key="listmenu" class="m-0"
                  >
                    <div
                      class="flex items-center"
                      @click="openSubmenu(listmenu, listmenuIndex)"
                    >
                      <NuxtLink
                        :to="localePath({ path: listmenu.href })"
                        @click="handleClose"
                      >
                        <span class="font-medium">{{ listmenu.name }}</span>
                      </NuxtLink>
                      <div v-if="listmenu.list_submenu" class="ml-auto">
                        <svg
                          :class="listmenu.active ? '-rotate-180' : 'rotate-0 '"
                          class="ml-10 text-primary transition-transform duration-200 ease-in" height="18" width="18" viewBox="0 0 24 24"
                        ><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m7 10l5 5l5-5" /></svg>
                      </div>
                    </div>
                    <ul
                      v-if="listmenu.active"
                      class="mobile-submenu-deep p-0"
                    >
                      <li
                        v-for="listmenu_child in listmenu.list_submenu"
                        :key="listmenu_child"
                        class="grid m-0"
                      >
                        <NuxtLink
                          class="flex items-center py-1.5"
                          :to="localePath({ path: listmenu_child.href })"
                          @click="handleClose"
                        >
                          <div class="mr-1">
                            <svg class="text-primary/70" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M5 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z" clip-rule="evenodd" /></svg>
                          </div>
                          <span class="font-medium">{{ listmenu_child.name }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap gap-2 px-4 py-3">
          <UIButton
            size="sm"
            class="whitespace-nowrap rounded-full"
            @click="handleClose"
            @on-click="router.push(localePath({ path: '/career-at-dexon' }))"
          >
            {{ t('button.career') }}
          </UIButton>
          <UIButton
            size="sm"
            theme="outline"
            class="whitespace-nowrap rounded-full"
            @click="handleClose"
            @on-click="router.push(localePath({ path: '/contact' }))"
          >
            {{ t('button.quote') }}
          </UIButton>
        </div>
      </nav>
    </div>
  </div>
</template>
