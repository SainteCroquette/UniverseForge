import {redirect, type RouteObject} from 'react-router-dom';
import userHasCorrectRights from "@services/router/guard.ts";

const profileRoute: RouteObject = {
    path: '/profile',
    loader: () => {
        if (!userHasCorrectRights({roles: ['user']})) {
            console.log('redirecting to /');
            return redirect('/forbidden');
        }
        return null;
    },
    lazy: () => {
        if (!userHasCorrectRights({roles: ['user']})) {
            return import('@pages/forbidden/ForbiddenPage.lazy.ts');
        }
        return import('@pages/profile/ProfilePage.lazy.ts');
    },
};

export default profileRoute;
