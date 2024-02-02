import {redirect, type RouteObject} from 'react-router-dom';
import checkPermissions from "@services/router/guard.ts";

const profileRoute: RouteObject = {
    path: '/profile',
    loader: () => {
        if (checkPermissions({roles: ['user']})) {
            redirect('/');
        }
        return null;
    },
    lazy: () => import('@pages/profile/ProfilePage.lazy.ts'),
};

export default profileRoute;
