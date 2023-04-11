module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends:require.resolve('@umijs/max/eslint'),
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'no-label-var': 2,
    'no-dupe-keys': 2,
    'no-unused-vars': 0,
    'no-empty': 2,
    'no-duplicate-case': 2,
    'newline-before-return': 0,
    'new-cap': [
      2,
      {
        newIsCap: true,
        capIsNew: false,
      },
    ],
    quotes: [2, 'single', 'avoid-escape'],
    'semi-spacing': 2,
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'no-case-declarations': ['warn'],
    'no-dupe-class-members': 2,
    'linebreak-style': [2, 'unix'],
    'react/jsx-curly-spacing': [
      2,
      {
        when: 'never',
        children: true,
      },
    ],
    'no-multiple-empty-lines': [
      2,
      {
        max: 2,
      },
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 5,
      },
    ],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.ts', '.tsx'],
      },
    ],
  },
}
