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

<script lang="ts">
export default {
  data() {
    return {
      svg: false
    }
  },
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: [String, Boolean],
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    }
  }
}
</script>
