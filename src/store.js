import { reactive } from "vue";

const counter = reactive({
  count: 0,
  increment() {
    this.count++;
  },
});

export const store = reactive({
  counter,
});
