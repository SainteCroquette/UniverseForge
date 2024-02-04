import { type RouteObject } from 'react-router-dom';

import { lazyGuard } from '@services/router/guard.ts';

const profileRoute: RouteObject = {
    path: '/profile',
    loader: () => true,
    lazy: lazyGuard({ all: {roles: ['user']} }, () => import('@pages/profile/ProfilePage.lazy.ts')),
};
export default profileRoute;
