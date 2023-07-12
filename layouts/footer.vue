<script></script>

<template>
  <main :class="$i18n.locale">
    <LayoutsCtaHeader />
    <LayoutsHeader />
    <slot />
    <Footer />
  </main>
</template>
