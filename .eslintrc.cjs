module.exports = {
  // parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  //   ecmaVersion: 2020,
  //   sourceType: 'module',
  //   ecmaFeatures: {
  //     tsx: true,
  //     jsx: true
  //   }
  // },
  extends: [
    '@feugene',
    './.eslintrc-auto-import.json',

  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'coverage/',
    'pnpm-lock.yaml',
    '*.js',
  ],
  rules: {
    'no-console': 'off',
  },
}
