<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subTitle?: string
  margin?: boolean
}>(), {
  margin: true,
})
</script>

<template>
  <section
    class="text-lg"
    :class="{ 'mb-16': margin }"
  >
    <CvSectionTitle
      v-if="title"
      :title="title"
      :sub-title="subTitle"
    />
    <slot />
  </section>
</template>
