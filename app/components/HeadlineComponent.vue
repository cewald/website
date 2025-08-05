<script lang="ts" setup>
const { level = 'h2' } = defineProps<{
  level?: 'h2' | 'h3'
}>()
</script>

<template>
  <component
    :is="level"
    class="mb-4 w-full text-xl font-medium lowercase md:text-2xl"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
