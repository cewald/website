<script setup lang="ts">
const route = useRoute()

const quote = await useFetch<{ quote: string, author: string }>(
  `https://dummyjson.com/quotes/${route.params.slug}`,
  { pick: ['quote', 'author'] }
)

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
  <div class="flex flex-col items-center justify-center">
    <h1 class="text-lg">
      {{ $route.params.slug[0] }}
    </h1>
    <pre class="max-w-[50%] overflow-scroll">
      {{ quote }}
    </pre>
  </div>
</template>
