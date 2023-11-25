import '@/styles/main.scss'

import { createApp } from 'vue'
import { createHead, CapoPlugin } from 'unhead'
import App from '@/App.vue'

const head = createHead()
head.use(CapoPlugin({}))

createApp(App)
  .mount('#app')
