module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // 'plugin:prettier/recommended',
    // 'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
