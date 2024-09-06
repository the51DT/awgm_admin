import { createRouter, createWebHistory } from "vue-router";
import AppMenu1 from "@/views/AppMenu1.vue";
import AppMenu2 from "@/views/AppMenu2.vue";
import AppLogin from "@/views/AppLogin.vue";

const routes = [
  { path: "/", component: AppLogin },
  { path: "/AppMenu1", component: AppMenu1 },
  { path: "/AppMenu2", component: AppMenu2 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
