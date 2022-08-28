import App from "./App.vue";
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

import "./assets/main.css";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
