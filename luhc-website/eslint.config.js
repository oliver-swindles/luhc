import prettier from 'eslint-config-prettier';
import path from 'node:path';
import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = path.resolve(import.meta.dirname, '.gitignore');

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  ts.configs.recommended,
  svelte.configs.all,
  prettier,
  svelte.configs.prettier,
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      'no-undef': 'off',
      'arrow-body-style': ['error', 'always'],
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'no-implicit-coercion': 'error',
      'no-duplicate-imports': 'error',
      'svelte/no-unused-class-name': 'off',
      'svelte/block-lang': 'off',
      // 'svelte/no-inline-styles': 'off',
      'svelte/consistent-selector-style': 'off',
      'svelte/no-at-debug-tags': 'error',
      'svelte/no-ignored-unsubscribe': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/require-each-key': 'error',
      'svelte/no-inspect': 'error',
      'svelte/button-has-type': 'error',
      'svelte/no-at-html-tags': 'error', // Prevents XSS unless explicitly ignored
      'svelte/prefer-destructured-store-props': 'error',
      'svelte/require-optimized-style-attribute': 'error',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      // '@typescript-eslint/no-floating-promises': 'error',
      // '@typescript-eslint/no-misused-promises': 'error',
      // 'svelte/no-inline-styles': ['error', { allowTransitions: false }],
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.svelte'],
        parser: ts.parser,
        svelteConfig,
      },
    },
  },
  {
    files: ['*.config.js', '*.config.ts', 'svelte.config.js', 'vite.config.js'],
    extends: [ts.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  }
);
