/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 100,
  trailingComma: 'es5',
  endOfLine: 'lf',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
