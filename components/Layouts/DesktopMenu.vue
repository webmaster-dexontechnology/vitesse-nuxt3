<script setup>
defineProps({
  groupMenu: Array,
  langActive: Boolean,
  headerActive: Number,
  activeIndex: Number,
  hoverIndex: Number,
})
defineEmits(['open', 'close', 'hoverListitem', 'hover'])

const { t } = useI18n()
</script>

<template>
  <div class="desktop lg:flex hidden flex-1 items-center justify-end text-primary dark:text-white relative ">
    <div
      v-for="(item, index) in groupMenu" :key="item.id"
      class="cursor-pointer menu-item flex items-center xl:text-sm lg:text-xs xl:px-4 lg:px-1.5"
      @mouseover="$emit('open', index)"
      @mouseleave="$emit('close')"
    >
      <div
        class="group/item [&>a]:hover:text-secondary-red-100 [&>a]:transition [&>a]:duration-200 [&>a]:ease-in-out [&>a]:font-medium relative inline-flex items-center focus:outline-none whitespace-nowrap"
      >
        <a
          v-if="item.target === '_blank'" :href="item.href" target="_blank" rel="noopener noreferrer"
        >{{ item.name }}</a>
        <NuxtLink
          v-else :to="localePath({ path: item.href })" class="flex items-center navigation"
          :class="{ 'text-secondary-red-100': headerActive === index }"
        >
          {{ item.name }}
          <div v-if="item.submenu?.length > 0" class="w-[20px]">
            <svg class="ml-1 group-hover/item:rotate-180 transition-transform" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 10l5 5l5-5" /></svg>
          </div>
        </NuxtLink>

        <!-- Large Menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="index === 0 && activeIndex === index && item.submenu?.length > 0"
            class="z-50 absolute top-0 translate-y-1 xl:left-1/2 xl:-translate-x-1/2 -left-1/1  mt-3 w-screen max-w-2xl  transform px-4 sm:px-0 lg:max-w-3xl"
          >
            <div
              class="overflow-hidden translate-y-4 rounded-md shadow-custom-2xl shadow-shadow-light/10 dark:shadow-shadow-dark/1"
            >
              <div class="z-10 relative grid grid-cols-2 cursor-default bg-white">
                <div class="main-menu flex flex-col relative ">
                  <NuxtLink
                    v-for="(list_item, itemIndex) in item.submenu" :key="list_item.name"
                    :to="localePath({ path: list_item.href })"
                    class="
                      group/main px-3 py-2 items-center rounded-md cursor-pointer relative
                      focus:outline-none visited:text-white whitespace-normal border-0 h-[70px] transition ease-in-out duration-200
                    " :class=" itemIndex === 6 ? 'hidden' : '' || itemIndex === hoverIndex ? 'active flex scale-95' : 'flex'"
                    @mouseover="$emit('hover', itemIndex)"
                  >
                    <div v-if="!list_item.indicator" class="flex main-menu-inner items-center origin-center">
                      <div
                        class="flex bg-red-100 rounded-md h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12"
                      >
                        <div v-if="list_item.icon === 'integrity'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconIntegriyIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'advancendt'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconAdvanceNdtIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'training'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconTrainingIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'inspection'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconInspectionIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'basicndt'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconBasicNdtIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'redev'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconReDevIcon class="h-8" />
                        </div>
                      </div>
                      <div class="ml-3 pr-3">
                        <p
                          class="text-sm font-semibold tracking-tight group-hover/main:text-secondary-red-100" :class="hoverIndex === itemIndex ? 'text-secondary-red-100' : 'text-primary'"
                        >
                          {{ list_item.name }}
                        </p>
                        <p
                          class="text-xs font-medium tracking-tight group-hover/main:text-secondary-red-100/60" :class="hoverIndex === itemIndex ? 'text-secondary-red-100/50' : 'text-primary/80'"
                        >
                          {{ list_item.description }}
                        </p>
                      </div>
                    </div>
                  </NuxtLink>
                  <div v-for="list_item in item.submenu[6]" :key="list_item.name" class="indicator z-[-1]" />
                </div>
                <div
                  class="border-l-[1px] border-l-secondary-gray-100 submenu visited:text-white whitespace-normal relative max-h-[400px]"
                >
                  <div
                    v-for="(list_item, listitemIndex) in item.submenu" v-show="listitemIndex === hoverIndex "
                    :key="list_item.name" class="submenu-inner ml-6 pt-3"
                  >
                    <div
                      v-for="(list_menu, listmenuIndex) in list_item.listmenu" :key="list_menu.name"
                      class="group/submenu group/arrow flex flex-col justify-center mb-2 cursor-pointer text-[13px] text-primary/80 overflow-hidden"
                    >
                      <NuxtLink
                        class="submenu--list cursor-pointer"
                        :to="localePath({ path: list_menu.href })"
                        @mouseover="$emit('hoverListitem', list_menu, listmenuIndex)"
                      >
                        <div
                          class="flex group-hover/submenu:text-secondary-red-100"
                        >
                          <span class="font-medium">{{ list_menu.name }}</span>
                          <div
                            v-if="list_menu.list_submenu?.length"
                            class="text-secondary-red-100 w-3 ml-2.5 text-[10px]"
                          >
                            <svg
                              class="transition-all duration-200  ease-in-out"
                              :class="list_menu.active > 0 ? '-rotate-180' : ''
                                || !list_menu.active ? 'not-active rotate-0' : ''"
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
                      </NuxtLink>

                      <!-- Submenu Active -->
                      <div
                        v-if="list_menu.active"
                        class="submenu--list-submenu overflow-hidden relative"
                      >
                        <NuxtLink
                          v-for="list_submenu in list_menu.list_submenu" :key="list_submenu.name"
                          :to="localePath({ path: list_submenu.href })"
                        >
                          <div class="flex py-1.5 hover:text-secondary-red-100">
                            <span class="ml-3 flex items-center font-medium">
                              <svg
                                class="mr-1.5" xmlns="http://www.w3.org/2000/svg" width="7" height="7"
                                viewBox="0 0 16 16"
                              >
                                <path fill="currentColor" d="M8 4a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z" />
                              </svg>
                              {{ list_submenu.name }}
                            </span>
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BannerCaseStudie :btn="t('button.studie')" link="case-studies" />
            </div>
          </div>
        </transition>

        <!-- Small Menu -->
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <div
            v-if="index === 1 && activeIndex === index && item.submenu?.length > 0
              || index === 2 && activeIndex === index && item.submenu?.length > 0
              || index === 4 && activeIndex === index && item.submenu?.length > 0
              || index === 6 && activeIndex === index && item.submenu?.length > 0"
            class="z-50 absolute top-0 translate-y-1 left-1/2 mt-3 w-[650px] -translate-x-1/2 transform px-4 sm:px-0"
            :class="index === 1 ? 'max-w-3xl' : 'max-w-sm'"
          >
            <div
              class="overflow-hidden translate-y-4 rounded-md shadow-custom-2xl shadow-shadow-light/10 dark:shadow-shadow-dark/1"
            >
              <div class="relative grid p-5 cursor-default bg-white">
                <div class="main-menu flex flex-col">
                  <div
                    v-for="(list_item, itemIndex) in item.submenu" :key="list_item.name"
                    class="
                      flex flex-col cursor-pointer focus:outline-none visited:text-white whitespace-normal relative
                    "
                    @mouseover="$emit('hover', itemIndex)"
                  >
                    <NuxtLink
                      :to="localePath({ path: list_item.href })"
                      class="group/main flex scale-[100%] items-center mb-4"
                    >
                      <div
                        class="flex bg-red-100 rounded-md h-10 w-10 shrink-0 items-center justify-center sm:h-12 sm:w-12"
                      >
                        <div v-if="list_item.icon === 'pipeline'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconPipelineIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'industries'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconIndustiresIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'about'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconAboutusIcon class="h-8" />
                        </div>
                        <div v-if="list_item.icon === 'sustainability'" class="h-8.5 w-8.5 flex items-center justify-center">
                          <IconSustainabilityIcon class="h-8" />
                        </div>
                      </div>
                      <div class="ml-3 pr-3">
                        <p
                          class="text-sm font-bold tracking-tight group-hover/main:text-secondary-red-100 text-primary"
                        >
                          {{ list_item.name }}
                        </p>
                        <p
                          class="line-clamp-2 text-xs font-medium tracking-tight group-hover/main:text-secondary-red-100/60 text-primary/70"
                        >
                          {{ list_item.description }}
                        </p>
                      </div>
                    </NuxtLink>
                    <div
                      class="flex flex-col submenu-inner gap-x-6"
                    >
                      <div
                        v-for="(list_menu, listmenuIndex) in list_item.listmenu" :key="list_menu.name"
                        class="group/submenu group/arrow [&:not(:last-child)]:mb-2.5 text-[13px] text-primary/80 mb-2.5"
                      >
                        <NuxtLink
                          class="submenu--list flex"
                          :to="localePath({ path: list_menu.href })"
                          @mouseover="$emit('hoverListitem', list_menu, listmenuIndex)"
                        >
                          <div
                            class="flex group-hover/submenu:text-secondary-red-100 items-start font-medium"
                          >
                            {{ list_menu.name }}
                          </div>
                        </NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BannerCaseStudie
                v-if="index === 2"
                :btn="t('button.studie')"
                link="case-studies"
                :content="$t('case_studies.banner.title')"
              />
            </div>
          </div>
        </transition>
      </div>
    </div>
    <UIChangeLangeuage class="cursor-pointer menu-item flex items-center relative px-2" />
  </div>
</template>
