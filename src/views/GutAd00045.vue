<template>
  <div>
    <button @click="openCamera">사진 촬영</button>
    <img v-if="imageSrc" :src="imageSrc" alt="Captured Image" />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "GutAd00045",
};
const imageSrc = ref(null);

const openCamera = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.capture = "camera";

  input.addEventListener("change", (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        imageSrc.value = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  });

  input.click();
};
</script>
