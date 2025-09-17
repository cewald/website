<script lang="ts" setup>
const { to } = defineProps<{
  title: string
  to: string
  transparent?: boolean
}>()

const isExternal = computed(() => to.startsWith('http') || to.startsWith('mailto') || to.startsWith('tel'))
const component = computed(() => (isExternal.value ? 'a' : 'RouterLink'))
const link = computed(() => (isExternal.value ? { href: to } : { to }))
</script>

<template>
  <component
    :is="component"
    v-bind="{ ...link }"
    class="flex items-center px-4 py-2 text-lg"
    :class="{
      'bg-base-darkest text-white dark:bg-slate-900': !transparent,
      'hover:bg-base-lightest dark:hover:bg-slate-900': transparent,
    }"
    :title="title"
  >
    <slot />
    <span v-text="title" />
  </component>
</template>
