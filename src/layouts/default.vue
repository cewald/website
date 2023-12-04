<template>
  <div class="flex min-h-screen flex-col items-center justify-between px-4 py-12">
    <TopNavigation class="mb-8" />
    <div class="font-serif">
      <slot />
    </div>
    <LanguageSwitch class="mt-8" />
  </div>
</template>
