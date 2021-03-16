<template>
  <div class="container">
    <h1>Christian Ewald</h1>
    <h2>full-stack javascript developer and software-engineer</h2>
    <div>
      <h3>Skillset:</h3>
      <Skillset
        title="frontend"
        :skills="[
          'javascript',
          'nodejs',
          'typescript',
          'vuejs',
          'nuxt',
          'vue-storefront',
          'webpack'
        ]"
      />
      <Skillset title="server-side" :skills="['nodejs', 'php', 'nginx']" />
      <Skillset
        title="dev-ops"
        :skills="[
          'cypress-io',
          'jest',
          'codeception',
          'continous-integration & -deployment',
          'test-driven development',
          'automated-testing',
          'github-actions',
          'gitlab-pipelines',
          'git'
        ]"
      />
      <Skillset
        title="architecture"
        :skills="[
          'docker',
          'kubernetes',
          'helmet',
          'aws',
          'gcs',
          'netlify',
          'heroku'
        ]"
      />
      <Skillset
        title="maxim"
        :skills="['microservice', 'headless', 'serverless']"
      />
      <Skillset title="data" :skills="['elasticsearch', 'mysql', 'redis']" />
    </div>
    <div>
      <h3>Get in touch:</h3>
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
  }
}
</script>
