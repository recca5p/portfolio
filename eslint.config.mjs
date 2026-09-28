import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['.astro/**', 'dist/**', 'node_modules/**', '.agents/**', '.cursor/**'],
  },
  ...eslintPluginAstro.configs.recommended,
];
