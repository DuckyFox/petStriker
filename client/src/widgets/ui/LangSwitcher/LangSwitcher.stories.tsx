import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

const meta = {
    title: 'widget/LangSwitcher',
    component: LangSwitcher,
    parameters: {
        layout: 'centered',
    },
    decorators: [

        RouterDecorator,
    ],
    tags: ['autodocs'],

} satisfies Meta<typeof LangSwitcher>;

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

