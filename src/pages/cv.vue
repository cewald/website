<script setup lang="ts">
import dayjs from 'dayjs'
import KeyStrengthsData from '~/data/KeyStrengths.json'

const keyStrengths = shallowRef(KeyStrengthsData)

const languages = shallowRef([
  [ 'German', 'native speaker' ],
  [ 'English', 'proficient' ],
])

const links = shallowRef([
  [ 'Website', 'www.ewaldewald.com' ],
  [ 'GitHub', 'github.com/cewald' ],
  [ 'LinkedIn', 'linkedin.com/in/ewaldtm' ],
])

const now = dayjs()
const dob = dayjs.unix(550627200)
const age = now.diff(dob, 'years')
</script>

<template>
  <div class="flex flex-wrap -mx-6">
    <CvSectionWrapper
      class="px-6 font-light print:order-1 hyphens-auto"
      aria-label="Introduction"
      lang="en"
    >
      <p class="mb-4">
        I’m a proficient full-stack software engineer with a passion for crafting accessible and inclusive digital
        solutions. I bring a deep understanding of the entire software development lifecycle, from ideation to
        deployment, and translate complex requirements into robust, scale- and maintainable code.
      </p>
      <p class="mb-4">
        My expertise covers a wide range of technologies, including frontend frameworks, backend languages, as
        well as dev-ops practices. I am a firm believer in continuous improvement and am always eager to adopt new tools
        and methodologies that enhance the development process.
      </p>
      <p>
        I enjoy collaborative environments and have a proven ability to work effectively with cross-functional
        teams to deliver high-quality software solutions that meet the needs of both users and clients.
      </p>
    </CvSectionWrapper>
    <CvSectionWrapper
      title="Skillset"
      sub-title="_chronological"
      class="grow w-full px-6 print:order-5 print:mb-0"
      aria-label="Chronological Skillset"
      title-aria-label="Chronological Skillset"
    >
      <CvSkillGantt />
    </CvSectionWrapper>
    <CvSectionWrapper
      title="Key strengths"
      class="w-full md:w-2/4 md:grow print:w-full px-6 print:order-2"
    >
      <ul class="font-light">
        <li
          v-for="({ title, text }, i) in keyStrengths"
          :key="`key-strength-${i}`"
          class="mb-4"
          :aria-labelledby="`key-strength-${i}`"
        >
          <h4
            :id="`key-strength-${i}`"
            class="mb-2 font-normal flex items-center"
            :aria-label="title"
          >
            <span class="w-6">_</span>
            {{ title }}
          </h4>
          <p
            class="ml-6 hyphens-auto"
            lang="en"
          >
            {{ text }}
          </p>
        </li>
      </ul>
    </CvSectionWrapper>
    <CvSectionWrapper
      title="Details"
      class="w-full md:w-auto print:w-1/2 px-6 print:order-3"
      aria-label="Personal Details"
      title-aria-label="Personal Details"
    >
      <h3 class="text-base mb-2 lowercase font-normal">
        Based in
      </h3>
      <p class="mb-4 font-light">
        04105 Leipzig<br>
        Germany
      </p>
      <h3 class="text-base mb-2 lowercase font-normal">
        Age
      </h3>
      <p class="mb-4 font-light">
        {{ age }} years
      </p>
      <h3 class="text-base mb-2 lowercase font-normal">
        Email
      </h3>
      <p class="mb-4 font-light">
        <a
          href="mailto:me@ewaldewald.com"
          title="Email"
          target="_blank"
          class="hover:underline underline-offset-8 print:underline-offset-4
            decoration-1 decoration-base-lighter hover:decoration-black
            dark:decoration-slate-300 dark:hover:decoration-white"
        >
          me@ewaldewald.com
        </a>
      </p>
    </CvSectionWrapper>
    <div class="w-full md:w-auto print:w-1/2 px-6 print:order-4">
      <CvSectionWrapper
        title="Languages"
        class="md:mb-8 print:mb-8"
      >
        <ul class="font-light">
          <li
            v-for="([lang, state], i) in languages"
            :key="`lang-${i}`"
            :aria-label="lang"
          >
            <span class="lowercase">{{ lang }}</span>
            <span
              class="text-base text-base-light ml-1 dark:text-slate-300 print:text-base-semilight"
            >_{{ state }}</span>
          </li>
        </ul>
      </CvSectionWrapper>
      <CvSectionWrapper
        title="Links"
        class="print:break-after-page"
      >
        <ul class="font-light">
          <li
            v-for="([title, link], i) in links"
            :key="`link-${i}`"
            :aria-label="title"
          >
            <a
              :href="`https://${link}`"
              target="_blank"
              :title="title"
              class="mb-3 flex items-center underline underline-offset-8 print:underline-offset-4
                decoration-1 decoration-base-lighter hover:decoration-black
                dark:decoration-slate-300 dark:hover:decoration-white"
            >
              {{ link }}
            </a>
          </li>
        </ul>
      </CvSectionWrapper>
    </div>
  </div>
</template>

<style lang="scss">
@media print {
  html { font-size: 7pt; }
}

@page {
  size: A4;
  margin: 20mm 20mm 20mm 30mm;
}
</style>
