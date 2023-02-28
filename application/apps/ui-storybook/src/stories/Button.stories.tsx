import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '@mf-project/ui';

export default {
    title: 'Components/Atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        children: { control: 'text' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> {args.children} </Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'Button',
};
