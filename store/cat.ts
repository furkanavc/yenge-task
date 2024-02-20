import { defineStore } from "pinia";
import type { CatStoreState, CatImage } from "~/types";

export const useCatStore = defineStore("cats", {
  state: (): CatStoreState => ({
    data: undefined,
    loading: true,
  }),
  actions: {
    async getData() {
      try {
        const res: CatImage[] = await $fetch("/cats");
        this.data = res[0];
      } catch (error) {
        console.error("Error fetching cat data:", error);
      } finally {
        this.loading = false;
      }
    },
  },
});
