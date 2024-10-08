import { fixupPluginRules } from '@eslint/compat';
import js from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

/** @type import('eslint').Linter.Config */
export default {
  name: '@andreros/eslint-config-defaults',
  ignores: ['dist'],
  settings: {
    'import/internal-regex': '(^react|^@nestjs|^~)',
  },
  plugins: {
    prettier: pluginPrettier,
    import: fixupPluginRules(pluginImport),
    'unused-imports': pluginUnusedImports,
  },
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      sourceType: 'module',
      ecmaFeatures: { modules: true, jsx: true },
    },
  },
  rules: {
    ...js.configs.recommended.rules,
    ...pluginImport.configs.recommended.rules,
    'no-restricted-globals': ['error'],
    'import/export': 'off',
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block-like', 'function'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: ['block-like', 'function'] },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['export'] },
    ],
    'no-restricted-imports': ['error', 'date-fns', 'mdi-react', 'lodash'],
    'max-lines': ['error', 300],
    'max-len': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': ['error'],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'quote-props': 'off',
    'no-useless-escape': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/no-deprecated': 'off',
    'import/no-unused-modules': 'off',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          ['external', 'internal'],
          ['parent', 'sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react', 'antd'],
        pathGroups: [
          { pattern: 'react**', group: 'builtin', position: 'before' },
          { pattern: '~/**', group: 'internal', position: 'after' },
          { pattern: '@/**', group: 'internal', position: 'after' },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
};
