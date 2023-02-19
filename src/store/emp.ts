import { defineStore } from "pinia";

const useEmpStore = defineStore("counter", {
  state: () => {
    return {
      name: "小王",
      age: 120,
    };
  },
  actions: {
    addAge() {
      console.log(1);
      this.age++;
    },
  },
  getters: {
    doubleAge: (state) => state.age * 2,
  },
});

export default useEmpStore;
