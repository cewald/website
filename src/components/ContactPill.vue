<script lang="ts" setup>
defineProps<{
  title: string
  to: string
  transparent?: boolean
}>()
</script>

<template>
  <a
    :href="to"
    class="flex items-center px-4 py-2 text-lg"
    :class="{
      'bg-base-darkest text-white dark:bg-slate-900': !transparent,
      'hover:bg-base-lightest dark:hover:bg-slate-900': transparent
    }"
    :title="title"
  >
    <slot />
    <span v-text="title" />
  </a>
</template>
