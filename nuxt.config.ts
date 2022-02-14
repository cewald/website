import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
  css: [
    '@/assets/styles/main.scss'
  ],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg'
  ],
  build: {
    extractCSS: true,
    transpile: [
      'lodash-es'
    ]
  }
})
