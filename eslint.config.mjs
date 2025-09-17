import config from '@cewald/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const corporateConfig = config({
  vue: true,
})

export default withNuxt(corporateConfig)
