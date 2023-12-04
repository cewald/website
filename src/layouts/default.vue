<script setup lang="ts">

const head = useLocaleHead({
  addDirAttribute: true,
  addSeoAttributes: true
})

useHead({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
    dir: head.value.htmlAttrs!.dir,
  },
  link: [
    ...(head.value.link || []),
  ]
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-between px-4 py-12">
    <TopNavigation class="mb-8" />
    <div class="w-full font-serif">
      <slot />
    </div>
    <LanguageSwitch class="mt-8" />
  </div>
</template>
