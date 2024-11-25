<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">코드 관리</v-card-title>
        <div class="scroll-area">
          <v-row>
            <v-col cols="4">
              <v-sheet border="sm">
                <v-treeview
                  :items="items"
                  :opened="initiallyOpen"
                  item-value="title"
                  activatable
                  open-on-click
                >
                  <template v-slot:prepend="{ item }">
                    <div
                      class="draggable-item"
                      :draggable="true"
                      @dragstart="onDragStart(item, $event)"
                      @dragover.prevent="onDragOver($event, item)"
                      @dragleave="onDragLeave($event)"
                      @drop="onDrop($event, item)"
                    >
                      {{ item.title }}
                    </div>
                    <div
                      class="drop-line"
                      @dragover.prevent="onDragOverLine($event, item)"
                      @drop="onDropBetweenItems($event, item)"
                    ></div>
                  </template>
                </v-treeview>
                <div
                  class="invisible-drop-area"
                  @dragover.prevent="onDragOverEmpty($event)"
                  @drop="onDropToEmptySpace($event)"
                ></div>
              </v-sheet>
              <v-row>
                <v-col cols="12" class="mt-2 d-flex justify-end">
                  <v-btn class="large" variant="flat">순서저장</v-btn>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="8">
              <v-sheet class="mb-4 pa-6" border="sm">
                <v-row class="input-row" align="center">
                  <v-col cols="2"><span>코드명 *</span></v-col>
                  <v-col cols="10" class="d-flex">
                    <v-text-field
                      :loading="loading"
                      density="compact"
                      label="보상타입."
                      variant="outlined"
                      hide-details
                      single-line
                      @click:append-inner="onClick"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="input-row">
                  <v-col cols="2"><span>코드</span></v-col>
                  <v-col cols="10" class="d-flex">
                    <v-text-field
                      :loading="loading"
                      density="compact"
                      label="Bosang_type."
                      variant="outlined"
                      hide-details
                      single-line
                      @click:append-inner="onClick"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="2"><span>사용여부</span></v-col>
                  <v-col cols="10" class="d-flex">
                    <v-radio-group v-model="amends" inline hide-details>
                      <v-radio label="사용" value="voucher"></v-radio>
                      <v-radio
                        label="미사용"
                        value="receive"
                        class="ml-4"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-sheet>

              <v-sheet class="mb-4 pa-6" border="sm">
                <v-row class="input-row" align="center">
                  <v-col cols="2"><span>코드명 *</span></v-col>
                  <v-col cols="10" class="d-flex">
                    <v-text-field
                      :loading="loading"
                      density="compact"
                      label="보상타입."
                      variant="outlined"
                      hide-details
                      single-line
                      @click:append-inner="onClick"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="input-row">
                  <v-col cols="2"><span>코드</span></v-col>
                  <v-col cols="10" class="d-flex">
                    <v-text-field
                      :loading="loading"
                      density="compact"
                      label="Bosang_type."
                      variant="outlined"
                      hide-details
                      single-line
                      @click:append-inner="onClick"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="2"><span>사용여부</span></v-col>
                  <v-col cols="10" class="d-flex">
                    <v-radio-group v-model="amends" inline hide-details>
                      <v-radio label="사용" value="voucher"></v-radio>
                      <v-radio
                        label="미사용"
                        value="receive"
                        class="ml-4"
                      ></v-radio>
                    </v-radio-group>
                  </v-col>
                </v-row>
              </v-sheet>

              <v-row class="input-row" align="center">
                <v-col cols="12" class="d-flex justify-end">
                  <v-btn class="large" variant="flat">+추가</v-btn>
                  <v-btn class="ml-2 large" variant="flat" color="red"
                    >-삭제</v-btn
                  >
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
        <v-row class="footer-row">
          <v-col cols="12" class="d-flex justify-end">
            <v-btn class="ml-2 large" variant="flat">저장</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const initiallyOpen = ref(["public"]);
const items = ref([
  { title: ".git" },
  { title: "node_modules" },
  {
    title: "public",
    children: [
      {
        title: "static",
        children: [
          {
            title: "logo.png",
            children: [
              {
                title: "11111",
                children: [{ title: "11111-1" }, { title: "11111-2" }],
              },
              { title: "222222" },
            ],
          },
        ],
      },
      { title: "favicon.ico" },
      { title: "index.html" },
    ],
  },
  {
    title: "public1",
    children: [
      {
        title: "static1",
        children: [{ title: "logo.png1" }],
      },
      { title: "favicon.ico1" },
      { title: "index.html1" },
    ],
  },
  { title: ".gitignore" },
  { title: "babel.config.js" },
  { title: "package.json" },
  { title: "README.md" },
  { title: "vue.config.js" },
  { title: "yarn.lock" },
]);

let draggedItem = null;

const onDragStart = (item, event) => {
  draggedItem = item;
  event.dataTransfer.effectAllowed = "move";
};

const onDragOver = (event, targetItem) => {
  event.preventDefault();
  if (canDrop(targetItem)) {
    event.dataTransfer.dropEffect = "move";
    event.currentTarget.classList.add("drop-allowed");
  } else {
    event.dataTransfer.dropEffect = "none";
    event.currentTarget.classList.add("not-allowed");
  }
};

const onDragOverLine = (event, targetItem) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
};

const onDrop = (event, targetItem) => {
  if (!draggedItem) return;

  const { parent: parentOfDraggedItem, index: draggedIndex } =
    findItemAndParent(items.value, draggedItem);
  const { parent: parentOfTargetItem, index: targetIndex } = findItemAndParent(
    items.value,
    targetItem
  );

  if (parentOfDraggedItem === parentOfTargetItem) {
    parentOfDraggedItem.splice(draggedIndex, 1);
    let newIndex = targetIndex;
    if (draggedIndex < targetIndex) {
      newIndex -= 1;
    }
    parentOfTargetItem.splice(newIndex, 0, draggedItem);
  }

  draggedItem = null;
  removeDropIndicators(event);
};

const onDropBetweenItems = (event, targetItem) => {
  if (!draggedItem) return;

  const { parent: parentOfDraggedItem, index: draggedIndex } =
    findItemAndParent(items.value, draggedItem);
  const { parent: parentOfTargetItem, index: targetIndex } = findItemAndParent(
    items.value,
    targetItem
  );

  if (parentOfDraggedItem === parentOfTargetItem) {
    parentOfDraggedItem.splice(draggedIndex, 1);
    let newIndex = targetIndex;
    if (draggedIndex < targetIndex) {
      newIndex -= 1;
    }
    parentOfTargetItem.splice(newIndex + 1, 0, draggedItem);
  }

  draggedItem = null;
  removeDropIndicators(event);
};

const onDragLeave = (event) => {
  event.currentTarget.classList.remove("drop-allowed", "not-allowed");
};

const onDragOverEmpty = (event) => {
  event.preventDefault();
  if (draggedItem) {
    event.dataTransfer.dropEffect = "move";
  }
};

const onDropToEmptySpace = (event) => {
  if (!draggedItem) return;

  const { parent: parentOfDraggedItem, index: draggedIndex } =
    findItemAndParent(items.value, draggedItem);
  if (parentOfDraggedItem) {
    parentOfDraggedItem.splice(draggedIndex, 1);
    parentOfDraggedItem.push(draggedItem);
  }

  draggedItem = null;
  removeDropIndicators(event);
};

const canDrop = (targetItem) => {
  if (!draggedItem || draggedItem === targetItem) return false;

  const { parent: parentOfDraggedItem } = findItemAndParent(
    items.value,
    draggedItem
  );
  const { parent: parentOfTargetItem } = findItemAndParent(
    items.value,
    targetItem
  );

  // 동일한 부모를 갖는 경우만 드롭 가능, 상위 레벨로 이동 불가
  return parentOfDraggedItem === parentOfTargetItem;
};

const findItemAndParent = (items, targetItem, parent = null) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item === targetItem) {
      return { parent: parent || items, index: i };
    }
    if (item.children) {
      const result = findItemAndParent(
        item.children,
        targetItem,
        item.children
      );
      if (result.parent) {
        return result;
      }
    }
  }
  return { parent: null, index: -1 };
};

const removeDropIndicators = (event) => {
  if (event && event.target) {
    event.target.classList.remove("drop-allowed", "not-allowed");
  }
};
</script>
