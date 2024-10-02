<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">개인정보처리방침</v-card-title>

        <v-row class="input-row" align="center">
          <v-col cols="7"></v-col>
          <v-col cols="5" class="d-flex">
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
            ><template v-slot:item="{ item }">
              <tr>
                <td>{{ item.name }}</td>
                <td align="center">{{ item.startday }}</td>
                <td align="center">{{ item.title }}</td>
                <td align="center">{{ item.write }}</td>
                <td align="center">{{ item.ymdt }}</td>
              </tr>
            </template>
          </v-data-table></v-card
        >

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
  name: "GutAd00004",
  data() {
    return {
      headers: [
        {
          align: "start",
          key: "name",
          sortable: false,
          title: "No",
        },
        { align: "center", key: "startday", title: "시행일", sortable: false },
        { align: "center", key: "title", title: "제목", sortable: false },
        { align: "center", key: "write", title: "등록자", sortable: false },
        { align: "center", key: "ymdt", title: "등록일시", sortable: false },
      ],
      banner: [
        {
          name: "1",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "1",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "1",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "1",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "1",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "2",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
          write: "고주영",
          ymdt: "2024-12-01 07:59",
        },
        {
          name: "3",
          startday: "2025.01.01",
          title: "밸런스 위드인 365",
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
