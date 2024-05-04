<script setup lang="ts">
import dayjs from 'dayjs'

const now = dayjs()
const dob = dayjs.unix(550627200)
const age = now.diff(dob, 'years')
</script>

<template>
  <div class="flex flex-wrap">
    <CvSectionWrapper class="print:break-after-page">
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
    <div class="grow w-full">
      <CvSectionWrapper
        title="Skillset "
        sub-title="_chronolocical"
      >
        <CvSkillGantt />
      </CvSectionWrapper>
    </div>
    <CvSectionWrapper
      title="Key strengths"
      class="w-2/4 print:w-full"
    >
      <ul>
        <li class="mb-4">
          <h4 class="mb-2 font-semibold">
            Full-stack development expertise
          </h4>
          I am proficient in both front-end and back-end development technologies, allowing me to take ownership of
          projects from start to finish.
        </li>
        <li class="mb-4">
          <h4 class="mb-2 font-semibold">
            Strong problem-solving skills
          </h4>
          I have a knack for identifying and resolving complex technical challenges, ensuring that projects stay on
          track and within budget.
        </li>
        <li class="mb-4">
          <h4 class="mb-2 font-semibold">
            Passion for learning
          </h4>
          I am always eager to learn new technologies and methodologies, ensuring that my skills remain up-to-date in
          the ever-evolving world of software development.
        </li>
      </ul>
    </CvSectionWrapper>
    <CvSectionWrapper
      title="Details"
      class="w-1/4 print:w-1/2"
    >
      <h3 class="text-base mb-2 lowercase">
        Based in
      </h3>
      <p class="mb-4">
        04105 Leipzig<br>
        Germany
      </p>
      <h3 class="text-base mb-2 lowercase">
        Age
      </h3>
      <p class="mb-4">
        {{ age }} years
      </p>
      <h3 class="text-base mb-2 lowercase">
        Email
      </h3>
      <p class="mb-4">
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
    <div class="w-1/4 print:w-1/2">
      <CvSectionWrapper title="Links">
        <a
          href="https://www.ewaldewald.com"
          target="_blank"
          class="mb-1.5 flex items-center hover:underline"
        >
          www.ewaldewald.com
        </a>
        <a
          href="https://github.com/cewald"
          target="_blank"
          class="mb-1.5 flex items-center hover:underline"
        >
          github.com/cewald
        </a>
        <a
          href="https://linkedin.com/in/ewaldtm"
          target="_blank"
          class="flex items-center hover:underline"
        >
          linkedin.com/in/ewaldtm
        </a>
      </CvSectionWrapper>
      <CvSectionWrapper title="Languages">
        <span class="lowercase">German</span>
        <span class="text-xxxs text-gray-light ml-1">_native speaker</span><br>
        <span class="lowercase">English</span>
        <span class="text-xxxs text-gray-light ml-1">_proficient</span>
      </CvSectionWrapper>
    </div>
  </div>
</template>
