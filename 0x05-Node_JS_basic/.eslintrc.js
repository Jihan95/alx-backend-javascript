module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true, // Enables Jest globals
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended', // Extends Jest recommendations
  ],
  plugins: ['jest'], // Adds Jest plugin
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Your custom rules
  },
};
