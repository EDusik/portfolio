/** @type {import('stylelint').Config} */
const config = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-config-prettier-scss'],
  ignoreFiles: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/build/**', '**/legacy/**'],
  rules: {
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
  },
};

export default config;
