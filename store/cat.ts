import { defineStore } from "pinia";
import type { CatStoreState, CatImage } from "~/types";

export const useCatStore = defineStore("cats", {
  state: (): CatStoreState => ({
    data: null,
    loading: true,
  }),
  actions: {
    async getData() {
      await $fetch("/cats", {
        method: "GET",
      }).then((res: CatImage) => {
        this.data = res;
        this.loading = false;
      });
    },
  },
});
