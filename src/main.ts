import '@/styles/main.scss'

import { createApp } from 'vue'
import { createHead } from 'unhead'
import App from '@/App.vue'

createHead()
createApp(App)
  .mount('#app')
