<template>
  <div>
    <input
      type="file"
      accept="image/*"
      capture="environment"
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
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>
<style scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
