// shared/config/storybook/MockThemeProvider.tsx
import React, { useMemo } from 'react';
import { ThemeContext, Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

interface MockThemeProviderProps {
    initialTheme: Theme;
    children: React.ReactNode;
}

export const MockThemeProvider: React.FC<MockThemeProviderProps> = ({
    initialTheme,
    children,
}) => {
    const [theme, setTheme] = React.useState<Theme>(initialTheme);

    const defaultProps = useMemo(()=>({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
