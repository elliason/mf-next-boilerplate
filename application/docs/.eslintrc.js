module.exports = {
    extends: ['@mf-project/eslint-config', 'plugin:@docusaurus/recommended'],
    rules: {
        'import/no-unresolved': ['error', { ignore: ['^@docusaurus/', '^@theme'] }],
        '@typescript-eslint/no-var-requires': 'off',
    },
};
