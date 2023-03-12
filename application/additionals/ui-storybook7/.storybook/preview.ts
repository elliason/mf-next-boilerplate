/* module.exports = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}; */
import { Preview } from '@storybook/react';

/** @type { import('@storybook/react').Preview } */
const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
    },
};
export default preview;
