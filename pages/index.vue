<template>
  <div class="container min-h-screen mx-auto flex flex-col justify-center px-4 py-10 font-mono text-base-darkest">
    <div class="flex flex-wrap items-center mb-10">
      <logo class="mb-4 md:mr-4 md:mb-0" />
      <div class="flex flex-wrap items-center">
        <h1 class="flex-initial text-2xl font-bold order-1">{{ headline }}</h1>
        <p class="font-thin text-lg      w-full order-3" v-text="metaLine" />
        <a href="https://www.linkedin.com/in/ewaldtm" title="I'm currently available"
          class="order-2 ml-2 text-xs text-red-700 uppercase">
          <span class="text-base-light"> | </span> Hire me
        </a>
      </div>
    </div>
    <skill-set class="mb-10">Skillset:</skill-set>
    <contact>Get in touch:</contact>
  </div>
</template>

<script setup>
import upperFirst from 'lodash-es/upperFirst'

const headline = ref('Christian Ewald')
const metaLine = ref('freelance full-stack javascript developer and software-engineer')

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
