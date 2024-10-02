<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">회원정보</v-card-title>
        <v-tabs v-model="tab">
          <v-tab class="border mr-2" value="one">일반 회원</v-tab>
          <v-tab class="border" value="two">자녀 회원</v-tab>
        </v-tabs>

        <v-tabs-window class="mt-4" v-model="tab">
          <v-tabs-window-item value="one">
            <v-row class="input-row" align="center">
              <v-col cols="3"> </v-col>
              <v-col class="d-flex justify-end pr-0" cols="2">
                <v-select
                  label="회원"
                  :items="['회원', '탈퇴', '강제탈퇴']"
                  variant="outlined"
                  inline
                  hide-details
                  single-line
                  density="compact"
                ></v-select>
              </v-col>
              <v-col class="d-flex justify-end pr-2 pl-2" cols="2">
                <v-select
                  label="이름"
                  :items="['이름', '연락처', '아이디']"
                  variant="outlined"
                  inline
                  hide-details
                  single-line
                  density="compact"
                ></v-select>
              </v-col>
              <v-col cols="5" class="pl-0 d-flex">
                <v-text-field
                  :loading="loading"
                  density="compact"
                  label="검색어를 입력해주세요."
                  variant="outlined"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                ></v-text-field>
                <v-btn class="ml-2 large" variant="flat">검색</v-btn>
              </v-col>
            </v-row>
            <v-card class="custom-table mt-10 mb-10">
              <v-data-table
                height=""
                fixed-header
                class="custom-table"
                :headers="headers"
                :items="filteredBanners"
                :search="search"
                hide-default-footer
              >
              </v-data-table
            ></v-card>
            <v-row class="footer-row">
              <!-- Save button on the left -->
              <v-col class="d-flex justify-start"> </v-col>
              <!-- Pagination in the center -->
              <v-col class="d-flex justify-center">
                <v-pagination
                  v-model="page"
                  :length="totalPages"
                  circle
                  class="pagination"
                  color="primary"
                ></v-pagination>
              </v-col>
              <!-- Register button on the right -->
              <v-col class="d-flex justify-end"> </v-col>
            </v-row>
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <v-row class="input-row" align="center">
              <v-col cols="3"> </v-col>
              <v-col class="d-flex justify-end pr-0" cols="2">
                <v-select
                  label="회원"
                  :items="['회원', '탈퇴', '강제탈퇴']"
                  variant="outlined"
                  inline
                  hide-details
                  single-line
                  density="compact"
                ></v-select>
              </v-col>
              <v-col class="d-flex justify-end pr-2 pl-2" cols="2">
                <v-select
                  label="이름"
                  :items="['이름', '연락처', '아이디']"
                  variant="outlined"
                  inline
                  hide-details
                  single-line
                  density="compact"
                ></v-select>
              </v-col>
              <v-col cols="5" class="pl-0 d-flex">
                <v-text-field
                  :loading="loading"
                  density="compact"
                  label="검색어를 입력해주세요."
                  variant="outlined"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                ></v-text-field>
                <v-btn class="ml-2 large" variant="flat">검색</v-btn>
              </v-col>
            </v-row>
            <v-card class="custom-table mt-10 mb-10">
              <v-data-table
                height=""
                fixed-header
                class="custom-table"
                :headers="headers"
                :items="filteredBanners"
                :search="search"
                hide-default-footer
              >
              </v-data-table
            ></v-card>
            <v-row class="footer-row">
              <!-- Save button on the left -->
              <v-col class="d-flex justify-start"> </v-col>
              <!-- Pagination in the center -->
              <v-col class="d-flex justify-center">
                <v-pagination
                  v-model="page"
                  :length="totalPages"
                  circle
                  class="pagination"
                  color="primary"
                ></v-pagination>
              </v-col>
              <!-- Register button on the right -->
              <v-col class="d-flex justify-end"> </v-col>
            </v-row>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00021",
  data() {
    return {
      search: "",
      selectedOption: "배너 종류",
      options: ["배너 종류", "메인 배너", "띠 배너"],
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "No",
        },
        { key: "bannertype", title: "아이디" },
        { key: "bannername", title: "이름" },
        { key: "bannerstate", title: "닉네임" },
        { key: "write", title: "가입일자" },
        { key: "count", title: "인증횟수" },
        { key: "abo", title: "ABO/Member" },
      ],
      banner: [
        {
          name: "1",
          bannertype: "메인 배너",
          bannername: "밸런스 위드인 365",
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          bannertype: "메인 배너",
          bannername: "뉴트리 파이토 푸로틴",
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          bannertype: "메인 배너",
          bannername: "뉴트리 키즈 푸로틴",
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "4",
          bannertype: "메인 배너",
          bannername: "12월 이벤트 첼린지 모집",
          bannerstate: "비노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "5",
          bannertype: "띠배너",
          bannername: 16.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "6",
          bannertype: 375,
          bannername: 0.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "7",
          bannertype: 392,
          bannername: 0.2,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "8",
          bannertype: 408,
          bannername: 3.2,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "9",
          bannertype: 452,
          bannername: 25.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "10",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "11",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "12",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "13",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "14",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "15",
          bannertype: 518,
          bannername: 26.0,
          bannerstate: "노출",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
      ],
      page: 1,
      totalPages: 10, // Ensure this value is correct
      tab: null,
    };
  },
  computed: {
    filteredBanners() {
      let filtered = this.banner;

      if (this.selectedOption === "메인 배너") {
        filtered = filtered.filter(
          (banner) => banner.bannertype === "메인 배너"
        );
      } else if (this.selectedOption === "띠 배너") {
        filtered = filtered.filter((banner) => banner.bannertype === "띠배너");
      }

      return filtered;
    },
  },
};
</script>
