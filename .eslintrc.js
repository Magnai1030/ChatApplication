module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
  ],
  root: true,
  env: {
      node: true,
      jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
      'max-len': [
          'error',
          { code: 400, ignoreRegExpLiterals: true, tabWidth: 4 },
      ],
      'no-console': [1],
      'no-underscore-dangle': ['error', { allow: ['_id'] }],
      'operator-linebreak': 'off',
      'comma-dangle': [2, 'always-multiline'],
      'object-curly-newline': 'off',
      'linebreak-style': 'off',
      'implicit-arrow-linebreak': 'off',
      'array-callback-return': 'off',
      //typescript rules
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/lines-between-class-members': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      'import/prefer-default-export': 'off', // good explanation of idea https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
  },
};
