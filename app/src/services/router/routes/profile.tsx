import { attachGuardToRoute } from '@services/router/utils/guards.tsx';
import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';

const guard: AuthorizationGuard = { all: { roles: ['user'] } };

const profileRoute = attachGuardToRoute(guard, {
    children: [
        {
            path: 'profile',
            loader: () => true,
            lazy: () => import('@pages/profile/ProfilePage.lazy.ts'),
        },
    ],
});
export default profileRoute;
