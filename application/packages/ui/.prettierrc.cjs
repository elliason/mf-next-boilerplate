module.exports = {
    ...require('./node_modules/@media-factory-cz/prettier-config/.prettierrc.js'),
    //...require('@media-factory-cz/prettier-config'),
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '<THIRD_PARTY_MODULES>',
        '^types$',
        '^types$',
        '^~/(.*)$',
        '^[./]',
        '',
    ],
    plugins: ['prettier-plugin-css-order', '@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'], // tailwind plugin MUST come last
};
