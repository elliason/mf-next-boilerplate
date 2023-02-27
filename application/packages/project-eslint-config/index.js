module.exports = {
    root: true,
    extends: ['next', 'turbo', '@media-factory-cz/eslint-config-react', 'prettier'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
    },
};
