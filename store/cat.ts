import { defineStore } from "pinia";

interface CatImage {
  breeds: any[]; // Tür dizisi, bu veri tipi hakkında daha fazla bilgi edinilirse güncellenebilir
  id: string;
  url: string;
  width: number;
  height: number;
}
interface CatStoreState {
  data: CatImage | null;
  loading: boolean;
}

export const useCatStore = defineStore("data", {
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
