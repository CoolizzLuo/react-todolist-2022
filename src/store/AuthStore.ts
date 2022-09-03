import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type AuthState = {
  nickname: string;
  email: string;
  token: string;
};

export interface IAuthStore {
  authState: AuthState | null;
  setAuthState: (authState: AuthState) => void;
  isAuthorize: () => boolean;
}

export const useAuthStore = create<IAuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        authState: null,
        setAuthState: (authState) => set({ authState }),
        isAuthorize: () => !!get().authState?.token,
      }),
      {
        name: 'authStore',
        getStorage: () => sessionStorage,
      }
    )
  )
);
