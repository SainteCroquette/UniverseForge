import { type RouteObject } from 'react-router-dom';
import userHasCorrectRights, { Guard } from '@services/router/guard.ts';
import ForbiddenError from '@domain/error/ForbiddenError.ts';
import type { LazyRouteFunction } from '@remix-run/router';

const profileRoute: RouteObject = {
    path: '/profile',
    lazy: importGuard({ roles: ['user'] }, () => import('@pages/profile/ProfilePage.lazy.ts')),
};

//import function with role & permissions guard
function importGuard(guard: Guard, target: LazyRouteFunction<RouteObject>) {
    return () => {
        if (guard && !userHasCorrectRights(guard)) {
            throw new ForbiddenError();
        }
        return target();
    };
}
export default profileRoute;
