import svgLoader from 'vite-svg-loader'

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
  googleFonts: {
    families: {
      'Fira Code': {
        wght: [400, 500, 700],
      },
      'Noto Serif': {
        wght: [300, 400],
        ital: [300, 400],
      },
    },
    download: true
  },
  vite: {
    plugins: [
      svgLoader(),
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
    '@nuxtjs/google-fonts', // Cant use `vite-plugin-webfont-dl` because of missing `transformIndexHtml` hook in Nuxt/Nitro
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  devtools: { enabled: true },
})
