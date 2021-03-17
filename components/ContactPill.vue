<template>
  <a
    :href="to"
    class="px-3 py-2 rounded"
    :class="{
      'bg-base-darkest text-white': !transparent,
      'hover:bg-base-lightest': transparent
    }"
  >
    <font-awesome-icon v-if="icon" class="text-2xl align-bottom" :icon="icon" />
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: [Array, Boolean],
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>
