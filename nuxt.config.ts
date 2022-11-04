import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'
import Icons from 'unplugin-icons/vite'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  baseUrl: '/website/',
  css: ['@/assets/styles/main.scss'],
  vite: {
    plugins: [svgLoader(), Icons({})]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  build: {
    extractCSS: true,
    transpile: ['lodash-es']
  }
})
