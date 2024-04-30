<script lang="ts" setup>
import { useDarkMode } from '@/composables/darkMode'

import LightOnIcon from '@/assets/mdi-lightbuld-on.svg'
import LightOffIcon from '@/assets/mdi-lightbulb-on-outline.svg'

const { toggle, isActive, isInitial } = useDarkMode()
</script>

<template>
  <div
    v-if="isInitial"
    class="mb-12 flex justify-center p-4  hover:cursor-pointer max-md:top-12 md:fixed md:right-6 md:top-6"
    @click="toggle()"
  >
    <button
      class="group flex flex-wrap items-center justify-center self-start text-2xl text-base-light
      transition-colors delay-500 duration-500 dark:text-slate-950 md:text-4xl md:text-base-lightest md:vertical-lr"
      aria-label="Toggle light mode"
    >
      <component
        :is="isActive ? LightOnIcon : LightOffIcon"
        class="mb-2 block w-10"
        aria-hidden="true"
      />
      <span
        class="basis-full text-base font-semibold lowercase
        max-md:whitespace-pre-line md:ml-0 md:mt-4 md:hidden md:basis-auto md:group-hover:inline"
      >
        {{ isActive ? 'Lights \n on' : 'Lights \n off' }}
      </span>
    </button>
  </div>
</template>
