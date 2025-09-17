<script lang="ts" setup>
const projects: {
  title: string
  link: string
  tags: string[]
}[] = [
  {
    title: 'livekulturwissen.org',
    link: 'https://www.livekulturwissen.org',
    tags: ['payload-cms', 'vue', 'nuxt', 'wai-aria', 'continuos-integration', 'headless-cms'],
  },
  {
    title: 'initiative-awareness.de',
    link: 'https://www.initiative-awareness.de',
    tags: ['vue', 'nuxt', 'wai-aria', 'continuos-integration', 'headless-cms'],
  },
  {
    title: 'twodo.studio',
    link: 'https://www.twodo.studio',
    tags: ['vue', 'nuxt', 'wai-aria', 'continuos-integration', 'headless-cms'],
  },
  {
    title: 'space-transformer.com',
    link: 'https://www.space-transformer.com',
    tags: ['vue', 'nuxt', 'wai-aria', 'gsap', 'continuos-integration', 'headless-cms'],
  },
  {
    title: 'schwabenbauer.de',
    link: 'https://www.schwabenbauer.de',
    tags: ['vue', 'nuxt', 'wai-aria', 'gsap', 'continuos-integration', 'headless-cms'],
  },
  {
    title: 'vermaechtnis-ohne-grenzen.de',
    link: 'https://www.vermaechtnis-ohne-grenzen.de/',
    tags: ['vue', 'nuxt', 'wai-aria', 'continuos-integration', 'headless-cms'],
  },
]
</script>

<template>
  <section aria-labelledby="projects-headline">
    <HeadlineComponent id="projects-headline">
      <slot />
    </HeadlineComponent>
    <div>
      <div
        v-for="({ title, link, tags }, i) in projects"
        :key="i"
        class="mt-2"
        aria-label="project"
      >
        <h3 class="mr-2 mt-6 text-lg dark:text-white md:mt-0 md:inline-block">
          <span class="mr-2 dark:text-white">_</span>
          <a
            :href="link"
            target="_blank"
            :title="title"
            class="underline decoration-base-lighter underline-offset-8 hover:decoration-black md:decoration-1"
          >
            {{ title }}
          </a>
        </h3>
        <ul
          class="ml-2 mt-2 md:ml-2 md:inline"
          aria-label="feature tags"
        >
          <li
            v-for="tag in tags"
            :key="tag"
            class="mr-2 mt-2 inline-block bg-base-lightest px-2 py-1 lowercase hover:cursor-default dark:bg-gray-900"
          >
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
