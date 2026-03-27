import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // Variables
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'no-use-before-define': 'error',
      'no-shadow': 'warn',

      // Code quality
      eqeqeq: 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-duplicate-case': 'error',
      'no-empty': 'warn',
      curly: 'error',

      // Console
      'no-console': 'warn',
    },
  },
];
