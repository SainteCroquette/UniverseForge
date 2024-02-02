import create from 'zustand';
import Role from '@domain/Role.ts';
import Permission from "@domain/Permission.ts";

interface UserState {
    userRole: Role;
    userPermissions: Permission[];
    login: () => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    userRole: 'guest',
    userPermissions: [],
    login: () => set({ userRole: 'user' }),
    logout: () => set({ userRole: 'guest' }),
}));
