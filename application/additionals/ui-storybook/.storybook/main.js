const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        'storybook-addon-swc',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    features: {
        storyStoreV7: true,
    },
    webpackFinal: async (config, { configType }) => {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
        //config.devServer.client.webSocketURL = `wss://storybook.mfproject.localhost:443/storybook-server-channel`;

        return config;
    },
};
