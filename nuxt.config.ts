import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'
import Icons from 'unplugin-icons/vite'

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
  css: ['@/assets/styles/main.scss'],
  vite: {
    plugins: [svgLoader(), Icons({})]
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  build: {
    extractCSS: true,
    transpile: ['lodash-es']
  }
})
