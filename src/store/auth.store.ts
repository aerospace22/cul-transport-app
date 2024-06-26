import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = any;

export type AuthStore = {
  isAuthenticated: boolean;
  user: User | undefined;
  token: string | undefined;
  SET_USER: (user: User) => void;
  UNSET_USER: () => void;
  GET_USER: () => User | undefined;
  SET_TOKEN: (token: string) => void;
  UNSET_TOKEN: () => void;
  GET_TOKEN: () => string | undefined;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: undefined,
      token: undefined,
      SET_USER: (user: User) => set({ user }),
      UNSET_USER: () => set({ user: undefined }),
      GET_USER: () => get().user,
      SET_TOKEN: (token: string) => set({ token }),
      UNSET_TOKEN: () => set({ token: undefined }),
      GET_TOKEN: () => get().token,
    }),
    {
      name: "auth-store",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
