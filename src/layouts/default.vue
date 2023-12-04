<script setup lang="ts">
import HomeIcon from '@/assets/icons/home.svg'

const localePath = useLocalePath()
const { push } = useRouter()

const randomQuotePath = () => {
  return push(localePath('/' + randomBetween(1, 12)))
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-between px-4 py-12">
    <nav class="mb-8 flex items-center gap-4 font-mono text-xs uppercase">
      <NuxtLink :to="localePath('/')">
        <HomeIcon class="mb-1 h-6 w-6" />
        <span class="sr-only">Home</span>
      </NuxtLink>
      <NuxtLink
        to="/"
        @click="randomQuotePath()"
      >
        Shuffle
      </NuxtLink>
    </nav>
    <div class="font-serif">
      <slot />
    </div>
    <LanguageSwitch class="mt-8" />
  </div>
</template>
