export const useSkillGanttDates = () => {
  const endDate = ref(new Date(new Date().getFullYear().toString()))

  const getFirstYearFromSkillset = (skillset: SkillSetSection[]) => {
    const slots: number[] = []
    skillset.forEach(section => {
      for (const skill of section.skills) {
        const startSlots = skill.timeslots.map(s => s.split('-').map(v => parseInt(v))[0])

        slots.push(...startSlots)
      }
    })

    return slots.reduce((a, b) => (a > b ? b : a))
  }

  const getStartDateFromSkillset = (skillset: SkillSetSection[], endDate: Date, maxYears = 12) => {
    const firstYear = getFirstYearFromSkillset(skillset)

    const endDateYear = endDate.getFullYear()
    if (firstYear < endDateYear - maxYears) {
      return new Date((endDateYear - maxYears).toString())
    }

    return new Date(firstYear.toString())
  }

  return { endDate, getFirstYearFromSkillset, getStartDateFromSkillset }
}
