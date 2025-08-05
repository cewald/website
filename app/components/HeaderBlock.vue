<script setup lang="ts">
import Logo from '@/assets/logo.svg'

const { shortName, lastName, metaLine } = useName()
</script>

<template>
  <header
    class="mb-16 flex flex-wrap items-center"
    aria-label="header"
  >
    <div class="basis-full">
      <Logo
        class="mb-16 w-40 fill-base-darkest dark:fill-white md:w-48"
        aria-hidden="true"
      />
    </div>
    <div class="flex flex-wrap items-center">
      <h1
        class="mb-5 flex flex-initial items-baseline text-5xl font-bold"
        :aria-label="lastName"
      >
        {{ shortName }}
      </h1>
      <p
        class="w-full text-xl lowercase"
        :aria-label="metaLine"
        v-text="'_' + metaLine"
      />
    </div>
  </header>
</template>
