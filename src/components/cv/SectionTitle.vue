<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
  ariaLabel?: string
}>()
</script>

<template>
  <h2
    class="text-xl lowercase md:text-2xl mb-4 w-full"
    :aria-label="ariaLabel"
  >
    {{ title }}
    <span
      v-if="subTitle"
      class="font-light text-base-semilight md:text-lg"
    >
      {{ subTitle }}
    </span>
  </h2>
</template>
