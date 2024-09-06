<template>
  <div class="lnb_admin" :class="{ on: drawer }">
    <v-list dense class="menu-list">
      <!-- Dashboard Title -->
      <v-list-item
        class="subTitle"
        :class="{ select: isSelected(menuItems[0]) }"
        @click="handleClick(menuItems[0])"
      >
        <v-list-item-content>
          <v-list-item-title class="btn_menu">
            {{ menuItems[0].text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Main menu items -->
      <template v-for="(item, index) in menuItems.slice(1)" :key="index">
        <!-- Render top-level menu items (without sub-menu) -->
        <template v-if="!item.subMenu">
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
        </template>

        <!-- Render top-level menu items (with sub-menu) -->
        <template v-if="item.subMenu">
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
          <v-list dense class="menu_2dep">
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

// eslint-disable-next-line no-unused-vars
const drawer = ref(false);
const router = useRouter();

// eslint-disable-next-line no-unused-vars
const menuItems = ref([
  { text: "Gut Morning Admin", subMenu: [], path: "/" },
  {
    text: "메인 관리",
    subMenu: [
      { text: "- 배너 관리", path: "/AppMenu2" },
      { text: "- 팝업 관리", path: "/AppMenu2" },
      { text: "- 것모닝 제품 링크 관리", path: "/AppMenu2" },
    ],
  },
  {
    text: "게시판 관리",
    subMenu: [
      { text: "- 공지사항", path: "/AppMenu3" },
      { text: "- FAQ", path: "/AppMenu3" },
      { text: "- C/S 소통 게시판", path: "/AppMenu3" },
    ],
  },
  {
    text: "회원 관리",
    subMenu: [
      { text: "- 회원 목록", path: "/AppMenu3" },
      { text: "- 휴먼회원 목록", path: "/AppMenu3" },
      { text: "- 접속 로그", path: "/AppMenu3" },
    ],
  },
  {
    text: "첼린지 관리",
    subMenu: [
      { text: "- 첼린지", path: "/AppMenu3" },
      { text: "- 보상 수상 대상자", path: "/AppMenu3" },
      { text: "- 팀 목록", path: "/AppMenu3" },
    ],
  },
  {
    text: "미션 관리",
    subMenu: [
      { text: "- 미션 인증 현황", path: "/AppMenu3" },
      { text: "- 미션 인증 로그", path: "/AppMenu3" },
    ],
  },
  {
    text: "통계",
    subMenu: [{ text: "- 통계", path: "/AppMenu3" }],
  },
  {
    text: "시스템 관리",
    subMenu: [
      { text: "- 관리자 관리", path: "/AppMenu3" },
      { text: "- 코드 관리", path: "/AppMenu3" },
    ],
  },
]);

// eslint-disable-next-line no-unused-vars
const handleClick = (item) => {
  if (item.path) {
    router.push(item.path);
  }
};

// eslint-disable-next-line no-unused-vars
const isSelected = (item) => {
  return false;
};
</script>

<style scoped lang="scss">
.lnb_admin {
  background: #3f4d66;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  /* Ensure menu list takes up available space and makes sidebar scrollable */
  .menu-list {
    overflow-y: auto; /* Enables scrolling if content overflows */
  }
  .v-list {
    padding: 0;
    .v-list-item {
      min-height: 40px;
    }
    .v-list-item.list_1dep {
      min-height: 50px;
    }
  }
  .subTitle {
    margin: 0;

    height: 60px;
    background-color: #2c3e50;

    .btn_menu {
      font-weight: 700;
      color: #ffffff;

      font-size: 20px;
      transition: background 0.3s ease;
    }
  }

  .list_1dep {
    .btn_menu {
      position: relative;
      display: block;
      font-size: 18px;
      font-weight: 700;
      color: #ffffff;

      transition: background 0.3s ease;
    }

    &.select .btn_menu {
      background-color: #2c3e50;
      color: #ffffff;
    }

    &.select .btn_menu::after {
      content: "";
      display: block;
      width: 100%;

      background: #ffffff;
      border-radius: 6px;
      opacity: 0.2;
    }
  }

  .menu_2dep {
    .list_2dep {
      .btn_menu {
        position: relative;
        margin: 0;
        font-size: 14px;
        font-weight: 700;
        color: #c2c2c2;
      }
    }
  }

  .sidebar-buttons {
    margin-top: auto; /* Push buttons to the bottom */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    background-color: #3f4d66; /* Background color to match the sidebar */

    a {
      text-decoration: none; /* Remove underline from links */
    }

    .sidebar-btn {
      width: 100%;
      background-color: #ffffff; /* Button color */
      color: #000000; /* Text color */
      height: 48px; /* Set a fixed height for buttons */
    }
  }
}
</style>
