<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">금칙어 관리 등록</v-card-title>

        <v-row class="input-row">
          <v-col cols="12" class="d-flex">
            <v-textarea
              :loading="loading"
              density="compact"
              label="에디터 영역"
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row class="footer-row">
          <!-- Save button on the left -->
          <v-col cols="2" class="d-flex justify-start"> </v-col>

          <!-- Pagination in the center -->
          <v-col cols="10" class="d-flex justify-end">
            <v-btn class="ml-2 large" variant="flat">저장</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00005",
  data() {
    return {
      exposure: "exposed",
    };
  },
};
</script>
