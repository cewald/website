<script lang="ts" setup>
import { reactive } from 'vue'
import SkillPill from '@/components/SkillPill.vue'

const skillset = reactive({
  frontend: [
    'javascript',
    'nodejs',
    'typescript',
    'vuejs',
    'gsap',
    'motion one',
    'vite',
    'rollup',
    'esbuild',
    'webpack',
  ],
  'server-side': ['nodejs', 'php', 'nginx'],
  'dev-ops': [
    'jest',
    'cypress-io',
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
  data: ['elasticsearch', 'firestore', 'mysql', 'redis'],
  paradigm: ['microservice', 'headless', 'serverless'],
  seo: ['lighthouse', 'web-vitals', 'structured-data']
})
</script>

<template>
  <div class="text-lg">
    <h2 class="mb-4 text-xl font-medium md:text-2xl">
      <slot />
    </h2>
    <template
      v-for="(skills, set) in skillset"
      :key="set"
    >
      <h3
        class="mr-2 mt-6 text-base-semilight md:mt-0 md:inline-block"
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
