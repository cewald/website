<script setup lang="ts">
import HomeIcon from '@/assets/icons/home.svg'

const localePath = useLocalePath()
const { t } = useI18n()

const randomQuotePath = () => {
  return navigateTo(localePath('/' + randomBetween(1, 12) + '/'))
}
</script>

<template>
  <nav class="flex items-center gap-4 font-mono text-xs uppercase">
    <NuxtLink :to="localePath('/')">
      <HomeIcon class="mb-1 h-6 w-6" />
      <span class="sr-only">{{ t('Home') }}</span>
    </NuxtLink>
    <NuxtLink
      to="/"
      @click="randomQuotePath()"
    >
      {{ t('Shuffle') }}
    </NuxtLink>
  </nav>
</template>
