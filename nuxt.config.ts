import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/algolia',
    'dexon-nuxt-cookie',
    'nuxt-gtag',
    '@nuxt/image-edge',
    ['nuxt-mail', {
      message: [
        { name: 'test', to: 'panupong.chaetan@gmail.com' },
        { name: 'info', to: 'info@dexon-technology.com' },
        { name: 'career', to: 'hr@dexon-technology.com' },
      ],
      smtp: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: process.env.EMAIL_ADDRESS,
          pass: process.env.EMAIL_SECRET,
        },
      },
    }],
  ],
  runtimeConfig: {
    // Public Url
    public: {
      baseURL: process.env.BASE_URL || 'https://maddeveloper.xyz/',
    },
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  plugins: [
    '~/plugins/scrollBehavior.js',
  ],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
    prerender: {
      crawlLinks: false,
      routes: ['/'],
      ignore: ['/hi'],
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  pwa,

  devtools: {
    enabled: true,
  },
  algolia: {
    apiKey: process.env.ALGOLIA_ADMIN_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    globalIndex: 'Dexon',
    lite: true,
    cache: false,
    instantSearch: true,
    recommend: true,
    docSearch: {
      indexName: 'Dexon',
    },
  },
  cookieControl: {
    css: false,
    cssPolyfill: true,
    barPosition: 'bottom-right',
    blockIframe: true,
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          // if multilanguage
          name: {
            en: 'Default Cookies',
          },
          // else
          name: 'คุกกี้เริ่มต้น',
          // if multilanguage
          description: {
            en: 'Used for cookie control',
          },
          // else
          description: 'ใช้สำหรับการควบคุมคุกกี้',
          cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
        },
      ],
      optional: [
        {
          name: 'Google Analitycs',
          // if you don't set identifier, slugified name will be used
          identifier: 'ga',
          // if multilanguage
          description: {
            en: 'Used for manage tag management on the website.',
          },
          // else
          description: 'ใช้สำหรับจัดการบริหาร Tag บนเว็บไซต์',

          initialState: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-HPFS9HYZFR',
          async: true,
          cookies: ['_ga', '_gat', '_gid'],
          accepted: () => {
            window.dataLayer = window.dataLayer || []
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              'event': 'gtm.js',
            })
          },
          declined: () => {
          },
        },
      ],
    },
    locales: ['en', 'th'],
    localeTexts: {
      en: {
        manageCookies: 'Manage Cookies',
      },
      th: {
        manageCookies: 'จัดการคุกกี้',
      },
    },
  },
  gtag: {
    id: 'G-HPFS9HYZFR',
    initialConsent: false,
  },
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
      },
      {
        code: 'th',
        iso: 'th-TH',
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    vueI18n: './lang/i18n.config.ts',
  },
  build: {
    transpile: ['@headlessui/vue', 'i18n', 'swiper', 'RGBELoader', 'EffectComposer', 'RenderPass', 'DotScreenPass', 'GlitchPass', 'ShaderPass', 'RGBShiftShader', 'GammaCorrectionShader', 'UnrealBloomPass', 'SMAAPass', 'GLTFLoader', 'OrbitControls', 'TransformControls', 'DRACOLoader', 'Stats'],
  },
})
