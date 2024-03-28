import { defineStore } from "pinia";

export const useFormStore = defineStore("form", {
  state: () => ({
    formData: {},
  }),
  actions: {
    get() {
      return this.formData;
    },
    set(value) {
      return (this.formData = value);
    },
  },
});
