import configDefault from './configs/eslint/default.js';
import configReact from './configs/eslint/react.js';
import configTypescript from './configs/eslint/typescript.js';

/** @type import('eslint').Linter.Config[] */
export default [configDefault, ...configTypescript, configReact];
