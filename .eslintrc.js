module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    eslint linebreak - style: ["error", "windows"]
  },
  globals: {
    $nuxt: true,
    mapkit: false
  }
}
