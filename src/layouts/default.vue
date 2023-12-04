<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-4 py-12">
    <p class="basis-full">
      Default Layout:
    </p>
    <nav>
      <NuxtLink :to="localePath('/')">
        Index
      </NuxtLink>
      <NuxtLink :to="localePath('/1')">
        1
      </NuxtLink>
      <NuxtLink :to="localePath('/2')">
        2
      </NuxtLink>
      <NuxtLink :to="localePath('/3')">
        3
      </NuxtLink>
      <NuxtLink :to="localePath('/4')">
        4
      </NuxtLink>
    </nav>
    <slot />
    <LanguageSwitch />
  </div>
</template>
