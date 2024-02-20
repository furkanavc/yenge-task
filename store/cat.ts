import { defineStore } from "pinia";
import type { CatStoreState, CatImage } from "~/types";

export const useCatStore = defineStore("cats", {
  state: (): CatStoreState => ({
    data: null,
    loading: true,
  }),
  persist: true,
  actions: {
    async getData() {
      try {
        const res = await $fetch("/cats", {
          method: "GET",
        });
        this.data = res as CatImage;
      } catch (error) {
        console.error("Error fetching cat data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
