/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    '@nuxt/eslint-config',
    'plugin:tailwindcss/recommended'
  ],
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
  }
}
