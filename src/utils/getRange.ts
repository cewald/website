export default (upper: number, lower: number, steps: number) => {
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
