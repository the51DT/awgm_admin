<template>
  <div class="lnb_admin" :class="{ on: drawer }">
    <v-list dense class="menu-list">
      <!-- Main menu items -->
      <template v-for="(item, index) in menuItems" :key="index">
        <!-- Render menu items (with or without sub-menu) -->
        <v-list-item
          :class="['list_1dep', { select: isSelected(item) }]"
          @click="handleClick(item)"
        >
          <v-list-item-content>
            <v-list-item-title class="btn_menu">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Submenu items -->
        <v-list dense class="menu_2dep" v-if="item.subMenu">
          <v-list-item
            v-for="(subItem, subIndex) in item.subMenu"
            :key="subIndex"
            :class="['list_2dep', { select: isSelected(subItem) }]"
            @click="handleClick(subItem)"
          >
            <v-list-item-content>
              <v-list-item-title class="btn_menu">
                {{ subItem.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-list>

    <div class="sidebar-buttons">
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <v-btn class="sidebar-btn" color="white">GUT Morning 바로가기</v-btn>
      </a>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <v-btn class="sidebar-btn" color="white">GUT M. Korea 바로가기</v-btn>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();

const menuItems = ref([
  {
    text: "로그인",
    subMenu: [{ text: "로그인", path: "/로그인-GutAd00001" }],
  },
  {
    text: "메인 관리",
    subMenu: [
      { text: "배너 관리", path: "/AppMenu3" },
      { text: "팝업 관리", path: "/AppMenu2" },
      { text: "것모닝 제품 링크 관리", path: "/AppMenu2" },
    ],
  },
  {
    text: "게시판 관리",
    subMenu: [
      { text: "공지사항", path: "/AppMenu21" },
      { text: "FAQ", path: "/AppMenu2" },
      { text: "C/S 소통 게시판", path: "/AppMenu3" },
    ],
  },
  {
    text: "회원 관리",
    subMenu: [
      { text: "회원 목록", path: "/DataTables" },
      { text: "휴먼회원 목록", path: "/AppMenu3" },
      { text: "접속 로그", path: "/AppMenu3" },
    ],
  },
  {
    text: "첼린지 관리",
    subMenu: [
      { text: "첼린지", path: "/AppMenu3" },
      { text: "보상 수상 대상자", path: "/AppMenu3" },
      { text: "팀 목록", path: "/AppMenu3" },
    ],
  },
  {
    text: "미션 관리",
    subMenu: [
      { text: "미션 인증 현황", path: "/AppMenu3" },
      { text: "미션 인증 로그", path: "/AppMenu3" },
    ],
  },
  {
    text: "통계",
    subMenu: [{ text: "통계", path: "/AppMenu3" }],
  },
  {
    text: "시스템 관리",
    subMenu: [
      { text: "관리자 관리", path: "/AppMenu3" },
      { text: "코드 관리", path: "/AppMenu3" },
    ],
  },
]);

const handleClick = (item) => {
  if (item.path) {
    router.push(item.path);
  }
};

// eslint-disable-next-line no-unused-vars
const isSelected = (item) => {
  // This function should be implemented based on your needs to highlight the selected item
  return false;
};
</script>

<style scoped lang="scss"></style>
