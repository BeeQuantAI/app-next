import { create } from "zustand";
import { combine } from "zustand/middleware";

const initialState = {
  user: null as string | null,
};

export const useUser = create(
  combine(initialState, (set) => ({
    setUser: (user: string) => set({ user }),
    clearUser: () => set({ user: null }),
  }))
);
