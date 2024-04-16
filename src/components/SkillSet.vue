<script lang="ts" setup>
const skillset = ref<{
  [title: string]: string[]
}>({
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
  <section
    class="text-lg"
    aria-labelledby="skillset-headline"
  >
    <HeadlineComponent id="skillset-headline">
      <slot />
    </HeadlineComponent>
    <div
      v-for="(skills, set) in skillset"
      :key="set"
      class="inline"
      aria-label="skillsubset"
    >
      <h3
        class="mr-2 mt-6 text-base-semilight dark:text-slate-300 md:mt-0 md:inline-block"
        v-text="set"
      />
      <ul
        class="inline"
        aria-label=""
      >
        <SkillPill
          v-for="skill in skills"
          :key="set + skill"
          :aria-label="skill"
        >
          {{ skill }}
        </SkillPill>
      </ul>
    </div>
  </section>
</template>
