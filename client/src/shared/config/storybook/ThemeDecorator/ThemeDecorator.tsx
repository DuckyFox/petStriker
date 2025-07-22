import React from 'react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { MockThemeProvider } from 'shared/config';
import { Decorator } from '@storybook/react';


export const ThemeDecorator = (theme:Theme) => {
    const decorator:Decorator = (Story) => (
        <MockThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <Story/>
            </div>
        </MockThemeProvider>
    );

    return decorator;
};