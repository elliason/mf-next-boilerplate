// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// module.exports = {
//     stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//     addons: [
//         'storybook-addon-swc',
//         '@storybook/addon-links',
//         '@storybook/addon-essentials',
//         '@storybook/addon-interactions',
//     ],
//     framework: '@storybook/react',
//     core: {
//         builder: 'webpack5',
//     },
//     features: {
//         storyStoreV7: true,
//     },
//     webpackFinal: async (config, { configType }) => {
//         config.resolve.plugins = [new TsconfigPathsPlugin()];
//         //config.devServer.client.webSocketURL = `wss://storybook.mfproject.localhost:443/storybook-server-channel`;

//         return config;
//     },
// };
import { StorybookConfig } from '@storybook/react-vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
    stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-essentials'],
    framework: {
        name: '@storybook/react-vite',
    },
    docs: {
        // autodocs: true
    },
};
export default config;
