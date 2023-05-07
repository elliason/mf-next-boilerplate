import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    async viteFinal(config, { configType }) {
        // Be sure to return the customized config
        return mergeConfig(config, {
            // Customize the Vite config for Storybook
            /* resolve: {
            alias: { foo: 'bar' },
          }, */
            server: {
                hmr: {
                    clientPort: 443,
                },
            },
        });
    },
};
export default config;
