<script lang="ts" setup>
import { reactive } from 'vue'
import HeadlineComponenent from '@/components/HeadlineComponent.vue'
import SkillPill from '@/components/SkillPill.vue'

const skillset = reactive({
  frontend: [
    'JavaScript',
    'node.js',
    'TypeScript',
    'Vue.js',
    'Nuxt',
    'GSAP',
    'Motion One',
    'TailwindCSS',
    'Vite',
    'Rollup',
    'esbuild',
    'webpack',
  ],
  'server-side': ['node.js', 'PHP', 'NGINX'],
  'dev-ops': [
    'Jest',
    'cypress-io',
    'Continous-Integration',
    'Continous-Deployment',
    'Test-Driven Development',
    'Automated-Testing',
    'GitHub-Actions',
    'GitLab-Pipelines',
    'git'
  ],
  architecture: [
    'Docker',
    'GCP',
    'App-Engine',
    'Cloud-Run',
    'Firebase',
    'supabase',
    'Netlify',
    'Kubernetes',
    'Helmet'
  ],
  data: ['ElasticSearch', 'Firestore', 'MYSQL', 'PostgreSQL', 'Redis'],
  paradigm: ['WAI-ARIA', 'Microservice', 'Headless', 'Serverless', 'aCSS', '1312'],
  seo: ['Lighthouse', 'Web-Vitals', 'Structured-Data']
})
</script>

<template>
  <div class="text-lg">
    <HeadlineComponenent>
      <slot />
    </HeadlineComponenent>
    <template
      v-for="(skills, set) in skillset"
      :key="set"
    >
      <h3
        class="mr-2 mt-6 text-base-semilight dark:text-slate-300 md:mt-0 md:inline-block"
        v-text="set"
      />
      <ul class="inline">
        <SkillPill
          v-for="skill in skills"
          :key="set + skill"
        >
          {{ skill }}
        </SkillPill>
      </ul>
    </template>
  </div>
</template>
