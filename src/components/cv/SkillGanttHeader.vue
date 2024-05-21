<script setup lang="ts">
const { startDate, endDate } = defineProps<{
  startDate: Date
  endDate: Date
}>()

const yearScale = computed(() => {
  return getRange(
    endDate.getFullYear(),
    startDate.getFullYear(),
    4,
  )
    .map(y => Math.round(y))
    .map(year => ({
      year,
      percent: timeStampToPercent(new Date(year.toString()), startDate, endDate),
    }))
    .reverse()
})
</script>

<template>
  <div
    class="relative mb-3 h-9 bg-white dark:bg-gray-800"
  >
    <div
      v-for="({ year, percent }, i) in yearScale"
      :key="`year-scale-${year}`"
      class="absolute top-0 border-base-lighter px-2 dark:border-slate-300"
      :class="[i > 0 ? '-translate-x-full border-r' : 'border-l']"
      :style="{ left: 100 - percent + '%' }"
      aria-hidden="true"
      v-text="year"
    />
  </div>
</template>
