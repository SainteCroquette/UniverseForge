import { create } from 'zustand';
import AuthorizationDetails from '@domain/user/AuthorizationDetails.ts';

interface UserState {
    authorization: AuthorizationDetails;
    login: () => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    authorization: new AuthorizationDetails(['guest'], []),
    login: () =>
        set({ authorization: new AuthorizationDetails(['user'], [], [{ name: 'counterPrivilege', permissions: [] }]) }),
    logout: () => set({ authorization: new AuthorizationDetails(['guest'], [], []) }),
}));
