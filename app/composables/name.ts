export const useName = () => {
  const name = ref('Christian Ewald')
  const freelanceMetaLine = 'Freelance full-stack javascript developer and software-engineer'
  const employeMetaLine = 'Full-stack javascript developer and software-engineer'

  const route = useRoute()
  const metaLine = computed(() => (route.name === 'cv' ? employeMetaLine : freelanceMetaLine))

  const shortName = computed(() => {
    const [prename, lastname] = name.value.toLowerCase().split(' ') as [string, string]
    return `${prename[0]}:/${lastname}`
  })

  const lastName = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [prename, lastname] = name.value.split(' ')
    return lastname
  })

  return { name, metaLine, shortName, lastName }
}
