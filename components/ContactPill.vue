<template>
  <a
    :href="to"
    class="rounded px-3 py-2"
    :class="{
      'bg-base-darkest text-white': !transparent,
      'hover:bg-base-lightest': transparent
    }"
  >
    <span v-if="icon" class="svg-icon mr-2" v-html="icon" />
    <slot />
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
  icon: string | boolean
  transparent?: boolean
}>()
</script>
