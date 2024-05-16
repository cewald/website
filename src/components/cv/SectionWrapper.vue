<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subTitle?: string
  ariaLabel?: string
  titleAriaLabel?: string
  margin?: boolean
}>(), {
  margin: true,
})
</script>

<template>
  <section
    class="text-lg"
    :class="{ 'mb-16': margin }"
    :aria-label="ariaLabel || title + (subTitle ? ' ' + subTitle : '')"
  >
    <CvSectionTitle
      v-if="title"
      :title="title"
      :sub-title="subTitle"
      :aria-label="titleAriaLabel || title + (subTitle ? ' ' + subTitle : '')"
    />
    <slot />
  </section>
</template>
