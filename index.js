module.exports = {
  parser: '@typescript-eslint/parser',

  extends: [
    './rules/next.js',
    './rules/prettier.js',
    './rules/general.js',
    './rules/import.js',
    './rules/options.js',
    './rules/jsx-a11y.js',
    './rules/react.js',
    './rules/react-hooks.js',
    './rules/typescript-eslint.js',
    './rules/tailwindcss.js',
  ],
};
