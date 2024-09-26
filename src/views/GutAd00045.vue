<template>
  <div>
    <input
      type="file"
      accept="image/*"
      capture="camera"
      @change="handleFileUpload"
    />
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: null, // 업로드된 이미지 URL
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result; // 이미지 URL 설정
        };
        reader.readAsDataURL(file); // 파일을 Data URL로 읽기
      }
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100%; /* 이미지가 화면을 넘어가지 않도록 */
  height: auto;
}
</style>
