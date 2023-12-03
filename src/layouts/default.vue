<template>
  <div class="flex min-h-screen flex-col items-center justify-center px-4 py-12">
    <p class="basis-full">
      Default Layout:
    </p>
    <nav>
      <NuxtLink to="/">
        Index
      </NuxtLink>
      <NuxtLink to="/1">
        1
      </NuxtLink>
      <NuxtLink to="/2">
        2
      </NuxtLink>
      <NuxtLink to="/3">
        3
      </NuxtLink>
      <NuxtLink to="/4">
        4
      </NuxtLink>
    </nav>
    <slot />
    <TestComponent />
  </div>
</template>
