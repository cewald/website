import '@/styles/main.scss'

import { ViteSSG } from 'vite-ssg/single-page'
import { createHead, CapoPlugin } from 'unhead'
import App from '@/App.vue'

const head = createHead()
head.use(CapoPlugin({}))

export const createApp: any = ViteSSG(App)
