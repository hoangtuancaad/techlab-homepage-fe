import { create } from "zustand";

type AppState = {
    isCollapse: boolean;
};

type AppAction = {
    toggleNavbar: () => void;
};

const initialState: AppState = {
    isCollapse: true,
};

export const useAppStore = create<AppState & AppAction>()(set => ({
    ...initialState,

    toggleNavbar: () => set(state => ({ isCollapse: !state.isCollapse })),
}));
