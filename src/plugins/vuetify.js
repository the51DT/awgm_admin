import { createVuetify } from "vuetify";
import "vuetify/styles"; // Vuetify 스타일을 가져옵니다.
import { aliases, mdi } from "vuetify/iconsets/mdi"; // Material Design Icons 사용

export default createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
