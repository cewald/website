<script setup lang="ts">
import Logo from '@/assets/logo.svg'

const headline = ref('Christian Ewald')
const metaLine = ref(
  'Freelance full-stack javascript developer and software-engineer'
)

const shortName = computed(() => {
  const [ prename, lastname ] = headline.value.toLowerCase().split(' ')
  return `${prename[0]}:/${lastname}`
})

const lastName = computed(() => {
  const [ prename, lastname ] = headline.value.split(' ')
  return lastname
})

useHead({
  title: `${shortName.value} _ full-stack developer`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: metaLine.value
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  htmlAttrs: { lang: 'en' },
  link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }]
})
</script>

<template>
  <div
    class="container mx-auto flex min-h-screen flex-col justify-center
    px-6 py-16 font-mono text-base-darkest dark:text-white"
  >
    <div class="mb-16 flex flex-wrap items-center">
      <div class="basis-full">
        <Logo
          class="mb-16 w-40 fill-base-darkest dark:fill-white md:w-48"
          aria-hidden="true"
        />
      </div>
      <div
        class="flex flex-wrap items-center"
        aria-label="Title"
      >
        <h1
          class="mb-5 flex flex-initial items-baseline text-5xl font-bold"
          :aria-label="lastName"
        >
          {{ shortName }}
        </h1>
        <p
          class="w-full text-xl lowercase"
          :aria-label="metaLine"
          v-text="'_' + metaLine"
        />
      </div>
    </div>
    <slot/>
  </div>
  <DarkModeToggle />
</template>
