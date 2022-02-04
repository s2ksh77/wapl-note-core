module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/prefer-default-export': 0,
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'default-case': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // enum error
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  ignorePatterns: ['dist/index.cjs.js', 'dist/index.esm.js', '/**/*.d.ts'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src/apps/note'],
          ['~', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  globals: {
    Store: true,
  },
};
