import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn && to.path === "/") {
    return "/login";
  }
  if (auth.isLoggedIn && to.path === "/login") {
    return "/";
  }
});
