<script setup>
defineProps({
  content: Object,
  card: Array,
})

const activeIndex = ref(0)

const hover = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="lg:py-desktop py-mobile bg-secondary-gray-50">
    <div class="container">
      <div
        class="capitalize text-center lg:text-2xl md:text-xl sm:text-lg text-md xl:leading-17 font-bold text-secondary-red-100 mb-1"
      >
        {{ content.heading }}
      </div>
      <h2 class="text-center xl:text-5xl md:text-4xl text-3xl font-bold xl:max-w-4xl lg:max-w-3xl mx-auto mb-custom-xl">
        {{ content.title }}
      </h2>
      <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-4 xl:gap-y-0 gap-y-8 group/card transition-all duration-200">
        <div
          v-for="(item, index) in card" :key="item"
          class="sm:rounded-3xl rounded-2xl p-8 lg:pb-4 transition-all duration-300 ease-in-out relative h-full lg:min-h-[390px]"
          :class="activeIndex === index ? 'bg-primary active' : ''"
          @mouseover="hover(index)"
        >
          <div
            v-if="item.icon === 'inspection'"
            :class=" activeIndex === index ? 'bg-secondary-red-100 scale-110 origin-center' : 'scale-100'"
            class="transition delay-[50ms] duration-300 ease-in-out flex px-2 items-center justify-center w-[70px] h-[70px] bg-secondary-gray-200 mb-8 rounded-lg"
          >
            <svg :class="activeIndex === index ? 'stroke-white text-secondary-red-100' : 'stroke-primary text-secondary-red-100'" class="w-11 h-11" width="35" height="35" viewBox="0 0 48 48"><g><path d="M45.48,35.67l1.84-.14-.27-3.56-1.82,.14c-.27-1-.71-1.93-1.29-2.75l1.25-1.31-2.58-2.47-1.24,1.3c-.92-.59-1.96-1.02-3.07-1.24v-1.79h-3.57v1.79c-1.4,.28-2.68,.89-3.77,1.73l-1.36-1.18-2.34,2.7,1.37,1.19c-.57,1.02-.95,2.15-1.09,3.36l-1.83,.14,.27,3.56,1.85-.14c.28,.98,.73,1.9,1.3,2.71l-1.29,1.35,2.58,2.47,1.3-1.37c.91,.57,1.92,.98,3.01,1.2v1.89h3.57v-1.89c1.38-.27,2.64-.86,3.71-1.69l1.42,1.24,2.34-2.69-1.41-1.22c.58-1.01,.96-2.13,1.12-3.33Zm-8.96,1.73c-1.57,0-2.84-1.27-2.84-2.84s1.27-2.84,2.84-2.84,2.84,1.27,2.84,2.84-1.27,2.84-2.84,2.84Z" fill="currentColor" stroke-miterlimit="10" stroke-width="1.06" /><path d="M39.36,34.56c0,1.57-1.27,2.84-2.84,2.84s-2.84-1.27-2.84-2.84,1.27-2.84,2.84-2.84,2.84,1.27,2.84,2.84Z" fill="currentColor" stroke-miterlimit="10" stroke-width="1.06" /></g><g><path d="M27.96,17.68c0-.38-.02-.75-.05-1.12l2.49-.65-1.12-4.26-2.54,.66c-.54-1.11-1.23-2.14-2.06-3.04l1.63-2.11-3.49-2.69-1.65,2.14c-1.07-.55-2.22-.94-3.44-1.16V2.74h-4.41v2.72c-1.16,.21-2.26,.57-3.28,1.07l-1.62-2.16-3.53,2.64,1.6,2.14c-.61,.64-1.15,1.35-1.61,2.11l-2.47-.91L.9,14.48l2.43,.89c-.14,.75-.22,1.52-.22,2.3,0,.27,.01,.54,.03,.81l-2.47,.64,1.12,4.26,2.41-.63c.52,1.16,1.22,2.23,2.05,3.17l-1.5,1.94,3.49,2.69,1.48-1.91c1.11,.59,2.33,1.02,3.61,1.25v2.4h4.41v-2.4c1.22-.22,2.38-.61,3.45-1.16l1.45,1.93,3.53-2.64-1.47-1.96c.62-.68,1.17-1.43,1.63-2.23l2.33,.85,1.52-4.13-2.37-.87c.11-.66,.16-1.33,.16-2.01Zm-12.42,5.98c-3.39,0-6.13-2.75-6.13-6.13s2.75-6.14,6.13-6.14,6.13,2.75,6.13,6.14-2.75,6.13-6.13,6.13Z" fill="none" stroke-miterlimit="10" stroke-width="1.06" /><path d="M15.54,26.2c-4.8,0-8.68-3.89-8.68-8.68s3.89-8.68,8.68-8.68" fill="none" stroke-miterlimit="10" stroke-width="1.06" /></g></svg>
          </div>
          <div
            v-else-if="item.icon === 'pipeline'"
            :class=" activeIndex === index ? 'bg-secondary-red-100 scale-110 origin-center' : 'scale-100'"
            class="transition delay-[50ms] duration-300 ease-in-out flex px-2 items-center justify-center w-[70px] h-[70px] bg-secondary-gray-200 mb-8 rounded-lg"
          >
            <svg :class="activeIndex === index ? 'stroke-white text-secondary-red-100' : 'stroke-primary text-white'" class="w-11 h-11" width="48" height="48" viewBox="0 0 48 48"><path d="M10.34,6.74h27.31c2.47,0,4.48,2.01,4.48,4.48v25.56c0,2.47-2.01,4.48-4.48,4.48H10.34c-2.47,0-4.48-2.01-4.48-4.48V11.22c0-2.47,2.01-4.48,4.48-4.48Z" fill="#EE2334" stroke-miterlimit="10" stroke-width="1.25" /><path d="M15.64,13.43h16.72c1.52,0,2.75,1.23,2.75,2.75v15.64c0,1.51-1.23,2.74-2.74,2.74H15.64c-1.51,0-2.74-1.23-2.74-2.74v-15.64c0-1.51,1.23-2.74,2.74-2.74Z" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><path d="M30.35,24.08c0-.19,0-.38-.03-.57l1.27-.33-.57-2.18-1.3,.34c-.27-.57-.63-1.09-1.05-1.55l.83-1.08-1.78-1.38-.84,1.09c-.54-.28-1.14-.48-1.76-.59v-1.39h-2.25v1.39c-.59,.1-1.15,.29-1.68,.55l-.83-1.1-1.8,1.35,.82,1.09c-.31,.33-.59,.69-.82,1.08l-1.27-.47-.78,2.12,1.24,.46c-.07,.38-.11,.78-.11,1.18,0,.14,0,.28,.01,.42l-1.26,.33,.57,2.18,1.23-.32c.27,.59,.62,1.14,1.05,1.62l-.77,.99,1.78,1.38,.75-.98c.57,.3,1.19,.52,1.85,.64v1.23h2.25v-1.23c.62-.11,1.22-.32,1.76-.59l.74,.99,1.8-1.35-.75-1c.32-.35,.6-.73,.83-1.14l1.19,.44,.78-2.11-1.21-.45c.05-.34,.08-.68,.08-1.03Zm-6.35,4.25c-2.39,0-4.33-1.94-4.33-4.33s1.94-4.33,4.33-4.33,4.33,1.94,4.33,4.33-1.94,4.33-4.33,4.33Z" fill="none" stroke-miterlimit="10" stroke-width="1.08" /><g><line x1="11.24" y1=".88" x2="11.24" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="15.49" y1=".88" x2="15.49" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="19.75" y1=".88" x2="19.75" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="24" y1=".88" x2="24" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="28.25" y1=".88" x2="28.25" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="32.51" y1=".88" x2="32.51" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="36.76" y1=".88" x2="36.76" y2="6.74" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /></g><g><line x1="48" y1="11.24" x2="42.14" y2="11.24" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="48" y1="15.49" x2="42.14" y2="15.49" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="48" y1="19.75" x2="42.14" y2="19.75" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="48" y1="24" x2="42.14" y2="24" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="48" y1="28.25" x2="42.14" y2="28.25" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="48" y1="32.51" x2="42.14" y2="32.51" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="48" y1="36.76" x2="42.14" y2="36.76" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /></g><g><line x1="36.76" y1="47.12" x2="36.76" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="32.51" y1="47.12" x2="32.51" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="28.25" y1="47.12" x2="28.25" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="24" y1="47.12" x2="24" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="19.75" y1="47.12" x2="19.75" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="15.49" y1="47.12" x2="15.49" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line x1="11.24" y1="47.12" x2="11.24" y2="41.26" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /></g><g><line y1="36.76" x2="5.86" y2="36.76" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line y1="32.51" x2="5.86" y2="32.51" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line y1="28.25" x2="5.86" y2="28.25" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line y1="24" x2="5.86" y2="24" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line y1="19.75" x2="5.86" y2="19.75" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line y1="15.49" x2="5.86" y2="15.49" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /><line y1="11.24" x2="5.86" y2="11.24" fill="currentColor" stroke-miterlimit="10" stroke-width="1.25" /></g><g><path d="M11.68,11.67c0,.73-.59,1.33-1.33,1.33s-1.33-.59-1.33-1.33,.59-1.33,1.33-1.33,1.33,.59,1.33,1.33Z" fill="none" stroke-miterlimit="10" stroke-width="1.25" /><path d="M11.68,36.33c0,.73-.59,1.33-1.33,1.33s-1.33-.59-1.33-1.33,.59-1.33,1.33-1.33,1.33,.59,1.33,1.33Z" fill="none" stroke-miterlimit="10" stroke-width="1.25" /></g><g><path d="M39.42,11.67c0,.73-.59,1.33-1.33,1.33s-1.33-.59-1.33-1.33,.59-1.33,1.33-1.33,1.33,.59,1.33,1.33Z" fill="none" stroke-miterlimit="10" stroke-width="1.25" /><path d="M39.42,36.33c0,.73-.59,1.33-1.33,1.33s-1.33-.59-1.33-1.33,.59-1.33,1.33-1.33,1.33,.59,1.33,1.33Z" fill="none" stroke-miterlimit="10" stroke-width="1.25" /></g></svg>
          </div>
          <div
            v-else-if="item.icon === 'dms'"
            :class=" activeIndex === index ? 'bg-secondary-red-100 scale-110 origin-center' : 'scale-100'"
            class="transition delay-[50ms] duration-300 ease-in-out flex px-2 items-center justify-center w-[70px] h-[70px] bg-secondary-gray-200 mb-8 rounded-lg"
          >
            <svg :class="activeIndex === index ? 'stroke-white text-secondary-red-100' : 'stroke-primary text-secondary-red-100'" class="w-11 h-11" width="35" height="35" viewBox="0 0 48 48"><g><path d="M21.84,40.88c.82,5.56-12.07,5.73-13.17-2.68-5.31,1.49-8.97-3.64-6.41-8.16-3.08-2.1-3.02-8.23,.19-10.06C0,17.37,2.97,10.06,8.9,11.36,7.28,5.49,15.85,.7,21.87,5.38l-.03,35.5Z" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M8.72,10.06c.44,2.61,2.73,4.62,5.35,5.09" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M14.07,8.1c-.61,3.89,5.93,5.53,7.7,3" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M10.8,13.84c-.01,1.37-1.84,3.12-2.87,3.52" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M6.76,21.81c1.61,.81,1.65,3.16,3.39,3.68,1.83,.54,2.82-1.47,3.55-2.87,1.12-2.14,2.78-3,5.2-2.62,.79,.12,2.16,.68,2.61,.91" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M4.93,21.68c1.25,1.55,3.26-.74,1.96-2.09" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M21.9,29.77c-1.71-1.71-4.38,.22-4.96,2.07-.68,2.18,1.38,3.95,.66,6.08-.44,1.29-1.45,1.86-2.75,1.64" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M8.72,39.3c-2.01-5.27,7.96-3.78,3.65-11.75" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M2.19,30.29c.71-1.17,2.42-1.26,3.67-1.18,1.12,.07,2.39,.92,2.86,1.05" fill="none" stroke-miterlimit="10" stroke-width="1.09" /></g><g><path d="M47.81,27.55l.19-5.74-3.48-.12c-.21-1.19-.54-2.34-.98-3.44l3.19-1.75-2.77-5.04-3.4,1.86c-.73-.86-1.54-1.65-2.43-2.36l2.03-3.43-4.95-2.93-2.09,3.54c-1.01-.37-2.08-.65-3.17-.83V3.18h-2.84V44.82h2.84v-2.57c1.08-.18,2.13-.45,3.14-.81l1.22,2.3,5.07-2.69-1.28-2.42c.95-.76,1.82-1.61,2.59-2.54l2.4,1.53,3.09-4.85-2.58-1.64c.45-1.17,.78-2.4,.97-3.67l3.22,.11Z" fill="none" stroke-miterlimit="10" stroke-width="1.09" /><path d="M27.13,11.44v3.96c4.74,.02,8.57,3.86,8.57,8.6s-3.83,8.58-8.57,8.6v3.96c6.92-.02,12.53-5.63,12.53-12.56s-5.61-12.54-12.53-12.56Z" fill="currentColor" stroke-miterlimit="10" stroke-width="1.09" /></g></svg>
          </div>
          <div
            v-else-if="item.icon === 'dtc'"
            :class=" activeIndex === index ? 'bg-secondary-red-100 scale-110 origin-center' : 'scale-100'"
            class="transition delay-[50ms] duration-300 ease-in-out flex px-2 items-center justify-center w-[70px] h-[70px] bg-secondary-gray-200 mb-8 rounded-lg"
          >
            <svg :class="activeIndex === index ? 'stroke-white text-secondary-red-100' : 'stroke-primary text-secondary-red-100'" class="w-11 h-11" width="35" height="35" viewBox="0 0 48 48"><g><polygon points="26.15 9.8 25.4 .7 24 .7 22.6 .7 21.85 9.8 26.15 9.8" fill="currentColor" stroke-miterlimit="10" stroke-width="1.07" /><path d="M42.71,24.72c0-6.03-2.53-12.16-7.47-16.18-1.22-.99-2.57-1.82-4.01-2.46l-.41-2.65c-1.9-.88-3.69-1.32-5.32-1.49l.65,7.87h-4.31l.65-7.89c-3.26,.29-5.32,1.51-5.32,1.51l-.47,2.65c-4.94,2.27-8.52,6.66-10.21,11.5-.8,2.3-1.2,4.72-1.2,7.14H42.71" fill="none" stroke-miterlimit="10" stroke-width="1.07" /><line x1="30.82" y1="3.42" x2="32.26" y2="12.66" fill="none" stroke-miterlimit="10" stroke-width="1.07" /><line x1="15.53" y1="12.66" x2="17.18" y2="3.42" fill="none" stroke-miterlimit="10" stroke-width="1.07" /><path d="M9.66,16.11s-1.9,3.33-1.75,5.87h11.7" fill="none" stroke-miterlimit="10" stroke-width="1.07" /><path d="M42.92,24.72H5.11s-1.7,.06-1.69,2.69H44.58c.02-2.62-1.66-2.69-1.66-2.69Z" fill="none" stroke-miterlimit="10" stroke-width="1.07" /></g><g><path d="M41.09,27.41h-8.58c-.13,4.5-3.82,8.11-8.35,8.11s-8.22-3.61-8.35-8.11H7.22c0,.36,.02,.71,.04,1.07l-3.36,.88,1.52,5.81,3.28-.86c.71,1.58,1.66,3.04,2.8,4.32l-2.04,2.64,4.75,3.67,2.01-2.61c1.52,.8,3.17,1.38,4.92,1.7v3.27h6v-3.27c1.66-.3,3.24-.84,4.7-1.58l1.97,2.64,4.81-3.6-2-2.67c.85-.92,1.59-1.94,2.22-3.04l3.17,1.17,2.07-5.63-3.24-1.19c.14-.88,.22-1.78,.22-2.7Z" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.07" /><path d="M24.15,38.99c-5.26,0-10.01-3.61-11.41-8.69" fill="none" stroke-miterlimit="10" stroke-width="1.07" /></g></svg>
          </div>
          <h3
            :class="{ 'text-white': activeIndex === index }"
            class="text-primary font-bold md:text-2xl text-xl mb-4"
          >
            {{ item.title }}
          </h3>
          <p class="leading-[1.7] text-[1rem] line-clamp-4" :class="{ 'text-white': activeIndex === index }">
            {{ item.subtitle }}
          </p>
          <ButtonHover
            class="text-lg"
            :button-class="activeIndex === index ? 'cursor-pointer transition-shadow duration-300 ease-in-out bg-secondary-red-100 flex justify-center items-center text-white text-center lg:absolute inset-x-0 bottom-0 lg:mt-0 mt-custom-lg lg:translate-y-[50%] max-w-[185px] max-h-[55px] mx-auto' : 'sm:absolute sm:bottom-0 '"
            :button-text="`${$t(item.btn)}`"
            :route-path="`${item.path}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>
