module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': [
      2,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
  },
  ignorePatterns: ['src/**/*.test.ts', 'src/frontend/generated/*'],
  // parser: '@typescript-eslint/parser',
  // extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended', 'prettier'],
  // parserOptions: {
  //   ecmaVersion: 2018,
  //   sourceType: 'module',
  //   project: './tsconfig.json',
  //   tsconfigRootDir: 'Homework',
  // },
  // overrides: [
  //   {
  //     files: ['./src/*.ts'],
  //     excludedFiles: '*.test.ts',
  //     rules: {
  //       quotes: ['error', 'single'],
  //     },
  //   },
  // ],
};
