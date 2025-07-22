import { createRoot } from 'react-dom/client';

import React from 'react';

import ThemeProvider from './app/providers/ThemeProvider/UI/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { AppRouter } from 'app/providers/router';

import './shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
    <ErrorBoundary>
        <ThemeProvider>
            <AppRouter/>
        </ThemeProvider>,
    </ErrorBoundary>,
);