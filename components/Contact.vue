<template>
  <div class="flex flex-wrap">
    <h2 class="w-full font-bold mb-2"><slot /></h2>
    <div class="flex mb-2 md:mb-0">
      <ContactPill
        to="https://github.com/cewald"
        :icon="['fab', 'github']"
        class="mr-4"
        >Github</ContactPill
      >
      <ContactPill
        to="https://www.linkedin.com/in/ewaldtm"
        :icon="['fab', 'linkedin']"
        class="mr-4"
        >LinkedIn</ContactPill
      >
    </div>
    <ContactPill
      to="mailto:hello@christianewald.de"
      :icon="['far', 'envelope']"
      :transparent="true"
      class="mr-4"
      >hello@christianewald.de</ContactPill
    >
  </div>
</template>
