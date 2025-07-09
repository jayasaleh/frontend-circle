import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type User = {
  banner?: string;
  id: number;
  email: string;
  username: string;
  name: string;
  bio?: string;
  photo?: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  _hasHydrated: boolean;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  login: (data: { user: User; token: string }) => void;
  logout: () => void;
  setHasHydrated: (hydrated: boolean) => void;
};

export const useAuthLogin = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      _hasHydrated: false,

      setHasHydrated: (hydrated: any) => {
        set({ _hasHydrated: hydrated });
      },
      setUser: (user) => set({ user }),
      setToken: (token) => set({ token }),
      login: (data) => set({ user: data.user, token: data.token }),
      logout: () => {
        set({ user: null, token: null });
      },
    }),
    {
      name: 'auth-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
