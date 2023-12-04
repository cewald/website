import svgLoader from 'vite-svg-loader'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'de', iso: 'de-DE', name: 'German' },
    ],
  },
  vite: {
    plugins: [
      svgLoader(),
      webfontDownload([
        'https://fonts.googleapis.com/css2?' +
        'family=Fira+Code:wght@400;500;700' + '&display=swap',
        'https://fonts.googleapis.com/css2?' +
        'family=Noto+Serif:ital,wght@0,300;0,400;1,300;1,400' + '&display=swap',
      ], {
        injectAsStyleTag: false
      })
    ]
  },
  css: ['@/styles/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  devtools: { enabled: true },
})
