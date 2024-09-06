import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // Vuetify 플러그인
import { loadFonts } from "./plugins/webfontloader"; // 폰트 로드
import router from "./router"; // 라우터 설정

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
