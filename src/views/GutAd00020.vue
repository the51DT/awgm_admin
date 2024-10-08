<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">C/S 소통게시판 상세</v-card-title>
        <div class="scroll-area">
          <v-row class="input-row" align="center">
            <v-col cols="2">
              <span>제목</span>
            </v-col>
            <v-col class="d-flex justify-end pr-0" cols="2">
              <v-select
                label="전체"
                :items="[
                  '회원관련',
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
          <div v-for="(comment, index) in comments" :key="index">
            <v-row class="input-row">
              <v-col
                cols="12"
                class="d-flex align-center justify-space-between ga-4"
              >
                <span class="mr-2 flex-shrink-0">{{ comment.title }}</span>
                <div class="d-flex justify-space-between align-center w-100">
                  <span>{{ comment.content }}</span>
                  <span class="ml-2 flex-shrink-0">{{ comment.author }}</span>
                </div>
                <div class="ml-2 d-flex justify-end align-center">
                  <v-btn
                    class="large"
                    variant="text"
                    @click="deleteComment(index)"
                    >삭제</v-btn
                  >
                  <v-btn
                    class="ml-2 large"
                    variant="text"
                    @click="toggleEdit(index)"
                    >수정</v-btn
                  >
                </div>
              </v-col>
            </v-row>

            <v-row class="input-row" v-if="editIndex === index">
              <v-col cols="2">
                <v-select
                  v-model="comment.selected"
                  label="선택"
                  :items="['개선 중', '개선 대기', '취소', '개선 완료']"
                  variant="outlined"
                  inline
                  hide-details
                  density="compact"
                ></v-select>
              </v-col>
              <v-col cols="10" class="d-flex">
                <v-textarea
                  v-model="comment.content"
                  :loading="loading"
                  density="compact"
                  placeholder="등록된 댓글 내용 노출"
                  variant="outlined"
                  hide-details
                  single-line
                ></v-textarea>
                <v-btn
                  class="ml-4 large"
                  @click="updateComment(index)"
                  variant="flat"
                  >댓글수정</v-btn
                >
              </v-col>
            </v-row>
          </div>
          <v-row class="input-row mt-6">
            <v-col cols="12">
              <h3>댓글등록</h3>
            </v-col>
          </v-row>
          <v-row class="input-row">
            <v-col cols="2">
              <v-select
                label="선택"
                :items="['개선 중', '개선 대기', '취소', '개선 완료']"
                variant="outlined"
                inline
                hide-details
                density="compact"
              ></v-select>
            </v-col>
            <v-col cols="10" class="d-flex">
              <v-textarea
                density="compact"
                placeholder="댓글을 입력하세요."
                variant="outlined"
                hide-details
                single-line
              ></v-textarea>
              <v-btn class="ml-4 large" variant="flat">댓글저장</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GutAd00020",
  setup() {
    const loading = ref(false);
    const editIndex = ref(null);

    const comments = ref([
      {
        title: "개선 대기",
        content: "당신 의견 좋아요.",
        author: "명의실",
        selected: "개선 대기",
      },
      {
        title: "취소",
        content: "난 싫어요",
        author: "고주영",
        selected: "취소",
      },
    ]);

    const toggleEdit = (index) => {
      editIndex.value = editIndex.value === index ? null : index;
    };

    const updateComment = (index) => {
      comments.value[index].title = comments.value[index].selected;
      // eslint-disable-next-line no-console
      console.log("댓글 수정 완료", comments.value[index]);
      editIndex.value = null;
    };

    const deleteComment = (index) => {
      comments.value.splice(index, 1);
      // eslint-disable-next-line no-console
      console.log("댓글 삭제 완료", index);
    };

    const onClick = () => {
      // eslint-disable-next-line no-console
      console.log("댓글 수정 버튼 클릭됨");
    };

    return {
      comments,
      loading,
      editIndex,
      toggleEdit,
      updateComment,
      deleteComment,
      onClick,
    };
  },
};
</script>
