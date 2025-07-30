<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">DASHBOARD</v-card-title>
        <div class="scroll-area">
          <v-sheet class="mt-4 pl-8 pr-8 dash" rounded="lg">
            <v-row class="input-row" align="center">
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <h4>전체 가입자</h4>
              </v-col>
              <v-col cols="4" align="right">
                <span class="red">40000 명</span>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="mt-4 pl-8 pr-8 dash" rounded="lg">
            <v-row class="input-row" align="center">
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <h4>오늘 가입자</h4>
              </v-col>
              <v-col cols="4" align="right">
                <span class="red">200 명</span>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="mt-4 pl-8 pr-8 dash" rounded="lg">
            <v-row class="input-row" align="center">
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <h4>전체 미션인증 수</h4>
              </v-col>
              <v-col cols="4" align="right">
                <span class="red">1,000,000 회</span>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="mt-4 pl-8 pr-8 dash" rounded="lg">
            <v-row class="input-row" align="center">
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <h4>오늘 미션인증 수</h4>
              </v-col>
              <v-col cols="4" align="right">
                <span class="red">30,000 회</span>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="mt-4 pl-8 pr-8 dash" rounded="lg">
            <v-row class="input-row" align="center">
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <h4>오늘1 미션인증 수</h4>
              </v-col>
              <v-col cols="4" align="right">
                <span class="red">30,000 회</span>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet class="mt-4 pl-8 pr-8 dash" rounded="lg">
            <v-row class="input-row" align="center">
              <v-col cols="1"></v-col>
              <v-col cols="7">
                <h4>오늘2 미션인증 수</h4>
              </v-col>
              <v-col cols="4" align="right">
                <span class="red">30,000 회</span>
              </v-col>
            </v-row>
          </v-sheet>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.dash {
  font-weight: 700;
  font-size: 24px;
}
</style>
