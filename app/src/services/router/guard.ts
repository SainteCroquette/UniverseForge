import { useUserStore } from '@core/features/userStore.ts';
import { AuthorizationGuard } from '@domain/AuthorizationDetails.ts';

function userHasCorrectRights(guard: AuthorizationGuard): boolean {
    const { authorization } = useUserStore.getState();

    return authorization.satisfy(guard);
}

export default userHasCorrectRights;
