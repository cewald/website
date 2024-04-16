import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  srcDir: 'src',
  googleFonts: {
    families: {
      'Martian Mono': {
        wght: [300, 400, 500, 700],
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
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],
  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: 'remove'
      }
    }
  },
  devtools: { enabled: true },
  devServer: {
    /** @see https://github.com/nuxt/cli/issues/181 */
    host: '0.0.0.0'
  }
})
