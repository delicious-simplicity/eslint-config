/* eslint-disable @typescript-eslint/no-var-requires */
const { OFF, WARN, ERROR } = require('../constants');

module.exports = {
  extends: ['plugin:@next/next/recommended'],

  rules: {
    '@next/next/google-font-display': WARN,
    '@next/next/google-font-preconnect': WARN,
    '@next/next/inline-script-id': ERROR,
    '@next/next/link-passhref': WARN,
    '@next/next/next-script-for-ga': WARN,
    '@next/next/no-css-tags': WARN,
    '@next/next/no-document-import-in-page': ERROR,
    '@next/next/no-duplicate-head': ERROR,
    '@next/next/no-head-import-in-document': ERROR,
    '@next/next/no-html-link-for-pages': WARN,
    '@next/next/no-img-element': WARN,
    '@next/next/no-page-custom-font': WARN,
    '@next/next/no-script-in-document': ERROR,
    '@next/next/no-sync-scripts': WARN,
    '@next/next/no-title-in-document-head': WARN,
    '@next/next/no-typos': WARN,
    '@next/next/no-unwanted-polyfillio': WARN,
  },
};
