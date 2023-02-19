module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest', 'plugin:import/typescript'],
  plugins: ['import', 'simple-import-sort'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    camelcase: ['warn', { properties: 'always' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-cycle': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'], // Side effect
          ['^react'], // react packages
          ['^@\\w'], // scoped packages
          ['^'], // other third party packages
          ['^\\.'], // first party packages
        ],
        
      },
    ],
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useWarnBeforeWindowClose)',
      },
    ],
  },
  overrides: [
    {
      files: ['**/i18n/**/*.ts'],
      rules: {
        camelcase: ['warn', { properties: 'never' }],
      },
    },
  ],
};
