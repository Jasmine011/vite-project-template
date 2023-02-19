import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  state: () => {
    return {
      count: 0,
    };
  },
});

export default useUserStore;
