<script setup lang="ts">
import { useAuthStore } from "../store/auth";
import { useCatStore } from "../store/cat";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const router = useRouter();
const { logout } = useAuthStore();
const catStore = useCatStore();
const { data, loading } = storeToRefs(catStore) as any;
const handleLogout = () => {
  logout();
  router.push("/login").then(() => {
    alert("Logged Out");
  });
};
onMounted(async () => {
  await catStore.getData();
});
</script>
<template>
  <div
    class="container mx-auto flex items-center justify-center px-5 lg:px-0 pt-12"
  >
    <UCard>
      <template #header>
        <h1 class="items-center font-black">CATS</h1>
      </template>
      <div class="min-w-96 max-w-96 h-96">
        <img
          v-if="!loading"
          :src="data[0]?.url"
          class="object-cover w-full h-full"
        />
      </div>
      <template #footer>
        <div class="flex w-full justify-between">
          <UButton @click="catStore.getData()">Change</UButton>
          <UButton @click="handleLogout">Logout</UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>
