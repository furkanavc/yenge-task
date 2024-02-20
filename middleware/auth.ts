import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();
  if (!auth.isLoggedIn && to.path !== "/login") {
    return navigateTo("/login", { replace: true });
  }

  if (auth.isLoggedIn && to.path === "/login") {
    return navigateTo("/", { replace: true });
  }
});
