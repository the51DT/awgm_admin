<template>
  <v-card-title class="card-title">
    {{ title }}
  </v-card-title>
</template>

<script>
export default {
  name: "AdminTitle",
  props: {
    title: {
      type: String,
      required: true,
      default: "AdminTitle",
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 26px;
  padding-left: 0;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 8px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}
</style>
