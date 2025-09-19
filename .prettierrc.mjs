import { prettier } from '@cewald/eslint-config/prettier'

export default prettier({
  tailwindcss: true,
  tailwindConfig: './app/assets/styles/main.css',
})
