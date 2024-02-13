import { create } from 'zustand';

interface LanguageState {
    language: string;
    setLanguage: (language: string) => void;
    changeLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
    language: '',
    setLanguage: (language) => set({ language }),
    changeLanguage: (language) => {
        set({ language });
    },
}));
