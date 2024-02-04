import { useUserStore } from '@core/features/userStore.ts';
import { type AuthorizationGuard } from '@domain/AuthorizationDetails.ts';
import type { LazyRouteFunction } from '@remix-run/router';
import type { RouteObject } from 'react-router-dom';
import ForbiddenError from '@domain/error/ForbiddenError.ts';
import { LoaderFunction } from '@remix-run/router/utils.ts';

function doUserSatisfyGuard(guard: AuthorizationGuard): boolean {
    const { authorization } = useUserStore.getState();

    return authorization.satisfy(guard);
}

function lazyGuard(guard: AuthorizationGuard, target: LazyRouteFunction<RouteObject>): LazyRouteFunction<RouteObject> {
    return () => {
        if (!doUserSatisfyGuard(guard)) {
            throw new ForbiddenError();
        }
        return target();
    };
}

function loaderGuard(guard: AuthorizationGuard, target: LoaderFunction): LoaderFunction {
    return (args) => {
        if (!doUserSatisfyGuard(guard)) {
            throw new ForbiddenError();
        }
        return target(args);
    };
}


export { doUserSatisfyGuard, lazyGuard, loaderGuard };
