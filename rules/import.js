/* eslint-disable @typescript-eslint/no-var-requires */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  extends: ['plugin:import/recommended', 'plugin:import/typescript'],

  rules: {
    'import/order': [
      ERROR,
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
  },
};
