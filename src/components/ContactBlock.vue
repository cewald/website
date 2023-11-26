<script lang="ts" setup>
// @ts-ignore
import faFileCode from '~icons/material-symbols/description'
// @ts-ignore
import faBrandsGithub from '~icons/mdi/github'
// @ts-ignore
import faBrandsLinkedin from '~icons/mdi/linkedin'
// @ts-ignore
import faBrandsEnvelope from '~icons/material-symbols/mail-outline'

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
      >
        <faFileCode class="mr-2" />
      </ContactPill>
      <ContactPill
        title="Github"
        to="https://github.com/cewald"
      >
        <faBrandsGithub class="mr-2" />
      </ContactPill>
      <ContactPill
        title="LinkedIn"
        to="https://www.linkedin.com/in/ewaldtm"
      >
        <faBrandsLinkedin class="mr-2" />
      </ContactPill>
    </div>
    <ContactPill
      title="hello@christianewald.de"
      to="mailto:hello@christianewald.de"
      :transparent="true"
      class="mr-4 whitespace-nowrap"
    >
      <faBrandsEnvelope class="mr-2" />
    </ContactPill>
  </div>
</template>
