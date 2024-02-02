import Role from '@domain/Role.ts';
import Permission from '@domain/Permission.ts';
import { useUserStore } from '@core/features/userStore.ts';

interface Guard {
    roles?: Role[];
    permissions?: Permission[];
}
function checkPermissions({ roles, permissions }: Guard): boolean {
    const { userRole, userPermissions } = useUserStore().getState();

    return !hasRole(userRole, roles) || !hasPermission(userPermissions, permissions);
}

function hasRole(userRole: Role, requiredRoles?: Role[]): boolean {
    if (!requiredRoles) {
        return true;
    }
    return requiredRoles.includes(userRole);
}

function hasPermission(userPermissions: Permission[], requiredPermissions?: Permission[]): boolean {
    if (!requiredPermissions) {
        return true;
    }
    return requiredPermissions.some((permission) => userPermissions.includes(permission));
}

export default checkPermissions;
