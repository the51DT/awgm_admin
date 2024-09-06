<!-- src/components/UserMenu.vue -->
<template>
  <v-menu v-model:show="menuVisible" transition="scale-transition" offset-y>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="handleClick('Profile')">
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleClick('Logout')">
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from "vue";

const menuVisible = ref(false);

// eslint-disable-next-line no-unused-vars
const handleClick = (action) => {
  menuVisible.value = false; // 메뉴를 닫기
};
</script>

<style scoped>
/* 스타일링 */
</style>
