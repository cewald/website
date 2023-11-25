<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useHead } from 'unhead'
import Logo from '@/assets/logo.svg'
import SkillSet from '@/components/SkillSet.vue'
import ContactBlock from '@/components/ContactBlock.vue'

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
    }
  ],
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
})

</script>

<template>
  <div
    class="container mx-auto flex min-h-screen flex-col justify-center px-6 py-12 font-mono text-base-darkest"
  >
    <div class="mb-14 flex flex-wrap items-center md:mb-10">
      <div class="basis-full">
        <Logo class="mb-6 w-20 md:w-28" />
      </div>
      <div class="flex flex-wrap items-center">
        <h1 class="order-1 mb-3 flex flex-initial items-baseline text-3xl font-bold md:text-5xl">
          {{ shortName }}
        </h1>
        <p
          class="order-3 w-full text-xl font-thin lowercase"
          v-text="'_' + metaLine"
        />
      </div>
    </div>
    <SkillSet class="mb-14">
      Skillset:
    </SkillSet>
    <ContactBlock>Get in touch:</ContactBlock>
  </div>
</template>
