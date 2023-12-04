<script setup lang="ts">
const localePath = useLocalePath()

const randomQuotePath = computed(() => {
  return localePath('/' + randomBetween(1, 12))
})
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-between px-4 py-12">
    <nav class="mb-8 flex gap-4 text-xs uppercase">
      <NuxtLink :to="localePath('/')">
        Home
      </NuxtLink>
      <NuxtLink :to="randomQuotePath">
        Shuffle
      </NuxtLink>
    </nav>
    <div class="font-serif text-2xl">
      <slot />
    </div>
    <LanguageSwitch class="mt-8" />
  </div>
</template>
