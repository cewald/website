<script lang="ts" setup>
import { reactive } from 'vue'
import SkillPill from '@/components/SkillPill.vue'

const skillset = reactive({
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
  paradigm: ['microservice', 'headless', 'serverless'],
  seo: ['lighthouse', 'web-vitals', 'structured-data']
})
</script>

<template>
  <div>
    <h2 class="mb-4 font-bold md:mb-0">
      <slot />
    </h2>
    <template
      v-for="(skills, set) in skillset"
      :key="set"
    >
      <h3
        class="text-base-semilight mr-2 mt-2 md:mt-0 md:inline-block"
        v-text="`${set}:`"
      />
      <SkillPill
        v-for="skill in skills"
        :key="set + skill"
      >
        {{ skill }}
      </SkillPill>
    </template>
  </div>
</template>
