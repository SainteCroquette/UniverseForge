import type { RouteObject } from 'react-router-dom';

const notFoundRoute: RouteObject = {
    path: '404',
    lazy: () => import('@pages/notFound/NotFoundPage.lazy.ts'),
};

export default notFoundRoute;
