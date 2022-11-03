<template>
  <div
    class="container mx-auto flex min-h-screen flex-col justify-center px-4 py-10 font-mono text-base-darkest"
  >
    <div class="mb-10 flex flex-wrap items-center">
      <logo class="mb-4 md:mr-4 md:mb-0" />
      <div class="flex flex-wrap items-center">
        <h1 class="order-1 flex-initial text-2xl font-bold">{{ headline }}</h1>
        <p class="order-3 w-full text-lg font-thin" v-text="metaLine" />
        <a
          href="https://www.linkedin.com/in/ewaldtm"
          title="I'm currently available"
          class="order-2 ml-2 text-xs uppercase text-red-700"
        >
          <span class="text-base-light"> | </span> Hire me
        </a>
      </div>
    </div>
    <skill-set class="mb-10">Skillset:</skill-set>
    <contact>Get in touch:</contact>
  </div>
</template>

<script setup>
import { ref, useMeta } from 'vue'
import upperFirst from 'lodash-es/upperFirst'

const headline = ref('Christian Ewald')
const metaLine = ref(
  'freelance full-stack javascript developer and software-engineer'
)

useMeta({
  title: `${headline.value} | Full-stack developer`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: `${upperFirst(metaLine.value)}`
    }
  ],
  htmlAttrs: { lang: 'en' }
})
</script>
