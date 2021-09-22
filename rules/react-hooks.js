/* eslint-disable @typescript-eslint/no-var-requires */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  plugins: ['react-hooks'],

  rules: {
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,
  },
};
