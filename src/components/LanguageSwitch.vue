<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>3

<template>
  <div class="flex gap-2 text-xs uppercase">
    <template
      v-for="l in locales"
      :key="l.code"
    >
      <NuxtLink
        v-if="l.code !== locale"
        :to="switchLocalePath(l.code)"
      >
        {{ l.name }}
      </NuxtLink>
      <span
        v-else
        class="text-gray-400"
      >{{ l.name }}</span>
    </template>
  </div>
</template>
