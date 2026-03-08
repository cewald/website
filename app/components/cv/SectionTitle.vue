<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
  ariaLabel?: string
}>()
</script>

<template>
  <h2
    class="mb-6 w-full text-xl font-medium lowercase xl:text-2xl"
    :aria-label="ariaLabel"
  >
    {{ title }}
    <span
      v-if="subTitle"
      class="text-base-semilight xl:text-lg dark:text-slate-300"
    >
      {{ subTitle }}
    </span>
  </h2>
</template>
