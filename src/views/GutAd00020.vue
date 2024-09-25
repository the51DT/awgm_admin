<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">C/S 소통게시판 상세</v-card-title>

        <v-row class="input-row" align="center">
          <v-col cols="2">
            <span>제목</span>
          </v-col>
          <v-col class="d-flex justify-end pr-0" cols="2">
            <v-select
              label="회원 관련"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              inline
              hide-details
              density="compact"
            ></v-select>
          </v-col>
          <v-col cols="8" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="소통합시다"
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="2">
            <span>내용</span>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-textarea
              :loading="loading"
              density="compact"
              placeholder="소통합시다&#10;소통 좋아요&#10;너무 좋아요"
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-textarea>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="2" class="d-flex justify-start">
            <v-btn class="large" variant="flat">삭제</v-btn>
          </v-col>

          <v-col cols="10" class="d-flex justify-end">
            <v-btn class="large" variant="outlined">목록</v-btn>
            <v-btn class="ml-2 large" variant="flat">수정</v-btn>
          </v-col>
        </v-row>

        <v-row class="input-row mt-6">
          <v-col cols="12">
            <h3>댓글수정</h3>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="12" class="d-flex align-center justify-space-between ga-4">
            <span class="mr-2 flex-shrink-0">개선 중</span>
            <div class="d-flex justify-space-between align-center w-100">
              <span>당신 의견 좋아요.</span>
              <span class="ml-2 flex-shrink-0">명의실</span>
            </div>
            <div class="ml-2 d-flex justify-end align-center">
              <v-btn class="large" variant="text">삭제</v-btn>
              <v-btn class="ml-2 large" variant="text">수정</v-btn>
            </div>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="2">
            <v-select
              label="개선 중"
              :items="[
                'California',
                'Colorado',
                'Florida',
                'Georgia',
                'Texas',
                'Wyoming',
              ]"
              variant="outlined"
              inline
              hide-details
              density="compact"
            ></v-select>
          </v-col>
          <v-col cols="10" class="d-flex">
            <v-text-field
              :loading="loading"
              density="compact"
              label="댓글을 입력하세요."
              variant="outlined"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
            <v-btn class="ml-4 large" variant="flat">댓글저장</v-btn>
          </v-col>
        </v-row>

        <v-row class="input-row">
          <v-col cols="12" class="d-flex align-center justify-space-between ga-4">
            <span class="mr-2 flex-shrink-0">개선 중</span>
            <div class="d-flex justify-space-between align-center w-100">
              <span>난 싫어요</span>
                <span class="ml-2 flex-shrink-0">고주영</span>
              </div>
              <div class="ml-2 d-flex justify-end align-center">
                <v-btn class="large" variant="text">삭제</v-btn>
                <v-btn class="ml-2 large" variant="text">수정</v-btn>
              </div>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00020",
};
</script>
