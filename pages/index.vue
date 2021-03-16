<template>
  <div
    class="container min-h-screen mx-auto flex flex-col justify-center px-4 py-10 font-mono text-base-darkest"
  >
    <div class="mb-10">
      <h1 class="text-2xl font-bold">Christian Ewald</h1>
      <p class="font-thin text-lg">
        freelance full-stack javascript developer and software-engineer
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
      <h2 class="font-bold">Get in touch:</h2>
      <a href="https://github.com/cewald">github.com/cewald</a>
      <a href="https://www.linkedin.com/in/cewald1">linkedin.com/in/cewald1</a>
      <a href="mailto:hello@christianewald.de">hello@christianewald.de</a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  head() {
    return {
      title: 'full-stack javascript developer and software-engineer',
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
}
</script>
