import { createRouter, createWebHistory } from "vue-router";

import AppMenu1 from "@/views/AppMenu1.vue";
import AppMenu2 from "@/views/AppMenu2.vue";
import GutAd00001 from "@/views/GutAd00001.vue";
import AppBanner01 from "@/views/AppBanner01.vue";
import AppNotice from "@/views/AppNotice.vue";

const routes = [
  { path: "/", component: AppBanner01 },
  { path: "/AppMenu1", component: AppMenu1 },
  { path: "/AppMenu2", component: AppMenu2 },
  { path: "/AppMenu21", component: AppNotice },
  { path: "/AppMenu3", component: AppBanner01 },
  { path: "/로그인-GutAd00001", component: GutAd00001, meta: { layout: "none" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
