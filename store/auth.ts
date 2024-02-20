import { defineStore } from "pinia";
import type { Credentials } from "~/types";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    username: "",
    name: "",
  }),
  actions: {
    async login({ username, password }: Credentials) {
      this.isLoggedIn = true;
      this.username = username;
      this.name = "Admin";
    },
    logout() {
      this.isLoggedIn = false;
      this.username = "";
      this.name = "";
    },
  },
});
