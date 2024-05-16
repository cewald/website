<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
  ariaLabel?: string
}>()
</script>

<template>
  <h2
    class="text-xl lowercase xl:text-2xl mb-6 w-full"
    :aria-label="ariaLabel"
  >
    {{ title }}
    <span
      v-if="subTitle"
      class="font-light text-base-semilight dark:text-slate-300 xl:text-lg"
    >
      {{ subTitle }}
    </span>
  </h2>
</template>
