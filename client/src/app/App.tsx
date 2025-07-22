import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider';

import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { NavMenu, PageLoader } from 'widgets';
import { SideBar } from 'widgets/ui/SideBar';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <NavMenu/>
            <div className='main'>
                <SideBar/>
                <Suspense fallback={<PageLoader/>}>
                    <div className='page'>
                        <Outlet/>
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default App;