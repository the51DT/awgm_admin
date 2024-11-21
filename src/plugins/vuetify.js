import { createVuetify } from "vuetify";
import "vuetify/styles"; // Vuetify 스타일을 가져옵니다.

import { aliases, mdi } from "vuetify/iconsets/mdi"; // Material Design Icons 사용
import { VDateInput } from "vuetify/labs/VDateInput";
import { VTreeview } from "vuetify/labs/VTreeview";
export default createVuetify({
  components: {
    VDateInput,
    VTreeview,
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      color: "#3f4d66",
      variant: "flat",
    },
  },
  locale: {
    locale: "ko",
  },
  date: {
    locale: {
      ko: "ko",
    },
  },
});
