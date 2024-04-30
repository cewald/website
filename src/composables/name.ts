export const useName = () => {
  const name = ref('Christian Ewald')
  const metaLine = ref(
    'Freelance full-stack javascript developer and software-engineer',
  )

  const shortName = computed(() => {
    const [ prename, lastname ] = name.value.toLowerCase().split(' ')
    return `${prename[0]}:/${lastname}`
  })

  const lastName = computed(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [ prename, lastname ] = name.value.split(' ')
    return lastname
  })

  return { name, metaLine, shortName, lastName }
}
