import { createRouter, createWebHistory } from "vue-router";

import AppMenu1 from "@/views/AppMenu1.vue";
import AppMenu2 from "@/views/AppMenu2.vue";
import AppLogin from "@/views/AppLogin.vue";
import AppBaner01 from "@/views/AppBanner01.vue";

const routes = [
  { path: "/", component: AppBaner01 },
  { path: "/AppMenu1", component: AppMenu1 },
  { path: "/AppMenu2", component: AppMenu2 },
  { path: "/AppMenu3", component: AppBaner01 },
  { path: "/Applogin", component: AppLogin, meta: { layout: "none" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
