<template>
  <div>
    <h1>📸 Vue 사진첩 테스트</h1>
    <button @click="openGallery">🖼 사진첩에서 선택</button>
    <input type="file" ref="fileInput" accept="image/*" style="display: none" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const fileInput = ref(null);

    const openGallery = () => {
      fileInput.value.click();
    };

    return { fileInput, openGallery };
  },
};
</script>
