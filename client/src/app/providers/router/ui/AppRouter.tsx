import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from 'app/router';
import { PageLoader } from 'widgets';

const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <RouterProvider router={router}/>
        </Suspense>
    );
};

export default AppRouter;