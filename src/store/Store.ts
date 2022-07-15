import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let authStore: any = (set: any) => ({
  user: { loggedIn: false },
  loggedIn: (newState: any) =>
    set(() => ({
      user: {
        loggedIn: newState.loggedIn,
      },
    })),
});

authStore = devtools(authStore);
authStore = persist(authStore, { name: "token" }); // persist used to localStorage save

export const useAuthStore = create(authStore);
