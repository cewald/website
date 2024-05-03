<script lang="ts">
import Skillset from '~/data/skillset.json'

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

export default {
  setup() {
    const skillset = ref(Skillset as SkillSetSection[])
    const endDate = ref(new Date(new Date().getFullYear().toString()))

    return {
      skillset,
      endDate,
    }
  },
  computed: {
    skillsetStruct() {
      return ([ ...this.skillset ]).map(section => {
        section.skills.map(skill => {
          // Map year as JS date
          skill.timestampedTimeslots = skill.timeslots.map(s => {
            // eslint-disable-next-line prefer-const
            let [ start, stop ] = s.split('-').map(v => new Date(v))
            if (start.getFullYear() < this.startDate.getFullYear()) {
              start = this.startDate
            }

            return { start, stop }
          })

          skill.percentTimeslots = skill.timestampedTimeslots
            // Map start/stop time in %
            .map(({ start, stop }) => ({
              start: this.timeStampToPercent(start),
              stop: stop ? this.timeStampToPercent(stop) : undefined,
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
    },
    startDate() {
      const slots: number[] = []
      this.skillset.forEach(section => {
        for (const skill of section.skills) {
          const startSlots = skill.timeslots.map(
            s => s.split('-').map(v => parseInt(v))[0],
          )

          slots.push(...startSlots)
        }
      })

      const firstYear = slots.reduce((a, b) => (a > b ? b : a))

      const endDate = this.endDate.getFullYear()
      if (firstYear < endDate - 12) {
        return new Date((endDate - 12).toString())
      }

      return new Date(firstYear.toString())
    },
    yearScale() {
      return this.getRange(
        this.endDate.getFullYear(),
        this.startDate.getFullYear(),
        4,
      )
        .map(y => Math.round(y))
        .map(year => ({
          year,
          percent: this.timeStampToPercent(new Date(year.toString())),
        }))
        .reverse()
    },
  },
  methods: {
    timeStampToPercent(timestamp: Date): number {
      const start = this.startDate.getTime()
      const end = this.endDate.getTime()
      const scale = end - start
      const point = timestamp.getTime() - start
      return Math.round((point * 100) / scale)
    },
    getRange(upper: number, lower: number, steps: number) {
      const difference = upper - lower
      const increment = difference / (steps - 1)
      return [
        lower,
        ...Array(steps - 2)
          .fill('')
          .map((_, index) => lower + increment * (index + 1)),
        upper,
      ]
    },
  },
}
</script>

<template>
  <div class="relative mb-8 h-4 font-mono text-xxs">
    <div
      v-for="({ year, percent }, i) in yearScale"
      :key="`year-scale-${year}`"
      class="absolute top-0 border-base-light px-2"
      :class="[i > 0 ? '-translate-x-full border-r' : 'border-l']"
      :style="{ left: 100 - percent + '%' }"
      v-text="year"
    />
  </div>
  <div
    v-for="{ section, skills } in skillsetStruct"
    :key="'section' + section"
    class="mb-8 text-xxxs"
  >
    <div class="flex items-baseline font-mono text-base-lighter">
      {{ section }}
    </div>
    <div
      v-for="{ title, subTitle, percentTimeslots } in skills"
      :key="title"
      class="flex items-center leading-snug"
    >
      <template
        v-for="({ width, start }, i) in percentTimeslots"
        :key="'bar-' + title + i"
      >
        <div
          v-if="100 - start - width > 0"
          :style="{ width: 100 - start - width + '%' }"
          class="flex-fix"
        />
        <div
          class="h-4 bg-base-lightest text-right"
          :class="[start === 0 ? 'flex-auto' : 'flex-fix shrink']"
          :style="{ width: width + '%' }"
        />
        <div
          v-if="i === percentTimeslots.length - 1"
          class="flex-auto pl-2 text-base"
        >
          {{ title }}
          <span
            v-if="subTitle"
            class="text-base-lighter"
            v-text="subTitle"
          />
        </div>
      </template>
    </div>
  </div>
</template>
