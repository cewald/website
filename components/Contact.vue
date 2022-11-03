<template>
  <div class="flex flex-wrap">
    <h2 class="mb-2 w-full font-bold"><slot /></h2>
    <div class="mb-2 flex md:mb-0">
      <ContactPill
        to="https://github.com/cewald"
        :icon="faBrandsGithub"
        class="mr-4"
      >
        Github
      </ContactPill>
      <ContactPill
        to="https://www.linkedin.com/in/ewaldtm"
        :icon="faBrandsLinkedin"
        class="mr-4"
      >
        LinkedIn
      </ContactPill>
    </div>
    <ContactPill
      to="mailto:hello@christianewald.de"
      :icon="faBrandsEnvelope"
      :transparent="true"
      class="mr-4 whitespace-nowrap"
    >
      hello@christianewald.de
    </ContactPill>
  </div>
</template>

<script lang="ts">
import faBrandsGithub from '~/assets/icons/fa-brands-github.svg?raw'
import faBrandsLinkedin from '~/assets/icons/fa-brands-linkedin.svg?raw'
import faBrandsEnvelope from '~/assets/icons/fa-regular-envelope.svg?raw'

export default {
  data() {
    return {
      faBrandsGithub,
      faBrandsLinkedin,
      faBrandsEnvelope
    }
  }
}
</script>
