module.exports = {
  extends: ['react-app', 'react-app/jest'],
  plugins: ['eslint-plugin-import', 'prettier'],
  rules: {
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
