<script lang="ts" setup>
import Skillset from '~/data/SkillGant.json'
import type CvSkillGanttHeader from '~/components/cv/SkillGanttHeader.vue'

const skillset = ref(Skillset as SkillSetSection[])
const { endDate, getStartDateFromSkillset } = useSkillGanttDates()

const startDate = computed(() => {
  return getStartDateFromSkillset(skillset.value, endDate.value)
})

const skillsetStruct = computed(() => {
  return ([ ...skillset.value ]).map(section => {
    section.skills.map(skill => {
      // Map year as JS date
      skill.timestampedTimeslots = skill.timeslots.map(s => {
        // eslint-disable-next-line prefer-const
        let [ start, stop ] = s.split('-').map(v => new Date(v))
        if (start.getFullYear() < startDate.value.getFullYear()) {
          start = startDate.value
        }

        return { start, stop }
      })

      skill.percentTimeslots = skill.timestampedTimeslots
      // Map start/stop time in %
        .map(({ start, stop }) => ({
          start: timeStampToPercent(start, startDate, endDate),
          stop: stop ? timeStampToPercent(stop, startDate, endDate) : undefined,
        }))
      // Map bar-width in %
        .map(({ start, stop }) => {
          const width: number
                = stop && stop > 0 ? stop - start : 100 - start
          return { start, stop, width }
        })
      // Reset start point if slot has prepending slots
        .map((s, i, arr) => {
          if (i > 0) {
            const { width: w } = arr[i - 1]
            s.start = s.start + w
          }
          return s
        })

      return skill
    })
    return section
  })
})

const containerEl = ref<HTMLElement | null>(null)
const yearScaleEl = ref<InstanceType<typeof CvSkillGanttHeader> | null>(null)
const sectionEl = ref<HTMLElement[] | null>(null)

useSkillGanttScroll(containerEl, yearScaleEl, sectionEl)
</script>

<template>
  <div
    ref="containerEl"
    class="-mx-6 overflow-hidden sm:mx-0 print:mx-0"
  >
    <div class="w-[200vw] pr-8 sm:w-auto sm:pr-0 print:w-auto print:pr-0">
      <CvSkillGanttHeader
        ref="yearScaleEl"
        :start-date="startDate"
        :end-date="endDate"
        class="hidden sm:block print:block"
      />
      <div ref="sectionsWrapperEl">
        <div
          v-for="({ section, skills }, i) in skillsetStruct"
          :key="'section-' + section"
          ref="sectionEl"
          class="lowercase"
          :class="{
            'mb-8': skillsetStruct.length - 1 !== i,
          }"
          role="list"
          :aria-label="section"
        >
          <h3
            class="mx-6 mb-1 flex items-baseline font-mono text-base-semilight dark:text-white sm:mx-0 print:mx-0"
            aria-hidden="true"
          >
            {{ section }}
          </h3>
          <div
            id="scrollElement"
            class="mx-6 sm:mx-0 print:mx-0"
          >
            <CvSkillGanttHeader
              :start-date="startDate"
              :end-date="endDate"
              class="sm:hidden print:hidden"
            />
            <div
              v-for="({ title, subTitle, percentTimeslots, timestampedTimeslots }, j) in skills"
              :key="title"
              class="flex items-baseline leading-snug"
              :class="{ 'mb-0.5': skills.length - 1 !== j }"
              role="listitem"
              :aria-label="title + (subTitle ? ' ' + subTitle : '') + ': '
                + timestampedTimeslots
                  .map(({ start: a, stop: b }) => a.getFullYear() + ' - ' + (b ? b.getFullYear() : 'now'))
                  .join(', ')"
            >
              <template
                v-for="({ width, start }, k) in percentTimeslots"
                :key="'bar-' + title + k"
              >
                <div
                  v-if="100 - start - width > 0"
                  :style="{ width: 100 - start - width + '%' }"
                  class="flex-fix"
                />
                <div
                  class="h-4 bg-base-lightest dark:dark:bg-slate-300"
                  :class="[start === 0 ? 'flex-auto' : 'flex-fix shrink']"
                  :style="{ width: width + '%' }"
                />
                <div
                  v-if="k === percentTimeslots.length - 1"
                  class="flex-auto pl-2 text-base font-light"
                >
                  {{ title }}
                  <span
                    v-if="subTitle"
                    class="text-base-semilight-contrast contrast-more:text-base
                      dark:text-slate-400 dark:contrast-more:text-white print:text-base-semilight"
                    v-text="subTitle"
                  />
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
