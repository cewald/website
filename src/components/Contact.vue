<script lang="ts" setup>
import faFileCode from '~icons/fa6-solid/file-lines'
import faBrandsGithub from '~icons/fa-brands/github'
import faBrandsLinkedin from '~icons/fa-brands/linkedin'
import faBrandsEnvelope from '~icons/fa6-regular/envelope'
import ContactPill from '@/components/ContactPill.vue'
</script>

<template>
  <div class="flex flex-wrap overflow-scroll">
    <h2 class="mb-4 w-full text-xl font-medium md:text-2xl">
      <slot />
    </h2>
    <div class="flex flex-wrap [&>*]:mb-4 [&>*]:mr-4 md:[&>*]:mb-0">
      <ContactPill
        title="CV"
        to="https://cewald.github.io/cv/"
      >
        <faFileCode class="mr-3" />
      </ContactPill>
      <ContactPill
        title="Github"
        to="https://github.com/cewald"
      >
        <faBrandsGithub class="mr-3" />
      </ContactPill>
      <ContactPill
        title="LinkedIn"
        to="https://www.linkedin.com/in/ewaldtm"
      >
        <faBrandsLinkedin class="mr-3" />
      </ContactPill>
    </div>
    <ContactPill
      title="hello@christianewald.de"
      to="mailto:hello@christianewald.de"
      :transparent="true"
      class="mr-4 whitespace-nowrap"
    >
      <faBrandsEnvelope class="mr-3" />
    </ContactPill>
  </div>
</template>
