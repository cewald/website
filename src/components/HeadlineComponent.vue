<script lang="ts" setup>
withDefaults(defineProps<{
  level?: 'h2' | 'h3'
}>(), {
  level: 'h2'
})
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
