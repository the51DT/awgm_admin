<template>
  <div>
    <input
      type="file"
      accept="image/*"
      id="cameraInput"
      style="display: none"
      @change="handleFileUpload"
    />
    <button @click="openCamera">카메라 열기</button>
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    openCamera() {
      const input = document.getElementById("cameraInput");
      input.capture = "environment"; // 후면 카메라 설정
      input.click();
    },
  },
};
</script>
