import { fixupPluginRules } from '@eslint/compat';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';

/** @type import('eslint').Linter.Config */
export default {
  name: '@andreros/eslint-config-react',
  settings: {
    react: { version: 'detect' },
  },
  plugins: {
    react: pluginReact,
    'react-hooks': fixupPluginRules(pluginReactHooks),
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': ['warn'],
    'react/style-prop-object': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
