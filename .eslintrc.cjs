/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/eslint-config-typescript',
    'plugin:tailwindcss/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'semi': [2, 'never'],
    'indent': ['error', 2],
    'max-len': ['error', { code: 120 }],
    'object-curly-spacing': ['error', 'always'],
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'import/no-unresolved': 0,
    'arrow-parens': ['error', 'as-needed'],
    'eol-last': ['error', 'always'],
    'no-trailing-spaces': ['error'],
    'tailwindcss/no-custom-classname': 0
  },
  overrides: [
    {
      files: ['tailwind.config.js', 'postcss.config.js', 'scripts/*.mjs'],
      env: {
        node: true
      }
    }
  ]
}
