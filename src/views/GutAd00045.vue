<template>
  <div>
    <input type="file" accept="image/*" @change="handleFileUpload" />
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
    <button @click="openCamera">사진촬영 업로드 테스트</button>
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
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.capture = "environment";
      input.onchange = (event) => {
        this.handleFileUpload(event);
      };
      input.click();
    },
  },
};
</script>
