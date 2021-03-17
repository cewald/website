<template>
  <div>
    <h2 class="font-bold mb-2"><slot /></h2>
    <div class="mb-2 md:mb-0 md:inline-block">
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
