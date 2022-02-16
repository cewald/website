<template>
  <div>
    <h2 class="font-bold"><slot /></h2>
    <template v-for="(skills, set) in skillset" :key="set">
      <h3
        class="mt-2 mr-2 text-base-light md:inline-block md:mt-0"
        v-text="`${set}:`"
      />
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
          'vue-storefront',
          'magento',
          'webpack',
          'vite',
          'esbuild'
        ],
        'server-side': ['nodejs', 'nuxt', 'php', 'nginx'],
        'dev-ops': [
          'jest',
          'cypress-io',
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
          'cloud-run',
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
