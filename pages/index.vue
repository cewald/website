<template>
  <div
    class="container min-h-screen mx-auto flex flex-col justify-center px-4 py-10 font-mono text-base-darkest"
  >
    <div class="mb-10">
      <h1 class="text-2xl font-bold">{{ headline }}</h1>
      <p class="font-thin text-lg">
        {{ metaLine }}
      </p>
    </div>
    <div class="mb-10">
      <h2 class="font-bold">Skillset:</h2>
      <template v-for="(skills, set) in skillset">
        <h3 :key="set" class="mt-2 text-base-light md:inline-block md:mt-0">
          {{ set }}:
        </h3>
        <SkillPill v-for="skill in skills" :key="set + skill">
          {{ skill }}
        </SkillPill>
      </template>
    </div>
    <div>
      <h2 class="font-bold mb-2">Get in touch:</h2>
      <div class="mb-2 md:mb-0 md:inline-block">
        <ContactPill
          to="https://github.com/cewald"
          :icon="['fab', 'github']"
          class="mr-4"
        >
          Github
        </ContactPill>
        <ContactPill
          to="https://www.linkedin.com/in/cewald1"
          :icon="['fab', 'linkedin']"
          class="mr-4"
        >
          LinkedIn
        </ContactPill>
      </div>
      <ContactPill
        to="mailto:hello@christianewald.de"
        :icon="['far', 'envelope']"
        :transparent="true"
        class="mr-4"
      >
        hello@christianewald.de
      </ContactPill>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ContactPill from '~/components/ContactPill.vue'

export default Vue.extend({
  components: { ContactPill },
  data() {
    return {
      headline: 'Christian Ewald',
      metaLine:
        'freelance full-stack javascript developer and software-engineer'
    }
  },
  head() {
    return {
      title: this.metaTitle,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Full-stack javascript developer and software-engineer'
        }
      ]
    }
  },
  computed: {
    metaTitle() {
      return `${this.headline} - ${this.metaLine}`
    },
    skillset() {
      return {
        frontend: [
          'javascript',
          'nodejs',
          'typescript',
          'vuejs',
          'nuxt',
          'vue-storefront',
          'webpack'
        ],
        'server-side': ['nodejs', 'php', 'nginx'],
        'dev-ops': [
          'cypress-io',
          'jest',
          'codeception',
          'continous-integration & -deployment',
          'test-driven development',
          'automated-testing',
          'github-actions',
          'gitlab-pipelines',
          'git'
        ],
        architecture: [
          'docker',
          'kubernetes',
          'helmet',
          'aws',
          'gcs',
          'netlify',
          'heroku'
        ],
        data: ['elasticsearch', 'mysql', 'redis'],
        maxim: ['microservice', 'headless', 'serverless']
      }
    }
  }
})
</script>
