<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">팀관리</v-card-title>
        <div class="scroll-area">
          <v-row class="input-row" align="center">
            <v-col cols="3">
              <strong>챌린지 타입</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>챌린지</span>
            </v-col>
            <v-col cols="3">
              <strong>생성일</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>2024.12.28</span>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="3">
              <strong>챌린지명</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>25년 1월 것모닝 챌린지</span>
            </v-col>
            <v-col cols="3">
              <strong>팀원</strong>
            </v-col>
            <v-col cols="1" class="d-flex">
              <span>45명</span>
            </v-col>
            <v-col cols="2" class="d-flex">
              <v-btn class="ml-2 large" variant="outlined">팀원보기</v-btn>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="3">
              <strong>팀명</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>웨이웨이 것모닝</span>
            </v-col>
            <v-col cols="3">
              <strong>성공조건 </strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>80% (인증횟수 300회 이상)</span>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="3">
              <strong>팀장명 / ID(ABO) / 닉네임</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>웨이웨이 것모닝</span>
            </v-col>
            <v-col cols="3">
              <strong>성공보상 / 보상명 </strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>$ABC수령$ $보상명$</span>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="3">
              <strong>챌린지 기간</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>2025.01.01 ~ 2025.02.28</span>
            </v-col>
            <v-col cols="3">
              <strong>보상수령방법</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>팀장이 수령</span>
            </v-col>
          </v-row>
          <v-row class="input-row" align="center">
            <v-col cols="3">
              <strong>팀 인증률</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>전체 75% (89%, 76%, 97%)</span>
            </v-col>
            <v-col cols="3">
              <strong>보상수령처</strong>
            </v-col>
            <v-col cols="3" class="d-flex">
              <span>분당</span>
            </v-col>
          </v-row>

          <v-row class="input-row mt-6" align="center">
            <v-col cols="5">
              <h3>팀원정보</h3>
            </v-col>
            <v-col class="d-flex justify-end pr-2" cols="2">
              <v-select
                label="전체"
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
            <v-col cols="5" class="pl-0 d-flex">
              <v-text-field
                :loading="loading"
                density="compact"
                label="제목을 입력해주세요."
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
              <template v-slot:item="{ item }">
                <tr>
                  <td align="center">{{ item.name }}</td>
                  <td align="center">{{ item.bannername }}</td>
                  <td align="center">{{ item.bannerstate }}</td>
                  <td align="center">{{ item.write }}</td>
                  <td align="center">{{ item.count }}</td>
                  <td align="center">{{ item.ymdt }}</td>

                  <td align="center">
                    <v-btn
                      @click="handleResignTeam(item)"
                      class="large"
                      variant="outlined"
                    >
                      강제탈퇴
                    </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>

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
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00033",
  data() {
    return {
      search: "",
      selectedOption: "배너 종류",
      options: ["배너 종류", "메인 배너", "띠 배너"],
      headers: [
        {
          align: "center",
          key: "name",
          sortable: false,
          title: "이름",
        },

        { align: "center", key: "bannername", title: "ID", sortable: false },
        {
          align: "center",
          key: "bannerstate",
          title: "ABO/Member ID",
          sortable: false,
        },
        { align: "center", key: "write", title: "닉네임", sortable: false },
        { align: "center", key: "count", title: "인증횟수", sortable: false },
        { align: "center", key: "ymdt", title: "팁가입일", sortable: false },

        { align: "center", key: "resignteam", title: "탈퇴", sortable: false },
      ],
      banner: [
        {
          name: "고주영",
          bannername: "8888888888",
          bannerstate: "999999999",
          write: "고주",
          count: "99",
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
    };
  },
  computed: {
    filteredBanners() {
      return this.banner; // 현재는 모든 배너를 반환, 필터링 로직 추가 가능
    },
  },
  methods: {
    handleMoveTeam(item) {
      // eslint-disable-next-line no-console
      console.log("이관:", item);
    },
    handleResignTeam(item) {
      // eslint-disable-next-line no-console
      console.log("탈퇴:", item);
    },
  },
};
</script>
