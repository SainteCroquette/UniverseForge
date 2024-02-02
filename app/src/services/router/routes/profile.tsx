import { type RouteObject } from 'react-router-dom';

const profileRoute: RouteObject = {
    path: '/profile',
    lazy: () => import('@pages/profile/ProfilePage.lazy.ts'),
};

export default profileRoute;
