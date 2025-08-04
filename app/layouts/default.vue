<script setup lang="ts">
const { shortName, metaLine } = useName()

useHead({
  titleTemplate: titleChunk => {
    const tmpl = import.meta.env.VITE_APP_TITLE || `${shortName.value} _ full-stack javascript developer`
    return titleChunk ? `${tmpl} _ ${titleChunk}` : tmpl
  },
  meta: [
    {
      name: 'description',
      content: metaLine.value,
    },
    {
      name: 'robots',
      content: 'index, follow',
    },
  ],
  htmlAttrs: { lang: 'en', dir: 'ltr' },
  link: [ { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' } ],
})
</script>

<template>
  <div>
    <div
      class="
        container mx-auto flex min-h-screen flex-col justify-center px-6 py-16
        font-mono text-base-darkest dark:text-white
      "
    >
      <HeaderBlock />
      <slot />
    </div>
    <DarkModeToggle />
  </div>
</template>
