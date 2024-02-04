import { type RouteObject } from 'react-router-dom';
import userHasCorrectRights from '@services/router/guard.ts';
import ForbiddenError from '@domain/error/ForbiddenError.ts';
import type { LazyRouteFunction } from '@remix-run/router';
import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';

const profileRoute: RouteObject = {
    path: '/profile',
    lazy: importGuard({ all: {roles: ['user']} }, () => import('@pages/profile/ProfilePage.lazy.ts')),
};

//import function with role & permissions guard
function importGuard(guard: AuthorizationGuard, target: LazyRouteFunction<RouteObject>) {
    return () => {
        if (!userHasCorrectRights(guard)) {
            throw new ForbiddenError();
        }
        return target();
    };
}
export default profileRoute;
