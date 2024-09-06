<!-- src/layouts/AppSidebar.vue -->
<template>
  <div class="lnb_admin" :class="{ on: drawer }">
    <v-list dense>
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
  { text: "Amway Admin", subMenu: [], path: "/" },
  {
    text: "시승자 관리",
    subMenu: [
      { text: "시승자 명단", path: "/AppMenu2" },
      { text: "시승자 등록", path: "/AppMenu2" },
      { text: "시승 동의서", path: "/AppMenu2" },
    ],
  },
  {
    text: "시승차량 관리",
    subMenu: [
      { text: "차량 목록", path: "/AppMenu3" },
      { text: "차량 등록", path: "/AppMenu3" },
      { text: "운행 이력", path: "/AppMenu3" },
      { text: "차량번호 관리", path: "/AppMenu3" },
    ],
  },
  {
    text: "시승차량 체크리스트",
    subMenu: [{ text: "체크리스트", path: "/AppMenu3" }],
  },
  {
    text: "운영 정보 공유",
    subMenu: [
      { text: "코스정보 공유", path: "/AppMenu3" },
      { text: "DEMS 매뉴얼", path: "/AppMenu3" },
    ],
  },
  {
    text: "리포트",
    subMenu: [
      { text: "시승리포트", path: "/AppMenu3" },
      { text: "시승차 이슈 리포트", path: "/AppMenu3" },
    ],
  },
  {
    text: "STAFF 알림",
    subMenu: [
      { text: "공지사항", path: "/AppMenu3" },
      { text: "행사FEED", path: "/AppMenu3" },
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
  // Implement selection logic if needed
  return false;
};
</script>

<style scoped lang="scss">
.my-drawer {
  border: none;
}
.lnb_admin {
  background: #3f4d66;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .v-list {
    padding: 0 0;
    border: none;
  }
  .subTitle {
    margin: 0;
    padding: 20px 16px;
    background-color: #2c3e50;
    height: 64px;
    .btn_menu {
      font-weight: 700;
      color: #ffffff;
      line-height: 18px;
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
      line-height: 20px;
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
      height: 32px;
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
}
</style>
