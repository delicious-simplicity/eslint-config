module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },

  env: {
    browser: true,
    node: true,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
