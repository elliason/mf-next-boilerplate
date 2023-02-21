module.exports = {
    root: true,
    extends: ['next', 'turbo', '@media-factory-cz/eslint-config-react', 'prettier'],
    // parserOptions: {
    //     tsconfigRootDir: __dirname,
    //     project: ['./tsconfig.json'],
    // },
    // settings: {
    //     'import/resolver': {
    //         typescript: {
    //             alwaysTryTypes: true,
    //             project: 'packages/*/tsconfig.json',
    //         },
    //     },
    // },
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
    },
};
