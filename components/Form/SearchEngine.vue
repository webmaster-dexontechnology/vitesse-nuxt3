<script setup>
import { AisConfigure, AisHighlight, AisHits, AisInstantSearch, AisSearchBox } from 'vue-instantsearch/vue3/es'
import { history } from 'instantsearch.js/es/lib/routers'
import { singleIndex as singleIndexMapping } from 'instantsearch.js/es/lib/stateMappings'
const { defaultTransition } = useTailwindConfig()
const indexName = 'Dexon'
const searchValue = ref('')
const router = useRouter()
const activeIndex = ref(0)
const algolia = useAlgoliaRef()
const routing = reactive({
  router: history(),
  stateMapping: singleIndexMapping(indexName),
})
const onHover = (index) => {
  activeIndex.value = index
}
const handleClick = (url, href) => {
  if (url)
    router.push(url)

  else if (href)
    window.open(href, '_blank')
}
</script>

<template>
  <AisInstantSearch
    :search-client="algolia"
    :index-name="indexName"
    :routing="routing"
  >
    <AisConfigure :hits-per-page.camel="20" />
    <AisSearchBox class="h-full">
      <template #default="{ refine }">
        <div class="relative flex items-center gap-x-custom-sm px-4 py-3 border-b border-secondary-gray-200">
          <svg class="w-6 h-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68Z" /></svg>
          <input
            v-model="searchValue"
            type="search"
            class="w-full text-[#0f172a] placeholder:text-gray-400 leading-1 text-sm font-medium"
            placeholder="Search services"
            @input="refine($event.currentTarget.value)"
          ><button class="border border-gray-300 h-6 w-8 rounded-md flex items-center justify-center" type="reset" aria-label="Cancel" @click="searchValue = ''">
            <svg class="text-gray-600" width="16" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.506 6h3.931V4.986H1.736v-1.39h2.488V2.583H1.736V1.196h2.69V.182H.506V6ZM8.56 1.855h1.18C9.721.818 8.87.102 7.574.102c-1.276 0-2.21.705-2.205 1.762-.003.858.602 1.35 1.585 1.585l.634.159c.633.153.986.335.988.727-.002.426-.406.716-1.03.716-.64 0-1.1-.295-1.14-.878h-1.19c.03 1.259.931 1.91 2.343 1.91 1.42 0 2.256-.68 2.259-1.745-.003-.969-.733-1.483-1.744-1.71l-.523-.125c-.506-.117-.93-.304-.92-.722 0-.375.332-.65.934-.65.588 0 .949.267.994.724ZM15.78 2.219C15.618.875 14.6.102 13.254.102c-1.537 0-2.71 1.086-2.71 2.989 0 1.898 1.153 2.989 2.71 2.989 1.492 0 2.392-.992 2.526-2.063l-1.244-.006c-.117.623-.606.98-1.262.98-.883 0-1.483-.656-1.483-1.9 0-1.21.591-1.9 1.492-1.9.673 0 1.159.389 1.253 1.028h1.244Z" fill="currentColor" /></svg>
          </button>\
        </div>
      </template>
    </AisSearchBox>
    <AisHits v-if="searchValue" class="px-4 py-4 relative">
      <template #default="{ items }">
        <ul class="pl-0 grid gap-y-2 max-h-[500px] overflow-y-auto">
          <li
            v-for="(item, index) in items"
            :key="item.id"
            :class="[activeIndex === index ? 'bg-secondary-red-100 text-white' : 'bg-gray-100 text-gray-600', defaultTransition]"
            class="text-[14px] font-medium hover:bg-secondary-red-100 hover:text-white py-3 px-4 rounded-md cursor-pointer flex items-center gap-x-4"
            @mouseover="onHover(index)"
            @click="handleClick(item.url, item.href)"
            @keyup.enter="handleClick(item.url, item.href)"
          >
            <div>
              <svg class="border p-1 rounded-md w-6 h-6" :class="activeIndex === index ? 'text-white' : 'text-gray-400 bg-white'" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M216 148h-44v-40h44a12 12 0 0 0 0-24h-44V40a12 12 0 0 0-24 0v44h-40V40a12 12 0 0 0-24 0v44H40a12 12 0 0 0 0 24h44v40H40a12 12 0 0 0 0 24h44v44a12 12 0 0 0 24 0v-44h40v44a12 12 0 0 0 24 0v-44h44a12 12 0 0 0 0-24Zm-108 0v-40h40v40Z" /></svg>
            </div>
            <AisHighlight
              highlighted-tag-name="mark"
              :class-names="{
                'ais-Highlight-highlighted': activeIndex === index ? '!border-b-2 border-white !bg-transparent !text-white !rounded-sm font-bold' : '!border-b-2 border-secondary-red-100 !bg-transparent !text-secondary-red-100 !rounded-sm font-bold',
              }"
              :hit="item"
              attribute="title"
            />
            <div class="ml-auto">
              <svg :class="activeIndex === index ? 'text-white' : 'text-gray-600'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42z" /></svg>
            </div>
          </li>
        </ul>
      </template>
    </AisHits>
  </AisInstantSearch>
</template>

<style>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>
