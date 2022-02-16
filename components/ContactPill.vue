<template>
  <a
    :href="to"
    class="px-3 py-2 rounded"
    :class="{
      'bg-base-darkest text-white': !transparent,
      'hover:bg-base-lightest': transparent
    }"
  >
    <span v-if="icon" class="mr-2 svg-icon" v-html="icon" />
    <slot />
  </a>
</template>

<script type="ts">

export default {
  data () {
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
