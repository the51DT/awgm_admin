import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // Vuetify 플러그인
import "vuetify/dist/vuetify.min.css";
import Draggable from "vuedraggable";
import { loadFonts } from "./plugins/webfontloader"; // 폰트 로드
import router from "./router"; // 라우터 설정
import "./assets/style/global.scss"; // 전역 스타일

// DragTree 컴포넌트 임포트

// 폰트 로드
loadFonts();

// 앱 생성
const app = createApp(App);
// eslint-disable-next-line vue/multi-word-component-names
app.component("draggable", Draggable);
// DragTree 컴포넌트를 전역으로 등록

// Vuetify, 라우터 등을 앱에 등록하고 마운트
app.use(router).use(vuetify).mount("#app");
