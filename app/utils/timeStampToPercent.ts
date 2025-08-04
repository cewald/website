export default function (timestamp: Date, startDate: MaybeRefOrGetter<Date>, endDate: MaybeRefOrGetter<Date>): number {
  const start = toValue(startDate).getTime()
  const end = toValue(endDate).getTime()
  const scale = end - start
  const point = timestamp.getTime() - start
  return Math.round((point * 100) / scale)
}
