<script lang="ts" setup>
import HeadlineComponenent from '@/components/HeadlineComponent.vue'
import ContactPill from '@/components/ContactPill.vue'
</script>

<template>
  <div class="flex flex-wrap overflow-scroll">
    <HeadlineComponenent>
      <slot />
    </HeadlineComponenent>
    <div class="flex flex-wrap [&>*]:mb-4 [&>*]:mr-4 md:[&>*]:mb-0">
      <ContactPill
        title="Github"
        to="https://github.com/cewald"
      />
      <ContactPill
        title="LinkedIn"
        to="https://www.linkedin.com/in/ewaldtm"
      />
    </div>
    <ContactPill
      title="me@ewaldewald.com"
      to="mailto:me@ewaldewald.com"
      :transparent="true"
      class="mr-4 whitespace-nowrap"
    />
  </div>
</template>
