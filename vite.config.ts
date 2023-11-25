import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import Icons from 'unplugin-icons/vite'
import webfontDownload from 'vite-plugin-webfont-dl'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: 'lightningcss'
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    Icons({ compiler: 'vue3' }),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;700&display=swap'
    ]),
    viteCompression({ algorithm: 'brotliCompress' }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3333,
    host: '0.0.0.0'
  },
  preview: {
    port: 3331,
    host: '0.0.0.0'
  }
})
