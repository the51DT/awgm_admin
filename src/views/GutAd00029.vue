<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">보상 수령 대상자</v-card-title>
        <v-row class="input-row" align="center">
          <v-col cols="3"> </v-col>
          <v-col class="d-flex justify-end pr-2" cols="2">
            <v-select
              label="챌린지 선택"
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
          <v-col class="d-flex justify-end pr-2 pl-0" cols="2">
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
          <v-col class="d-flex justify-end pr-2 pl-0" cols="1">
            <v-select
              label="전체"
              :items="['성공', '실패']"
              variant="outlined"
              inline
              hide-details
              density="compact"
            ></v-select>
          </v-col>
          <v-col cols="4" class="pl-0 d-flex">
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
                <td align="center">{{ item.num }}</td>
                <td align="center">{{ item.name }}</td>
                <td align="center">{{ item.nickname }}</td>
                <td align="center">{{ item.id }}</td>
                <td align="center">{{ item.cgname }}</td>
                <td align="center">{{ item.scgname }}</td>
                <td align="center">{{ item.teamname }}</td>
                <td align="center">{{ item.teamnid }}</td>
                <td align="center">{{ item.sba }}</td>
                <td align="center">{{ item.method }}</td>
                <td align="center">{{ item.syn }}</td>
                <td>
                  {{ item.ck }}
                  <v-checkbox inlin hide-details label=""></v-checkbox>
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
          <v-col class="d-flex justify-end">
            <v-btn class="ml-2 large" variant="flat"> 등록 </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "GutAd00029",
  data() {
    return {
      search: "",
      headers: [
        {
          align: "center",
          key: "num",
          sortable: false,
          title: "NO",
        },

        { align: "center", key: "name", title: "이름", sortable: false },
        {
          align: "center",
          key: "nicknmae",
          title: "닉네임",
          sortable: false,
        },
        { align: "center", key: "id", title: "ID(ABO ID)", sortable: false },
        { align: "center", key: "cgname", title: "챌린지명", sortable: false },
        {
          align: "center",
          key: "scgnmae",
          title: "서브 챌린지명",
          sortable: false,
        },

        { align: "center", key: "teamname", title: "팀명", sortable: false },
        {
          align: "center",
          key: "teamid",
          title: "팀장ID(ABO ID)",
          sortable: false,
        },
        { align: "center", key: "sba", title: "성공보상", sortable: false },
        { align: "center", key: "method", title: "수령방법", sortable: false },
        { align: "center", key: "syn", title: "성공여부", sortable: false },
        { align: "center", key: "ck", title: "수령확인", sortable: false },
      ],
      banner: [
        {
          num: "1",
          name: "고주영",
          nickname: "고주",
          id: "999999999(9999999)",
          cgname: "25년 1월 것모닝 챌린지",
          scgname: "2024-12-01 07:59",
          teamname: "25년 1월 것모닝 1팀",
          teamid: "ss",
          sba: "바우처",
          method: "팀장수령",
          syn: "성공",
          ck: "",
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
