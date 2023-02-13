module.exports = {
    // ...require('@media-factory-cz/prettier-config'),
    ...require('@media-factory-cz/prettier-config'),
    overrides: [
        {
            files: '*.json',
            options: {
                tabWidth: 2,
            },
        },
    ],
};
