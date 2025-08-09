module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: { node: true, jest: true, es2022: true },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'warn'
  },
  ignorePatterns: ['dist', 'node_modules']
}; 