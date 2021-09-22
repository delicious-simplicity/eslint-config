# Contributing to `@delicious-simplicity/eslint-config`

### _How do I **change** a rule?_

Rules have 3 states: `Off`, `Warn`, `Error`. These can be represented in several ways, but in this package we use a set of constants to represent the state of the rule:

```js
const { OFF, WARN, ERROR } = require("../constants");

// ...

module.exports = {
  // ...

  rules: {
    "react/jsx-key": ERROR,
    // ...
  },
};
```

Simply by changing the variable name to one of the provided constants, you can change the state of the rule.

> Some rules have configuration options. Be sure to read the documentation of a rule carefully before making changes.

### _How do I **add** a rule?_

Rules and settings are separated by package into respective folders.

```
./rules
├── general.js
├── import.js
├── jsx-a11y.js
├── next.js
├── options.js
├── prettier.js
├── react-hooks.js
├── react.js
└── typescript-eslint.js
```

`general` contains configurations for built-in eslint rules

`options` should contain any settings

`import` & `pretter` contain configurations for `import` & `prettier` rules respectively for example

### _How do I **add** a plugin?_

Start by adding the plugin to the package `dependencies`. It's important to add them to `dependencies` and not `devDependencies`.

```bash
yarn add eslint-plugin-react
```

Add a file to represent the configurations for that plugin:

`rules/react.js`

```js
const { OFF, WARN, ERROR } = require("../constants");

module.exports = {
  plugins: ["react"],

  rules: {
    "react/jsx-key": ERROR,
    // ...
  },
};
```

Be sure to add this file to the `index.js` in the root of the project. You can add the file to the bottom. **Order does matter.**

It's also helpful to follow the documentation for the plugin and see what they recommend on how to set it up and apply rules. Generally, though, the above process should be followed.

### _How do I **add** a config?_

Generally, adding new configs to this package _should be avoided_. Configs, unlike plugins, typically add some settings that could otherwise override/negate others that have previously been set.

Check if the config offers a plugin as an alternative to add new rules. Then follow the steps above to [add a plugin](#how-do-i-add-a-plugin).
