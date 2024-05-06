<script setup lang="ts">
import dayjs from 'dayjs'

const now = dayjs()
const dob = dayjs.unix(550627200)
const age = now.diff(dob, 'years')
</script>

<template>
  <div class="flex flex-wrap -mx-4">
    <CvSectionWrapper
      class="print:break-after-page px-6 font-light"
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
      title="Skillset "
      sub-title="_chronolocical"
      class="grow w-full print:break-after-page px-6"
    >
      <CvSkillGantt />
    </CvSectionWrapper>
    <CvSectionWrapper
      title="Key strengths"
      class="w-full md:w-2/4 md:grow print:w-full px-6"
    >
      <ul class="font-light">
        <li class="mb-4">
          <h4 class="mb-2 font-normal">
            _
            Full-stack development expertise
          </h4>
          <p
            class="ml-6 hyphens-auto"
            lang="en"
          >
            I am proficient in both front-end and back-end development technologies, allowing me to take ownership of
            projects from start to finish.
          </p>
        </li>
        <li class="mb-4">
          <h4 class="mb-2 font-normal">
            _
            Strong problem-solving skills
          </h4>
          <p
            class="ml-6 hyphens-auto"
            lang="en"
          >
            I have a knack for identifying and resolving complex technical challenges, ensuring that projects stay on
            track and within budget.
          </p>
        </li>
        <li class="mb-4">
          <h4 class="mb-2 font-normal">
            _
            Passion for learning
          </h4>
          <p
            class="ml-6 hyphens-auto"
            lang="en"
          >
            I am always eager to learn new technologies and methodologies, ensuring that my skills remain up-to-date in
            the ever-evolving world of software development.
          </p>
        </li>
      </ul>
    </CvSectionWrapper>
    <CvSectionWrapper
      title="Details"
      class="w-full md:w-auto print:w-1/2 px-6"
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
          class="hover:underline"
        >
          me@ewaldewald.com
        </a>
      </p>
    </CvSectionWrapper>
    <div class="w-full md:w-auto print:w-1/2 px-6">
      <CvSectionWrapper
        title="Languages"
        class="md:mb-8"
      >
        <ul class="font-light">
          <li>
            <span class="lowercase">German</span>
            <span class="text-base text-base-light ml-1">_native speaker</span><br>
          </li>
          <li>
            <span class="lowercase">English</span>
            <span class="text-base text-base-light ml-1">_proficient</span>
          </li>
        </ul>
      </CvSectionWrapper>
      <CvSectionWrapper title="Links">
        <ul class="font-light">
          <li>
            <a
              href="https://www.ewaldewald.com"
              target="_blank"
              class="mb-3 flex items-center underline underline-offset-8
                decoration-1 decoration-base-light hover:decoration-black"
            >
              www.ewaldewald.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/cewald"
              target="_blank"
              class="mb-3 flex items-center underline underline-offset-8
                decoration-1 decoration-base-light hover:decoration-black"
            >
              github.com/cewald
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/ewaldtm"
              target="_blank"
              class="flex items-center underline underline-offset-8
                decoration-1 decoration-base-light hover:decoration-black"
            >
              linkedin.com/in/ewaldtm
            </a>
          </li>
        </ul>
      </CvSectionWrapper>
    </div>
  </div>
</template>
