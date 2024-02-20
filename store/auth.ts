import { defineStore } from "pinia";
import type { Credentials, AuthStoreState } from "~/types";

export const useAuthStore = defineStore("auth", {
  state: (): AuthStoreState => ({
    isLoggedIn: false,
    username: "",
    name: "",
  }),
  persist: true,
  actions: {
    async login(credentials: Credentials) {
      this.isLoggedIn = true;
      this.username = credentials.username;
      this.name = "Admin";
    },
    logout() {
      this.isLoggedIn = false;
      this.username = "";
      this.name = "";
    },
  },
});
