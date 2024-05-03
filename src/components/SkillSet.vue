<script lang="ts" setup>
import Skillset from '~/data/SkillSet.json'

const skillset = ref<{
  [title: string]: string[]
}>(Skillset)
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
