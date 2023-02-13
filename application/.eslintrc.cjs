module.exports = {
    root: true,
    extends: ['@media-factory-cz/eslint-config-react'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    settings: {
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: 'packages/*/tsconfig.json',
            },
        },
    },
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
    },
};
