import { type RouteObject } from 'react-router-dom';

const forbiddenRoute: RouteObject = {
    path: '/forbidden',
    lazy: () => import('@pages/forbidden/ForbiddenPage.lazy.ts'),
};

export default forbiddenRoute;
