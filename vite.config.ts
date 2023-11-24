import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import svgLoader from 'vite-svg-loader'
import viteCompression from 'vite-plugin-compression'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: 'lightningcss'
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    Icons({ /* options */ }),
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
