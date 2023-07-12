<script setup>
const callsToAction = [
  { name: 'info@dexon-technology.com', href: 'mailto:info@dexon-technology.com', icon: 'email' },
  { name: '+66(0) 33-012484-7', href: 'tel:+66330124847', icon: 'phone' },
]
</script>

<template>
  <div>
    <div class="header-sm header-pattern-dark hidden lg:flex relative inset-x-0 dark:bg-red-gradient bg-primary">
      <nav class="container flex py-2.5 items-center">
        <div class="flex">
          <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center text-sm pr-3">
            <div class="text-xl leading-5 flex " aria-hidden="true">
              <svg v-if="item.icon === 'phone'" class="text-secondary-red-100 dark:text-primary mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.425t-5.425-3.8q-2.363-2.375-3.8-5.438T3 4.05v-.525Q3 3.25 3.05 3H8.9l.925 5.025l-2.85 2.875q1.05 1.8 2.638 3.375T13.1 17l2.9-2.9l5 1v5.85q-.25.025-.525.038T19.95 21ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9Zm8.95 8.95q.975.425 1.988.675T19 18.95v-2.2l-2.35-.475l-1.675 1.675ZM6.025 9Zm8.95 8.95Z" /></svg>
              <svg v-if="item.icon === 'email'" class="text-secondary-red-100 dark:text-primary mr-2" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5l8-5v10zm-8-7L4 6h16l-8 5z" /></svg>
            </div>
            <span class="text-white text-sm font-medium">{{ item.name }}</span>
          </a>
          <!-- <DarkToggle /> -->
        </div>
        <div class="flex flex-1 justify-end items-center gap-x-2.5">
          <UISearchBar />
          <NuxtLink
            :to="localePath({ name: 'career-at-dexon' })"
            class="btn-primary bg-white text-secondary-red-100 shadow-custom-md font-bold"
          >
            {{ $t('button.career') }}
          </NuxtLink>
          <NuxtLink :to="localePath({ name: 'contact' })" class="text-white btn-primary bg-red-gradient shadow-custom-md font-bold">
            {{ $t('button.quote') }}
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
