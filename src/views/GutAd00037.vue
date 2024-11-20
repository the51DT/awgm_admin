<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">통계</v-card-title>
        <v-tabs v-model="tab">
          <v-tab class="border" value="one">누적현황</v-tab>
          <v-tab class="border" value="two">미션이력정보</v-tab>
          <v-tab class="border" value="three">일간 통계</v-tab>
          <v-tab class="border" value="four">월간 통계</v-tab>
          <v-tab class="border" value="five">연간 통계</v-tab>
        </v-tabs>

        <v-tabs-window class="mt-4" v-model="tab">
          <v-tabs-window-item value="one">
            <div class="scroll-area">
              <v-sheet class="mt-4 pa-8" border="sm" rounded="lg">
                <v-row class="input-row" align="center">
                  <v-col cols="12">
                    <h4>누적 현황</h4>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="2">
                    <h4>가입자</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000</span>
                  </v-col>
                  <v-col cols="2">
                    <h4>챌린지 참여자</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000</span>
                  </v-col>
                  <v-col cols="2">
                    <h4>누적인증횟수</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000</span>
                  </v-col>
                </v-row>
              </v-sheet>
              <v-sheet class="mt-4 pa-8" border="sm" rounded="lg">
                <v-row class="input-row" align="center">
                  <v-col cols="12">
                    <h4>팀 현황</h4>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="3">
                    <h4>첼린지 팀 / 참여자수</h4>
                  </v-col>
                  <v-col cols="3">
                    <span class="red">200팀 / 1,000명</span>
                  </v-col>
                  <v-col cols="3">
                    <h4>상시 팀 / 참여자수</h4>
                  </v-col>
                  <v-col cols="3">
                    <span class="red">200팀 / 1,000명</span>
                  </v-col>
                </v-row>
              </v-sheet>

              <v-sheet class="mt-4 pa-8" border="sm" rounded="lg">
                <v-row class="input-row" align="center">
                  <v-col cols="12">
                    <h4>미션 현황</h4>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="4">
                    <h4>당일</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000명</span>
                  </v-col>
                  <v-col cols="6"> </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="2">
                    <h4>당월</h4>
                  </v-col>
                  <v-col cols="2">
                    <h4>1 ~ 5회</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000명</span>
                  </v-col>
                  <v-col cols="2"> </v-col>
                  <v-col cols="2">
                    <h4>6 ~ 15회</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000명</span>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="2"> </v-col>
                  <v-col cols="2">
                    <h4>16 ~ 25회</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000명</span>
                  </v-col>
                  <v-col cols="2"> </v-col>
                  <v-col cols="2">
                    <h4>25회 이상</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000명</span>
                  </v-col>
                </v-row>
                <v-row class="input-row" align="center">
                  <v-col cols="4">
                    <h4>전체</h4>
                  </v-col>
                  <v-col cols="2">
                    <span class="red">12,000명</span>
                  </v-col>
                  <v-col cols="6"> </v-col>
                </v-row>
              </v-sheet>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <v-row class="input-row" align="center">
              <v-col cols="3"> </v-col>
              <v-col class="d-flex justify-end pr-0" cols="2">
                <v-select
                  label="일별"
                  :items="['일별', '탈퇴', '강제탈퇴']"
                  variant="outlined"
                  inline
                  hide-details
                  single-line
                  density="compact"
                ></v-select>
              </v-col>
              <v-col class="d-flex justify-end pr-2 pl-2" cols="4">
                <v-date-input
                  :loading="loading"
                  density="compact"
                  variant="outlined"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                  prepend-icon=""
                  append-inner-icon="$calendar"
                ></v-date-input>
                <div class="ml-4 mr-4 date-sub">~</div>
                <v-date-input
                  :loading="loading"
                  density="compact"
                  variant="outlined"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                  prepend-icon=""
                  append-inner-icon="$calendar"
                ></v-date-input>
              </v-col>
              <v-col cols="3" class="pl-0 d-flex">
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
              <v-col class="d-flex justify-end">
                <v-btn class="large" variant="outlined">엑셀다운</v-btn>
              </v-col>
            </v-row>
          </v-tabs-window-item>
          <v-tabs-window-item value="three">
            <v-row class="input-row" align="center">
              <v-col cols="9"> </v-col>
              <v-col cols="3" class="pl-0 d-flex">
                <v-date-input
                  :loading="loading"
                  density="compact"
                  variant="outlined"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                  prepend-icon=""
                  append-inner-icon="$calendar"
                ></v-date-input>
                <v-btn class="ml-2 large" variant="flat">검색</v-btn>
              </v-col>
            </v-row>
            <div class="scroll-area">
              <v-row class="input-row mt-6" align="center">
                <v-col>
                  <h3>타이틀필요할까 <span>(12월 1일 ~ 12월 14일)</span></h3>
                  <!-- Bar 차트 -->
                  <DynamicChart
                    :chartType="'bar'"
                    :chartData="barChartData"
                    :chartOptions="barChartOptions"
                  />
                </v-col>
              </v-row>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="four">
            <v-row class="input-row" align="center">
              <v-col cols="7"> </v-col>
              <v-col cols="5" class="pl-0 d-flex">
                <v-select
                  label="2024"
                  :items="[
                    '2014',
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
                <v-select
                  class="ml-2"
                  label="11"
                  :items="[
                    '11',
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
                <v-btn class="ml-2 large" variant="flat">검색</v-btn>
              </v-col>
            </v-row>
            <div class="scroll-area">
              <v-row class="input-row mt-6" align="center">
                <v-col>
                  <h3>타이틀필요할까 <span>(12월 1일 ~ 12월 14일)</span></h3>
                  <!-- Bar 차트 -->
                  <DynamicChart
                    :chartType="'bar'"
                    :chartData="barChartData"
                    :chartOptions="barChartOptions"
                  />
                </v-col>
              </v-row>
            </div>
          </v-tabs-window-item>
          <v-tabs-window-item value="five">
            <v-row class="input-row" align="center">
              <v-col cols="9"> </v-col>
              <v-col cols="3" class="pl-0 d-flex">
                <v-select
                  label="년도선택"
                  :items="[
                    '2014',
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
                <v-btn class="ml-2 large" variant="flat">검색</v-btn>
              </v-col>
            </v-row>
            <div class="scroll-area">
              <v-row class="input-row mt-6" align="center">
                <v-col>
                  <h3>타이틀필요할까 <span>(12월 1일 ~ 12월 14일)</span></h3>
                  <!-- Bar 차트 -->
                  <DynamicChart
                    :chartType="'bar'"
                    :chartData="barChartData"
                    :chartOptions="barChartOptions"
                  />
                </v-col>
              </v-row>
            </div>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import DynamicChart from "@/components/DynamicChart";

export default {
  name: "GutAd00037",
  components: {
    DynamicChart,
  },
  data() {
    return {
      barChartData: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        datasets: [
          {
            label: "가입현황",

            backgroundColor: "#f87979",
            data: [
              3000, 5000, 8000, 9000, 9500, 10000, 12000, 13000, 15000, 24000,
            ],
          },
          {
            label: "인증현황",
            backgroundColor: "#3CA877",

            data: [
              3000, 5000, 8000, 9000, 9500, 10000, 12000, 13000, 15000, 24000,
            ],
          },
        ],
      },
      barChartOptions: {
        responsive: true,

        indexAxis: "y",
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
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
