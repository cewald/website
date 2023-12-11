<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useHead } from 'unhead'

import Logo from '@/assets/logo.svg'
import SkillSet from '@/components/SkillSet.vue'
import ContactBlock from '@/components/ContactBlock.vue'
import DarkModeToggle from '@/components/DarkModeToggle.vue'

const headline = ref('Christian Ewald')
const metaLine = ref(
  'Freelance full-stack javascript developer and software-engineer'
)

const shortName = computed(() => {
  const [ prename, lastname ] = headline.value.toLowerCase().split(' ')
  return `${prename[0]}:/${lastname}`
})

useHead({
  title: `${shortName.value} _ full-stack developer`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaLine.value
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
})

</script>

<template>
  <div
    class="container mx-auto flex min-h-screen flex-col justify-center
    px-6 py-16 font-mono text-base-darkest dark:text-white"
  >
    <div class="mb-16 flex flex-wrap items-center">
      <div class="basis-full">
        <Logo class="mb-16 w-40 fill-base-darkest dark:fill-white md:w-48" />
      </div>
      <div class="flex flex-wrap items-center">
        <h1 class="mb-5 flex flex-initial items-baseline text-5xl font-bold">
          {{ shortName }}
        </h1>
        <p
          class="w-full text-xl lowercase"
          v-text="'_' + metaLine"
        />
      </div>
    </div>
    <SkillSet class="mb-16">
      Skillset:
    </SkillSet>
    <ContactBlock>Get in touch:</ContactBlock>
  </div>
  <DarkModeToggle />
</template>
