<script lang="ts" setup>
import ContactPill from '@/components/ContactPill.vue'
</script>

<template>
  <div class="flex flex-wrap overflow-scroll">
    <h2 class="mb-4 w-full text-xl font-medium lowercase md:text-2xl">
      <slot />
    </h2>
    <div class="flex flex-wrap [&>*]:mb-4 [&>*]:mr-4 md:[&>*]:mb-0">
      <ContactPill
        title="CV"
        to="https://cewald.github.io/cv/"
      />
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
