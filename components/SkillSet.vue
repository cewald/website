<template>
  <div>
    <h2 class="font-bold"><slot /></h2>
    <template v-for="(skills, set) in skillset">
      <h3
        :key="set"
        class="mt-2 text-base-light md:inline-block md:mt-0"
        v-text="`${set}:`"
      />
      <SkillPill v-for="skill in skills" :key="set + skill" v-text="skill" />
    </template>
  </div>
</template>

<script>
export default {
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
          'magento',
          'webpack'
        ],
        'server-side': ['nodejs', 'php', 'nginx'],
        'dev-ops': [
          'cypress-io',
          'jest',
          'codeception',
          'continous-integration',
          'continous-deployment',
          'test-driven development',
          'automated-testing',
          'github-actions',
          'gitlab-pipelines',
          'git'
        ],
        architecture: [
          'docker',
          'gcp',
          'app-engine',
          'firebase',
          'aws',
          'netlify',
          'kubernetes',
          'helmet'
        ],
        data: ['elasticsearch', 'mysql', 'redis', 'firestore'],
        paradigm: ['microservice', 'headless', 'serverless']
      }
    }
  }
}
</script>
