// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@cewald/nuxt-boilerplate-layer'],
  devtools: { enabled: true },
  css: ['@/styles/main.scss'],
  routeRules: {
    '/': { prerender: true },
    '/cv/': { prerender: true },
  },
  compatibilityDate: '2024-10-07',
  nitro: {
    /** Serve /src/data/*.json files as statics under /data */
    publicAssets: [
      {
        dir: '../data',
        baseURL: 'data',
      },
    ],
  },
  boilerplate: {
    i18n: false,
  },
  googleFonts: {
    families: {
      'Martian Mono': [300, 400, 500, 700],
    },
    download: true,
  },
})
