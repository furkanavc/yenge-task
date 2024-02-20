<script setup lang="ts">
import { reactive } from "vue";
import type { Credentials } from "../types";
import { useAuthStore } from "../store/auth"; //
import { useRouter } from "vue-router";
const router = useRouter();
const { login } = useAuthStore();

const user = reactive<Credentials>({
  username: "",
  password: "",
});
const handleLogin = async () => {
  if (user.username === "admin" && user.password === "asdfasdf") {
    login(user);
    router.push("/");
  } else {
    alert("Incorrect Credentials");
  }
};
definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div
    class="mx-auto flex max-w-2xl items-center justify-center text-center px-5 pt-12 lg:px-0"
  >
    <UCard class="w-full">
      <template #header>
        <span class="w-full text-lg font-normal lg:text-2xl">Login</span>
      </template>
      <div class="flex w-full flex-col items-center justify-center space-y-3">
        <div class="flex flex-col space-y-5">
          <input
            v-model="user.username"
            type="text"
            class="h-12 w-full border rounded-xl px-5"
            placeholder="Enter Username"
            name="username"
            required
          />
          <input
            v-model="user.password"
            type="password"
            class="h-12 w-full border rounded-xl px-5"
            placeholder="Enter Password"
            name="password"
            required
          />
          <UButton @click.prevent="handleLogin" block class="mt-5"
            >Login</UButton
          >
        </div>
      </div>
      username: admin password: asdfasdf
    </UCard>
  </div>
</template>
