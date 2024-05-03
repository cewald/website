<script setup lang="ts">
defineProps<{
  title: string
  subTitle?: string
}>()
</script>

<template>
  <h2 class="text-xl lowercase md:text-2xl mb-4 w-full">
    {{ title }}
    <span
      v-if="subTitle"
      class="font-extralight text-base-light md:text-lg"
    >
      {{ subTitle }}
    </span>
  </h2>
</template>
