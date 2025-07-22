import App from 'app/App';
import { MainPage } from 'Pages/MainPage';
import { AboutPage } from 'Pages/AboutPage';
import { NotFoundPage } from 'Pages/NotFoundPage';
import { PageError } from 'widgets';
import React from 'react';


export const routesMap = [
    {
        path: '/',
        element: <App/>,
        errorElement: <PageError />,
        children: [
            { index: true, element: <MainPage/>, errorElement: <PageError /> },
            { path: '/about', element: <AboutPage/>, errorElement: <PageError /> },
            { path: '/*', element: <NotFoundPage/>, errorElement: <PageError /> },
        ],
    },
];