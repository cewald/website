<template>
  <div
    class="container min-h-screen mx-auto flex flex-col justify-center px-4 py-10 font-mono text-base-darkest"
  >
    <div class="flex flex-wrap items-center mb-10">
      <logo class="mb-4 md:mr-4 md:mb-0" />
      <div>
        <h1 class="text-2xl font-bold">{{ headline }}</h1>
        <p class="font-thin text-lg">
          {{ metaLine }}
        </p>
      </div>
    </div>
    <skill-set class="mb-10">Skillset:</skill-set>
    <contact>Get in touch:</contact>
  </div>
</template>

<script>
import Vue from 'vue'
import upperFirst from 'lodash-es/upperFirst'

export default Vue.extend({
  data() {
    return {
      headline: 'Christian Ewald',
      metaLine:
        'freelance full-stack javascript developer and software-engineer'
    }
  },
  head() {
    return {
      title: `${this.headline} | Full-stack developer`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${upperFirst(this.metaLine)}`
        }
      ]
    }
  }
})
</script>
