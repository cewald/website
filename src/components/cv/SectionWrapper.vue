<script setup lang="ts">
defineProps<{
  title?: string
  subTitle?: string
}>()
</script>

<template>
  <section class="mb-16 text-lg">
    <CvSectionTitle
      v-if="title"
      :title="title"
      :sub-title="subTitle"
    />
    <slot />
  </section>
</template>
