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
