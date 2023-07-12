<script setup>
const { y } = useWindowScroll()
const localePath = useLocalePath()
const { t } = useI18n()
const navbarMobile = ref(null)
const navbarDesktop = ref(null)
const navbarSize = ref(0)
const activeIndex = ref(null)
const hoverIndex = ref(0)
const hoverListIndex = ref(null)
const activeSideMenu = ref(false)
const affixActive = ref(true)
const { width } = useWindowSize()
const groupMenu = ref([
  {
    id: 0,
    name: t('header[0].name'),
    href: '/inspection-services',
    active: false,
    submenu: [
      {
        name: t('header[0].submenu[0].name'),
        href: '/inspection-services/integrity-services',
        icon: 'integrity',
        description: t('header[0].submenu[0].description'),
        active: false,
        listmenu: [
          {
            name: t('header[0].submenu[0].list_menu[0].name'),
            href: '/inspection-services/integrity-services/risk-based-inspection-services-api-580',
            active: null,
          },
          {
            name: t('header[0].submenu[0].list_menu[1].name'),
            href: '/inspection-services/integrity-services/fitness-for-service-api-579',
            active: null,
          },
          {
            name: t('header[0].submenu[0].list_menu[2].name'),
            href: '/inspection-services/integrity-services/dexon-inspection-database',
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[0].list_menu[2].list_submenu[0].name'),
                href: '/inspection-services/integrity-services/dexon-inspection-database/3d-scanning-services',
              },
            ],
          },
        ],
      },
      {
        name: t('header[0].submenu[1].name'),
        href: '/inspection-services/advanced-ndt-services',
        icon: 'advancendt',
        description: t('header[0].submenu[1].description'),
        active: false,
        listmenu: [
          {
            name: t('header[0].submenu[1].list_menu[0].name'),
            href: '/inspection-services/advanced-ndt-services/drone-services',
            active: null,
          },
          {
            name: t('header[0].submenu[1].list_menu[1].name'),
            href: '/inspection-services/advanced-ndt-services/tube-inspection-services',
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[1].list_menu[1].list_submenu[0].name'),
                href: '/inspection-services/advanced-ndt-services/tube-inspection-services/remote-field-technology-rft',
              },
            ],
          },
          {
            name: t('header[0].submenu[1].list_menu[2].name'),
            href: null,
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[1].list_menu[2].list_submenu[0].name'),
                href: '/inspection-services/advanced-ndt-services/advanced-ultrasonic-ut-inspection/phased-array-inspections',
              },
              {
                name: t('header[0].submenu[1].list_menu[2].list_submenu[1].name'),
                href: '/inspection-services/advanced-ndt-services/advanced-ultrasonic-ut-inspection/time-of-flight-defraction-tofd',
              },
              {
                name: t('header[0].submenu[1].list_menu[2].list_submenu[2].name'),
                href: '/inspection-services/advanced-ndt-services/advanced-ultrasonic-ut-inspection/long-range-ultrasonic-testing-lrut',
              },
              {
                name: t('header[0].submenu[1].list_menu[2].list_submenu[3].name'),
                href: '/inspection-services/advanced-ndt-services/advanced-ultrasonic-ut-inspection/corrosion-under-support-cus',
              },
            ],
          },
          {
            name: t('header[0].submenu[1].list_menu[3].name'),
            href: null,
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[1].list_menu[3].list_submenu[0].name'),
                href: '/inspection-services/advanced-ndt-services/other-advanced/pulsed-eddy-current-lyft',
              },
              {
                name: t('header[0].submenu[1].list_menu[3].list_submenu[1].name'),
                href: '/inspection-services/advanced-ndt-services/other-advanced/alternating-current-field-measurement-acfm',
              },
              {
                name: t('header[0].submenu[1].list_menu[3].list_submenu[2].name'),
                href: '/inspection-services/advanced-ndt-services/other-advanced/eddy-current-array-testing',
              },
              {
                name: t('header[0].submenu[1].list_menu[3].list_submenu[3].name'),
                href: '/inspection-services/advanced-ndt-services/other-advanced/computed-and-digital-radiography',
              },
            ],
          },
        ],
      },
      {
        name: t('header[0].submenu[2].name'),
        href: '/dexon-training-center',
        icon: 'training',
        description: t('header[0].submenu[2].description'),
        active: false,
        listmenu: [
          {
            name: t('header[0].submenu[2].list_menu[0].name'),
            href: '/dexon-training-center/training-schedule',
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[0].name'),
                href: '/dexon-training-center/training-schedule/api-th',
              },
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[1].name'),
                href: '/dexon-training-center/training-schedule/api-en',
              },
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[2].name'),
                href: '/dexon-training-center/training-schedule/asme',
              },
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[3].name'),
                href: '/dexon-training-center/training-schedule/ndt',
              },
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[4].name'),
                href: '/dexon-training-center/training-schedule/gwo',
              },
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[5].name'),
                href: '/dexon-training-center/training-schedule/irata',
              },
              {
                name: t('header[0].submenu[2].list_menu[0].list_submenu[6].name'),
                href: '/dexon-training-center/training-schedule/first-aid',
              },
            ],
          },
          {
            name: t('header[0].submenu[2].list_menu[1].name'),
            href: '/dexon-training-center/training-registration',
            active: null,
          },
          {
            name: t('header[0].submenu[2].list_menu[2].name'),
            href: '/dexon-training-center/training-courses',
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[0].name'),
                href: '/dexon-training-center/training-courses/penetrant-testing',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[1].name'),
                href: '/dexon-training-center/training-courses/magnetic-particle-testing',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[2].name'),
                href: '/dexon-training-center/training-courses/ultrasonic-testing',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[3].name'),
                href: '/dexon-training-center/training-courses/ultrasonic-thickness',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[4].name'),
                href: '/dexon-training-center/training-courses/visual-inspection',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[5].name'),
                href: '/dexon-training-center/training-courses/eddy-current-testing',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[6].name'),
                href: '/dexon-training-center/training-courses/radiographic-testing',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[7].name'),
                href: '/dexon-training-center/training-courses/api-training',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[8].name'),
                href: '/dexon-training-center/training-courses/asnt-basic-training-level-3',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[9].name'),
                href: '/dexon-training-center/training-courses/advanced-ndt-techniques',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[10].name'),
                href: '/dexon-training-center/training-courses/api-certification',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[11].name'),
                href: '/dexon-training-center/training-courses/rope-access-training',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[12].name'),
                href: '/dexon-training-center/training-courses/asme-training',
              },
              {
                name: t('header[0].submenu[2].list_menu[2].list_submenu[13].name'),
                href: '/dexon-training-center/training-courses/gwo-training',
              },
            ],
          },
        ],
      },
      {
        name: t('header[0].submenu[3].name'),
        href: '/inspection-services/inspection-services-rmi',
        icon: 'inspection',
        description: t('header[0].submenu[3].description'),
        active: false,
        listmenu: [
          {
            name: t('header[0].submenu[3].list_menu[0].name'),
            href: '/inspection-services/inspection-services-rmi/api-510-pressure-vessel-inspection',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[1].name'),
            href: '/inspection-services/inspection-services-rmi/api-570-piping-inspection',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[2].name'),
            href: '/inspection-services/inspection-services-rmi/tank-inspection-api-653',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[3].name'),
            href: '/inspection-services/inspection-services-rmi/boiler-inspection-asme',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[4].name'),
            href: '/inspection-services/inspection-services-rmi/crane-inspection',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[5].name'),
            href: '/inspection-services/inspection-services-rmi/oil-tank-truck-inspection',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[6].name'),
            href: null,
            active: false,
            list_submenu: [
              {
                name: t('header[0].submenu[3].list_menu[6].list_submenu[0].name'),
                href: '/inspection-services/inspection-services-rmi/flare-inspection/rope-access',
              },
            ],
          },
          {
            name: t('header[0].submenu[3].list_menu[7].name'),
            href: '/inspection-services/inspection-services-rmi/lifting-gear-inspection-leea',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[8].name'),
            href: '/inspection-services/inspection-services-rmi/wind-turbine-inspections-maintenance',
            active: null,
          },
          {
            name: t('header[0].submenu[3].list_menu[9].name'),
            href: '/inspection-services/inspection-services-rmi/paint-and-coating-inspection-services-nace',
            active: null,
          },
        ],
      },
      {
        name: t('header[0].submenu[4].name'),
        href: '/inspection-services/basic-ndt-service',
        icon: 'basicndt',
        description: t('header[0].submenu[4].description'),
        active: false,
        listmenu: [
          {
            name: t('header[0].submenu[4].list_menu[0].name'),
            href: '/inspection-services/basic-ndt-service/hardness-testing',
            active: null,
          },
          {
            name: t('header[0].submenu[4].list_menu[1].name'),
            href: '/inspection-services/basic-ndt-service/magnetic-particle-testing',
            active: null,
          },
          {
            name: t('header[0].submenu[4].list_menu[2].name'),
            href: '/inspection-services/basic-ndt-service/penetrant-testing',
            active: null,
          },
          {
            name: t('header[0].submenu[4].list_menu[3].name'),
            href: '/inspection-services/basic-ndt-service/positive-material-identification',
            active: null,
          },
          {
            name: t('header[0].submenu[4].list_menu[4].name'),
            href: '/inspection-services/basic-ndt-service/conventional-radiographic-testing',
            active: null,
          },
        ],
      },
      {
        name: t('header[0].submenu[5].name'),
        href: '/research-development-engineering',
        icon: 'redev',
        description: t('header[0].submenu[5].description'),
        active: false,
        listmenu: [
          {
            name: t('header[0].submenu[5].list_menu[0].name'),
            href: '/research-development-engineering',
            active: null,
          },
        ],
      },
      {
        indicator: true,
      },
    ],
  },
  {
    id: 1,
    name: t('header[1].name'),
    href: '/pipeline-services',
    active: false,
    submenu: [
      {
        name: t('header[1].submenu[0].name'),
        href: '/pipeline-services/intelligent-pigging',
        icon: 'pipeline',
        description: t('header[0].submenu[0].description'),
        listmenu: [
          {
            name: t('header[1].submenu[0].list_menu[0].name'),
            href: '/pipeline-services/intelligent-pigging/pipeline-pigging',
          },
          {
            name: t('header[1].submenu[0].list_menu[1].name'),
            href: '/pipeline-services/intelligent-pigging/in-line-inspection',
          },
          {
            name: t('header[1].submenu[0].list_menu[2].name'),
            href: '/pipeline-services/intelligent-pigging/ultrasonic-in-line-inspection-ili-pigging',
          },
          {
            name: t('header[1].submenu[0].list_menu[3].name'),
            href: '/pipeline-services/intelligent-pigging/ultrasonic-rotary',
          },
          {
            name: t('header[1].submenu[0].list_menu[4].name'),
            href: '/pipeline-services/intelligent-pigging/ultrasonic-multi-channel',
          },
          {
            name: t('header[1].submenu[0].list_menu[5].name'),
            href: '/pipeline-services/intelligent-pigging/ultrasonic-multi-channel-octopus',
          },
          {
            name: t('header[1].submenu[0].list_menu[6].name'),
            href: '/pipeline-services/intelligent-pigging/ultrasonic-crack-detection-and-sizing-inline-inspection-tool',
          },
          {
            name: t('header[1].submenu[0].list_menu[7].name'),
            href: '/pipeline-services/intelligent-pigging/caliper-pigging',
          },
          {
            name: t('header[1].submenu[0].list_menu[8].name'),
            href: '/pipeline-services/intelligent-pigging/mfl-pigging',
          },
          {
            name: t('header[1].submenu[0].list_menu[9].name'),
            href: '/pipeline-services/intelligent-pigging/pipeline-cleaning',
          },
          {
            name: t('header[1].submenu[0].list_menu[10].name'),
            href: '/pipeline-services/intelligent-pigging/pig-tracking',
          },
          {
            name: t('header[1].submenu[0].list_menu[12].name'),
            href: '/pipeline-services/intelligent-pigging/well-casing-in-line-inspection',
          },
          {
            name: t('header[1].submenu[0].list_menu[13].name'),
            href: '/pipeline-services/intelligent-pigging/dexon-scorpion-in-line-inspection',
          },
          {
            name: t('header[1].submenu[0].list_menu[11].name'),
            href: '/pipeline-services/intelligent-pigging/unpiggable-pipeline-in-line-inspection-solutions',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: t('header[2].name'),
    href: '/industries',
    active: false,
    submenu: [
      {
        name: t('header[2].name'),
        href: '/industries',
        icon: 'industries',
        description: t('header[2].description'),
        listmenu: [
          {
            name: t('header[2].submenu[0].name'),
            href: '/industries/oil-gas',
          },
          {
            name: t('header[2].submenu[1].name'),
            href: '/industries/petrochemical',
          },
          {
            name: t('header[2].submenu[2].name'),
            href: '/industries/refining',
          },
          {
            name: t('header[2].submenu[3].name'),
            href: '/industries/power-plant',
          },
          {
            name: t('header[2].submenu[4].name'),
            href: '/industries/renewable-energy',
          },
          {
            name: t('header[2].submenu[5].name'),
            href: '/industries/mining',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: t('header[3].name'),
    href: 'https://investor.dexon-technology.com/home',
    target: '_blank',
    active: null,
  },
  {
    id: 4,
    name: t('header[4].name'),
    href: '/sustainability',
    active: false,
    submenu: [
      {
        name: t('header[4].name'),
        description: t('header[4].description'),
        icon: 'sustainability',
        href: '/sustainability',
        listmenu: [
          {
            name: t('header[4].submenu[0].name'),
            href: '/sustainability/environmental-commitment',
          },
          {
            name: t('header[4].submenu[1].name'),
            href: '/sustainability/summary-carbon-footprint',
          },
          {
            name: t('header[4].submenu[2].name'),
            href: '/sustainability/social-commitment',
          },
          {
            name: t('header[4].submenu[3].name'),
            href: '/sustainability/governance-commitment',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: t('header[5].name'),
    href: '/news',
    active: null,
  },
  {
    id: 6,
    name: t('header[6].name'),
    href: '/aboutus',
    active: false,
    submenu: [
      {
        name: t('header[6].list_submenu[0].name'),
        icon: 'about',
        description: t('header[6].list_submenu[0].description'),
        href: '/aboutus',
        listmenu: [
          {
            name: t('header[6].list_submenu[1].name'),
            icon: 'history',
            description: t('header[6].list_submenu[1].description'),
            href: '/our-history',
          },
          {
            name: t('header[6].list_submenu[2].name'),
            icon: 'global',
            description: t('header[6].list_submenu[2].description'),
            href: '/global-operations',
          },
          {
            name: t('header[6].list_submenu[3].name'),
            icon: 'career',
            description: t('header[6].list_submenu[3].description'),
            href: '/career-at-dexon',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: t('header[7].name'),
    href: '/contact',
    active: null,
  },
])

function open(index) {
  activeIndex.value = index
}
function hover(index) {
  hoverIndex.value = index
}
function hoverListitem(content, index) {
  Array.from(groupMenu.value).forEach((item) => {
    const menu = item.submenu
    if (menu?.length > 0) {
      menu.forEach((element) => {
        const list = element.listmenu
        if (list?.length > 0) {
          list.forEach((child) => {
            if (child === content)
              child.active = true
          })
        }
      })
    }
  })
  hoverListIndex.value = index
}
function closeListitem() {
  hoverListIndex.value = null
}
function close() {
  activeIndex.value = null
}
function openSideMenu() {
  activeSideMenu.value = true
}
function closeSideMenu() {
  activeSideMenu.value = false
}
function affixHeader() {
  const element = navbarSize.value
  if (y.value < element)
    affixActive.value = true

  else
    affixActive.value = false
}
function onWindowResize() {
  const navbMobile = document.querySelectorAll('header.header-sm')
  const navDesktop = document.querySelectorAll('header.header-lg')

  if (width.value < 1024) {
    navbarMobile.value = true
    navbarDesktop.value = false
    for (let i = 0; i < navbMobile.length; i++)
      navbarSize.value = navbMobile[i].clientHeight
  }
  else {
    navbarDesktop.value = true
    navbarMobile.value = false
    for (let i = 0; i < navDesktop.length; i++)
      navbarSize.value = navDesktop[i].clientHeight
  }
}

onMounted(() => {
  window.addEventListener('resize', onWindowResize)
  window.addEventListener('scroll', affixHeader)
  window.addEventListener('resize', affixHeader)
  onWindowResize()
  affixHeader()
})
</script>

<template>
  <div class="z-50">
    <header
      :class="!affixActive ? 'lg:affix-pattern top-0 dark:bg-red-gradient lg:dark:bg-opacity-100 bg-white affix lg:translate-y-0 transition-transform duration-200' : 'lg:translate-y-[-60px] lg:mt-[60px] lg:absolute lg:dark:bg-opacity-0 lg:dark:bg-none dark:bg-red-gradient bg-white'"
      class="lg:flex fixed header-lg items-center inset-x-0  z-[100] dark:shadow-none shadow-shadow-light/10 shadow-lg"
    >
      <nav class="container flex py-3 items-center lg:h-auto h-[50px]">
        <!-- hamburger Menu -->
        <div v-if="navbarMobile" class="lg:hidden flex lg:order-2 mr-auto items-center gap-x-4">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            class="inline-flex items-center text-sm text-white lg:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            @click="openSideMenu()"
          >
            <span class="sr-only">Open main menu</span>
            <Hamburger />
          </button>
          <UISearchBar class="lg:hidden flex" />
          <UIChangeLangeuage class="lg:hidden flex cursor-pointer items-center relative" />
        </div>
        <!-- logo -->
        <div class="flex lg:w-auto lg:justify-start w-full justify-end lg:gap-x-0 gap-x-4">
          <NuxtLink :to="localePath({ name: 'index' })" class="cursor-pointer">
            <Logo class="xl:h-[34px] lg:h-[25px]" :affix-active="affixActive" />
          </NuxtLink>
        </div>
        <!-- Desktop Menu -->
        <LayoutsDesktopMenu
          v-if="navbarDesktop"
          :active-index="activeIndex"
          :hover-index="hoverIndex"
          :group-menu="groupMenu"
          @hover="hover"
          @close-listitem="closeListitem"
          @hover-listitem="hoverListitem"
          @open="open"
          @close="close"
        />
        <!-- Mobile Menu -->
        <div v-if="navbarMobile">
          <transition
            enter-active-class="transition-opacity"
            enter-from-class="opacity opacity-0"
            enter-to-class="opacity opacity-100"
            leave-active-class="transition-opacity"
            leave-from-class="opacity opacity-100"
            leave-to-class="opacity opacity-0"
          >
            <div v-if="activeSideMenu" class="lg:hidden fixed inset-0 flex items-start justify-start overflow-y-auto z-[100]">
              <LayoutsMobileMenu
                class="z-50 h-full xs:w-auto w-full"
                :group-menu="groupMenu"
                @close-side-menu="closeSideMenu"
              />
            </div>
          </transition>
        </div>
      </nav>
    </header>
  </div>
</template>
