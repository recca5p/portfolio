import eslintPluginAstro from 'eslint-plugin-astro';

export default [
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            // customize rules here
        }
    }
];
