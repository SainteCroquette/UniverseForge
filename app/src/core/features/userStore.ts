import { create } from 'zustand';
import AuthorizationDetails from '@domain/AuthorizationDetails.ts';

interface UserState {
    authorization: AuthorizationDetails;
    login: () => void;
    logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
    userRole: 'guest',
    userPermissions: [],
    authorization: new AuthorizationDetails(['guest'], []),
    login: () => set({ authorization: new AuthorizationDetails(['user'], []) }),
    logout: () => set({ authorization: new AuthorizationDetails(['guest'], []) }),
}));
