<template>
  <section
    class="flex flex-wrap overflow-scroll"
    aria-labelledby="contact-headline"
  >
    <HeadlineComponent id="contact-headline">
      <slot />
    </HeadlineComponent>
    <div class="flex flex-wrap [&>*]:mb-4 [&>*]:mr-4 md:[&>*]:mb-0">
      <ButtonPill
        title="CV"
        to="/cv/"
      />
      <ButtonPill
        title="Github"
        to="https://github.com/cewald"
      />
      <ButtonPill
        title="LinkedIn"
        to="https://www.linkedin.com/in/ewaldtm"
      />
    </div>
    <ButtonPill
      title="me@ewaldewald.com"
      to="mailto:me@ewaldewald.com"
      :transparent="true"
      class="mr-4 whitespace-nowrap"
    />
  </section>
</template>
