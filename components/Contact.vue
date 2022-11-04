<template>
  <div class="flex flex-wrap">
    <h2 class="mb-2 w-full font-bold"><slot /></h2>
    <div class="mb-2 flex md:mb-0">
      <ContactPill title="Github" to="https://github.com/cewald" class="mr-4">
        <faBrandsGithub class="mr-2" />
      </ContactPill>
      <ContactPill
        title="LinkedIn"
        to="https://www.linkedin.com/in/ewaldtm"
        class="mr-4"
      >
        <faBrandsLinkedin class="mr-2" />
      </ContactPill>
      <ContactPill title="CV" to="https://cewald.github.io/cv/" class="mr-4">
        <faFileCode class="mr-2" />
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

<script lang="ts" setup>
import faFileCode from '~icons/fa6-solid/file-lines'
import faBrandsGithub from '~icons/fa-brands/github'
import faBrandsLinkedin from '~icons/fa-brands/linkedin'
import faBrandsEnvelope from '~icons/fa6-regular/envelope'
</script>
