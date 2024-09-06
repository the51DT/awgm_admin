<template>
  <v-app>
    <!-- 상단 앱 바 -->
    <app-header />

    <!-- 사이드바 설정 -->
    <v-navigation-drawer v-model="drawer" app class="my-drawer">
      <app-sidebar />
    </v-navigation-drawer>

    <!-- 메인 컨텐츠 -->
    <v-main>
      <router-view />
    </v-main>

    <!-- 하단 푸터 -->
    <app-footer />
  </v-app>
</template>

<script setup>
import { ref, provide } from "vue";
import AppHeader from "./layouts/AppHeader.vue";
import AppSidebar from "./layouts/AppSidebar.vue";
import AppFooter from "./layouts/AppFooter.vue";

const drawer = ref(true);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

provide("layout", { drawer, toggleDrawer });
</script>

<style></style>
