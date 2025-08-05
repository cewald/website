import config from '@cewald/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const corporateConfig = config({
  tailwindcssConfig: {
    config: './.nuxt/tailwind/postcss.mjs',
  },
})

export default withNuxt(corporateConfig)
