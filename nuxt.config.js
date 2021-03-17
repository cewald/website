export default {
  // We need to disable `ssr` to have "real" prerendering.
  // @see https://nuxtjs.org/blog/going-full-static#new-config-option-target
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/fontawesome-module
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/google-analytics-module
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  },

  fontawesome: {
    icons: {
      regular: ['faEnvelope'],
      brands: ['faGithub', 'faLinkedin']
    }
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/]
  },

  googleAnalytics: {
    id: 'UA-49232641-1'
  }
}
