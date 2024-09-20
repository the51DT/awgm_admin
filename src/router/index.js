import { createRouter, createWebHistory } from "vue-router";

import AppMenu1 from "@/views/AppMenu1.vue";
import AppMenu2 from "@/views/AppMenu2.vue";
import AppLogin from "@/views/AppLogin.vue";
import AppBanner01 from "@/views/AppBanner01.vue";
import AppBanner02 from "@/views/AppBanner02.vue";
import AppChallenge02 from "@/views/AppChallenge02.vue";
import AppCS04 from "@/views/AppCS04.vue";
import AppNotice from "@/views/AppNotice.vue";

const routes = [
  { path: "/", component: AppBanner01 },
  { path: "/AppMenu1", component: AppMenu1 },
  { path: "/AppMenu2", component: AppMenu2 },
  { path: "/AppMenu21", component: AppNotice },
  { path: "/AppMenu3", component: AppBanner01 },
  { path: "/AppBanner02", component: AppBanner02, name: "AppBanner02" },
  { path: "/AppChallenge02", component: AppChallenge02, name: "AppChallenge02" },
  { path: "/AppCS04", component: AppCS04, name: "AppCS04" },
  { path: "/Applogin", component: AppLogin, meta: { layout: "none" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
