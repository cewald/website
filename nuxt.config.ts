import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  googleFonts: {
    families: {
      'Martian Mono': [ 300, 400, 500, 700 ],
    },
    download: true,
  },
  vite: {
    plugins: [
      svgLoader(),
    ],
  },
  nitro: {
    /** Serve /src/data/*.json files as statics under /data */
    publicAssets: [
      {
        dir: '../data',
        baseURL: 'data',
      },
    ],
  },
  css: [ '@/styles/main.scss' ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/cv': { prerender: true },
  },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove',
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  devtools: { enabled: true },
  devServer: {
    /** @see https://github.com/nuxt/cli/issues/181 */
    host: '0.0.0.0',
  },
})
