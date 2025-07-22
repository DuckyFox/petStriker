import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { NavMenu } from './NavMenu';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta = {
    title: 'widget/NavMenu',
    component: NavMenu,
    parameters: {
        layout: 'centered',
    },
    decorators: [

        RouterDecorator,
    ],
    tags: ['autodocs'],

} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.LIGHT),
    ],
};

