export type Role = 'admin' | 'user' | 'guest';

export type Permission = 'viewCounter';

export type PrivilegeName = 'counterPrivilege';

export type Privilege = {
    name: PrivilegeName;
    permissions: Permission[];
}

type Authorization = {
    roles?: Role[];
    permissions?: Permission[];
    privileges?: PrivilegeName[];
}

export type AuthorizationGuard = {
    all?: {
        roles?: Role[] | Role;
        permissions?: Permission[] | Permission;
        privileges?: PrivilegeName[] | PrivilegeName;
    };
    one?: {
        roles?: Role[] | Role;
        permissions?: Permission[] | Permission;
        privileges?: PrivilegeName[] | PrivilegeName;
    };
    none?: {
        roles?: Role[] | Role;
        permissions?: Permission[] | Permission;
        privileges?: PrivilegeName[] | PrivilegeName;
    };
};

export default class AuthorizationDetails {
    constructor(
        public readonly roles: Role[] = [],
        public readonly permissions: Permission[] = [],
        public readonly privileges: Privilege[] = [],
    ) {
    }

    public satisfy({ all, one, none }: AuthorizationGuard): boolean {
        if (all) {
            return this.hasAll({
                roles: this.normalizeToArray(all.roles),
                permissions: this.normalizeToArray(all.permissions),
                privileges: this.normalizeToArray(all.privileges),
            });
        } else if (one) {
            return this.hasOne({
                roles: this.normalizeToArray(one.roles),
                permissions: this.normalizeToArray(one.permissions),
                privileges: this.normalizeToArray(one.privileges),
            });
        } else if (none) {
            return this.hasNone({
                roles: this.normalizeToArray(none.roles),
                permissions: this.normalizeToArray(none.permissions),
                privileges: this.normalizeToArray(none.privileges),
            });
        }
        return true;
    }

    private normalizeToArray<T>(value: T | undefined | T[]): T[] | undefined {
        return value ? (Array.isArray(value) ? value : [value]) : undefined;
    }

    private hasAll(all: Authorization): boolean {
        return (
            (!all?.roles || this.hasAllRoles(all.roles)) &&
            (!all?.permissions || this.hasAllPermissions(all.permissions)) &&
            (!all?.privileges || this.hasAllPrivileges(all.privileges))
        );
    }

    private hasOne(one: Authorization): boolean {
        return (
            (!one?.roles || this.hasOneRole(one.roles)) &&
            (!one?.permissions || this.hasOnePermission(one.permissions)) &&
            (!one?.privileges || this.hasOnePrivilege(one.privileges))
        );
    }

    private hasNone(none: Authorization): boolean {
        return (
            (!none?.roles || !this.hasOneRole(none.roles)) &&
            (!none?.permissions || !this.hasOnePermission(none.permissions)) &&
            (!none?.privileges || !this.hasOnePrivilege(none.privileges))
        );
    }

    private hasAllRoles(roles: Role[]): boolean {
        return roles.every((role) => this.roles.includes(role));
    }

    private hasOneRole(roles: Role[]): boolean {
        return roles.some((role) => this.roles.includes(role));
    }

    private hasAllPermissions(permissions: Permission[]): boolean {
        return permissions.every((permission) => this.permissions.includes(permission));
    }

    private hasOnePermission(permissions: Permission[]): boolean {
        return permissions.some((permission) => this.permissions.includes(permission));
    }

    private hasAllPrivileges(privileges: PrivilegeName[]): boolean {
        return privileges.every((privilege) => this.privileges.some((p) => p.name === privilege));
    }

    private hasOnePrivilege(privileges: PrivilegeName[]): boolean {
        return privileges.some((privilege) => this.privileges.some((p) => p.name === privilege));
    }
}