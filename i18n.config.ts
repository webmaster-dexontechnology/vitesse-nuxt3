import en from './lang/en.json'
import th from './lang/th.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  strategy: 'no_prefix',
  lazy: true,
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    alwaysRedirect: true,
    fallbackLocale: 'en',
  },
  vueI18nLoader: true,
  messages: {
    en,
    th,
  },
  silentTranslationWarn: true,
  silentFallbackWarn: true,
  missingWarn: false,
  fallbackWarn: false,
}))
