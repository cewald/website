<script setup lang="ts">
import { useQuotesStore } from '@/stores/quotes'
const route = useRoute()
const { t } = useI18n()
const { fetchQuote } = useQuotesStore()

const quote = await fetchQuote(parseInt(route.params.slug[0]))

if (!quote) {
  throw showError({
    statusCode: 400,
    message: 'Not found',
  })
}

useHead({
  title: quote?.author || 'Unknown',
  titleTemplate: '%s - Quotes',
  meta: [
    { name: 'description', content: quote?.quote }
  ]
})

definePageMeta({
  validate: async route => {
    return /^\d+$/.test(route.params.slug[0])
  }
})
</script>

<template>
  <div v-if="quote">
    <h1 class="sr-only mb-4 block text-lg">
      {{ t('Quote of the day') }}:
    </h1>
    <div class="mb-2 italic">
      "{{ quote.quote }}"
    </div>
    <div class="text-lg">
      – {{ quote.author }}
    </div>
  </div>
</template>
