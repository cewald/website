<template>
  <div
    class="container min-h-screen mx-auto flex flex-col justify-center px-4 py-10 font-mono text-base-darkest"
  >
    <div class="flex flex-wrap items-center mb-10">
      <logo class="mb-4 md:mr-4 md:mb-0" />
      <div>
        <h1 class="text-2xl font-bold">{{ headline }}</h1>
        <p class="font-thin text-lg" v-text="metaLine" />
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
  ]
})

</script>
