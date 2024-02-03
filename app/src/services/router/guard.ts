import Role from '@domain/Role.ts';
import Permission from '@domain/Permission.ts';
import { useUserStore } from '@core/features/userStore.ts';

export interface Guard {
    roles?: Role[];
    permissions?: Permission[];
}
function userHasCorrectRights({ roles, permissions }: Guard): boolean {
    const { userRole, userPermissions } = useUserStore.getState();

    console.log('userRole', userRole);
    console.log('userPermissions', userPermissions);
    const roleOk = hasRole(userRole, roles);
    const permsOk = hasPermission(userPermissions, permissions);
    console.log('roleOk', roleOk);
    console.log('permsOk', permsOk);
    return roleOk && permsOk;
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

export default userHasCorrectRights;
