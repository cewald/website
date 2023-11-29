import '@/styles/main.scss'

import { ViteSSG } from 'vite-ssg/single-page'
import { CapoPlugin } from 'unhead'
import App from '@/App.vue'

export const createApp: any = ViteSSG(App, ({ head }) => {
  head?.use(CapoPlugin({}))
}, { useHead: true })
