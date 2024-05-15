<script lang="ts" setup>
import Skillset from '~/data/SkillGant.json'

type SkillSetSkill = {
  title: string
  subTitle?: string
  timeslots: string[]
  timestampedTimeslots: { start: Date, stop?: Date }[]
  percentTimeslots: {
    start: number
    stop?: number
    width: number
  }[]
}

type SkillSetSection = {
  section: string
  skills: SkillSetSkill[]
}

const skillset = ref(Skillset as SkillSetSection[])
const endDate = ref(new Date(new Date().getFullYear().toString()))

const containerEl = ref<HTMLElement | null>(null)
const yearScaleEl = ref<HTMLElement | null>(null)
const sectionEl = ref<HTMLElement[] | null>(null)
const { isReady } = useSkillGantScroll(containerEl, yearScaleEl, sectionEl)

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
          start: timeStampToPercent(start),
          stop: stop ? timeStampToPercent(stop) : undefined,
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

const startDate = computed(() => {
  const slots: number[] = []
  skillset.value.forEach(section => {
    for (const skill of section.skills) {
      const startSlots = skill.timeslots.map(
        s => s.split('-').map(v => parseInt(v))[0],
      )

      slots.push(...startSlots)
    }
  })

  const firstYear = slots.reduce((a, b) => (a > b ? b : a))

  const endDateYear = endDate.value.getFullYear()
  if (firstYear < endDateYear - 12) {
    return new Date((endDateYear - 12).toString())
  }

  return new Date(firstYear.toString())
})

const yearScale = computed(() => {
  return getRange(
    endDate.value.getFullYear(),
    startDate.value.getFullYear(),
    4,
  )
    .map(y => Math.round(y))
    .map(year => ({
      year,
      percent: timeStampToPercent(new Date(year.toString())),
    }))
    .reverse()
})

const timeStampToPercent = (timestamp: Date): number => {
  const start = startDate.value.getTime()
  const end = endDate.value.getTime()
  const scale = end - start
  const point = timestamp.getTime() - start
  return Math.round((point * 100) / scale)
}

const getRange = (upper: number, lower: number, steps: number) => {
  const difference = upper - lower
  const increment = difference / (steps - 1)
  return [
    lower,
    ...Array(steps - 2)
      .fill('')
      .map((_, index) => lower + increment * (index + 1)),
    upper,
  ]
}
</script>

<template>
  <div
    ref="containerEl"
    :class="{ 'overflow-x-visible': isReady }"
  >
    <div :class="{ 'w-[200vw] md:w-auto': isReady }">
      <div
        ref="yearScaleEl"
        class="relative mb-8 h-7 bg-white"
      >
        <div
          v-for="({ year, percent }, i) in yearScale"
          :key="`year-scale-${year}`"
          class="absolute top-0 border-base-lighter dark:border-slate-300 px-2"
          :class="[i > 0 ? '-translate-x-full border-r' : 'border-l']"
          :style="{ left: 100 - percent + '%' }"
          aria-hidden="true"
          v-text="year"
        />
      </div>
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
            class="flex items-baseline font-mono text-base-semilight dark:text-white mb-1"
            aria-hidden="true"
          >
            {{ section }}
          </h3>
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
                class="h-4 bg-base-lightest"
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
                  class="text-base-light dark:text-slate-400"
                  v-text="subTitle"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
