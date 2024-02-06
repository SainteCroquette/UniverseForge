import { type RouteObject } from 'react-router-dom';

import { lazyGuard } from '@services/router/guards.tsx';
import RouteGuard from '@services/router/routes/RouteGuard.tsx';
import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';

const guard: AuthorizationGuard = { all: { roles: ['user'] } };

const profileRoute: RouteObject = {
    element: <RouteGuard guard={guard} />,
    children: [
        {
            path: '/profile',
            loader: () => true,
            lazy: lazyGuard(guard, () => import('@pages/profile/ProfilePage.lazy.ts')),
        },
    ],
};
export default profileRoute;
