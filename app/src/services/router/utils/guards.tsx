import type { RouteObject, LoaderFunction, LazyRouteFunction } from 'react-router-dom';

import type { AuthorizationGuard } from '@domain/user/AuthorizationDetails.ts';
import ForbiddenError from '@domain/error/ForbiddenError.ts';

import { useUserStore } from '@core/features/userStore.ts';

import RouteGuard from './RouteGuard.tsx';

function doUserSatisfyGuard(guard: AuthorizationGuard): boolean {
    const { authorization } = useUserStore.getState();

    return authorization.satisfy(guard);
}

function lazyGuard(guard: AuthorizationGuard, target: LazyRouteFunction<RouteObject>): LazyRouteFunction<RouteObject> {
    return () => {
        if (!doUserSatisfyGuard(guard)) {
            throw new ForbiddenError('Unauthorized access to lazy route.');
        }
        return target();
    };
}

function loaderGuard(guard: AuthorizationGuard, target: LoaderFunction): LoaderFunction {
    return (args) => {
        if (!doUserSatisfyGuard(guard)) {
            throw new ForbiddenError('Unauthorized access to loader route.');
        }
        return target(args);
    };
}

function attachGuardToRoute(guard: AuthorizationGuard, route: RouteObject): RouteObject {
    const loader = route.loader ? loaderGuard(guard, route.loader) : undefined;
    const lazy = route.lazy ? lazyGuard(guard, route.lazy) : undefined;

    return {
        element: <RouteGuard guard={guard} />,
        children: [
            {
                ...route,
                loader,
                lazy,
            },
        ],
    };
}

export { doUserSatisfyGuard, lazyGuard, loaderGuard, attachGuardToRoute };
