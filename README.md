# `@delicious-simplicity/eslint-config`

Eslint configuration for the DS org

npm:

```bash
npm install -D @delicious-simplicity/eslint-config
```

yarn:

```bash
yarn add -D @delicious-simplicity/eslint-config
```

### Recommended Settings

Extensions - `.vscode/extensions.json`

```json
{
  "recommendations": ["aaron-bond.better-comments", "dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

Settings - `.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "eslint.alwaysShowStatus": true,
  "eslint.codeAction.showDocumentation": {
    "enable": true
  }
}
```

Prettier - `.prettierrc`

```json
{
  "jsxSingleQuote": true,
  "printWidth": 120,
  "singleQuote": true,
  "trailingComma": "all"
}
```
