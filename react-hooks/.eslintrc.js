const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules)
	.reduce((acc, rule) => { acc[`jsx-a11y/${rule}`] = 'off'; return acc }, {});

module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended", 
    "plugin:react/recommended",
    "airbnb"
  ],
  "plugins": [
    "react",
    "only-warn",
    "react-hooks"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    ...a11yOff,
    "react/react-in-jsx-scope": [0],
    "react/prop-types": 0,
    "react/jsx-filename-extension": [0],
    "react/jsx-one-expression-per-line": [1, { "allow": "single-child" }],
    "react/destructuring-assignment": [0, "always", { "ignoreClassFields": true }],
    "comma-dangle": ["error", "never"],
    "no-restricted-syntax": [0],
    "no-param-reassign": [1, { "props": false }],
    "object-curly-newline": [0],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
};