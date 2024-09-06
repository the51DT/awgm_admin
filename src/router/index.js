import { createRouter, createWebHistory } from "vue-router";
import AppMenu1 from "@/views/AppMenu1.vue";
import AppMenu2 from "@/views/AppMenu2.vue";
import AppMenu3 from "@/views/AppMenu3.vue";

const routes = [
  { path: "/", component: AppMenu1 },
  { path: "/AppMenu2", component: AppMenu2 },
  { path: "/AppMenu3", component: AppMenu3 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
