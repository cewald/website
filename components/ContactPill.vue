<template>
  <a
    :href="to"
    class="flex items-center rounded px-3 py-2"
    :class="{
      'bg-base-darkest text-white': !transparent,
      'hover:bg-base-lightest': transparent
    }"
  >
    <span v-if="icon" class="svg-icon mr-2" v-html="icon" />
    <span><slot /></span>
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  to: string
  icon: string | boolean
  transparent?: boolean
}>()
</script>

<style lang="scss">
.svg-icon > svg {
  display: inline-block;
  font-size: inherit;
  height: 1.2em;
  width: 1.2em;
}
</style>
