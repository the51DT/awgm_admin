<template>
  <v-container class="login-container" fluid>
    <v-row justify="center" align="center" class="text-center">
      <!-- 이미지와 로그인 박스의 컨테이너 -->
      <v-col cols="12" md="8" lg="6" class="text-center">
        <div class="logo-container">
          <h2>Amway GUTmorning</h2>
          <p>Amway GUT morning ADMIN Login</p>
          <!-- <img :src="logoSrc" alt="Logo" class="logo-img" />
          <img :src="subLogoSrc" alt="Sub Logo" class="sub-logo-img" /> -->
        </div>
        <v-card class="pa-4 login-card">
          <v-card-title>
            <h3 class="box-title">Log in</h3>
          </v-card-title>

          <v-card-subtitle>
            <v-form>
              <v-text-field
                v-model="email"
                label="아이디"
                placeholder="이메일(ID)"
                type="email"
                outlined
                dense
              />
              <v-text-field
                v-model="password"
                label="비밀번호"
                placeholder="비밀번호"
                type="password"
                outlined
                dense
              />
              <v-checkbox
                v-model="rememberMe"
                label="아이디저장"
                class="mt-2"
              />
              <v-btn class="mt-4 custom-btn" @click="login" block>
                로그인
              </v-btn>
            </v-form>
          </v-card-subtitle>

          <v-card-subtitle class="text-left login-sub">
            <p>
              * 비밀번호 5회 오류 시 계정 사용이 제한됩니다. (이전 입력 오류
              횟수 누적)<br />
              * 로그인 관련 문의사항은 관리자에게 문의하세요.
            </p>
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import { ref } from "vue";

// 이미지 파일을 가져옵니다.
// eslint-disable-next-line no-unused-vars
const logoSrc = new URL("@/assets/images/logo.svg", import.meta.url).href;
// eslint-disable-next-line no-unused-vars
const subLogoSrc = new URL("@/assets/images/sub_logo.svg", import.meta.url)
  .href;
</script>

<style scoped lang="scss">
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 3em;
  }

  p {
    font-size: 1em;
  }

  .box-title {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 2.5em;
  }

  .text-center {
    text-align: center;
  }

  .logo-container {
    margin-bottom: 24px; // 이미지와 로그인 박스 간의 간격
  }

  .logo-img,
  .sub-logo-img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  .logo-img {
    width: 100%; // 로고 이미지 너비 설정
    max-width: 400px; // 최대 너비 설정
  }

  .sub-logo-img {
    width: 100%; // 서브 로고 이미지 너비 설정
    max-width: 300px; // 최대 너비 설정
    margin-top: 16px; // 이미지 간의 간격 조정
  }

  .login-card {
    max-width: 500px; // 로그인 박스의 최대 너비를 500px로 설정
    width: 100%;
    margin: 0 auto;
    border-radius: 24px;
  }

  .login-sub {
    text-align: center;
    margin-top: 16px;
  }

  .custom-btn {
    background-color: #000 !important; // 검은색 배경
    color: #fff !important; // 하얀색 글씨
    font-size: 16px !important; // 버튼의 글자 크기 조정
    font-weight: 700 !important; // 버튼의 글자 두께 조정
    border-radius: 12px !important; // 둥근 모서리 설정
    padding: 12px 24px !important; // 버튼의 패딩 조정
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important; // 버튼에 그림자 추가
  }
}
</style>
