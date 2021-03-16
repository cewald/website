<template>
  <div>
    <h2 class="font-bold"><slot /></h2>
    <template v-for="(skills, set) in skillset">
      <h3 :key="set" class="mt-2 text-base-light md:inline-block md:mt-0">
        {{ set }}:
      </h3>
      <SkillPill v-for="skill in skills" :key="set + skill">
        {{ skill }}
      </SkillPill>
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
