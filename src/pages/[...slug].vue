<script setup lang="ts">
const route = useRoute()
const { t } = useI18n()

const quote = await useFetch<{ quote: string, author: string }>(
  `https://dummyjson.com/quotes/${route.params.slug}`,
  { pick: ['quote', 'author'] }
)

if (quote.error.value) {
  throw showError({
    statusCode: 400,
    message: 'Not found',
  })
}

useHead({
  title: quote.data.value?.author || 'Unknown',
  titleTemplate: '%s - Quotes',
  meta: [
    { name: 'description', content: quote.data.value?.quote }
  ]
})

definePageMeta({
  validate: async route => {
    return /^\d+$/.test(route.params.slug[0])
  }
})
</script>

<template>
  <div>
    <h1 class="sr-only mb-4 block text-lg">
      {{ t('Quote of the day') }}:
    </h1>
    <div class="mb-2 italic">
      "{{ quote.data.value?.quote }}"
    </div>
    <div class="text-lg">
      – {{ quote.data.value?.author }}
    </div>
  </div>
</template>
