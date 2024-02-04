import { create } from 'zustand';

export type SideMenuModes = 'collapsed' | 'expanded' | 'hidden';

interface SideMenuState {
    currentMode: SideMenuModes;
    defaultMode: SideMenuModes;
    setMode: (mode: SideMenuModes) => void;
    setDefaultMode: (mode: SideMenuModes) => void;
    toggle: () => void;
}

export const useSideMenuStore = create<SideMenuState>((set) => ({
    currentMode: 'expanded',
    defaultMode: 'expanded',
    setMode: (mode) => set({ currentMode: mode }),
    setDefaultMode: (mode) =>
        set({
            defaultMode: mode,
            currentMode: mode,
        }),
    toggle: () =>
        set((state) => {
            if (state.currentMode === 'hidden') {
                return { currentMode: 'hidden' };
            }
            return { currentMode: state.currentMode === 'expanded' ? 'collapsed' : 'expanded' };
        }),
}));
