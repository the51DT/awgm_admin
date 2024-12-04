<template>
  <v-app>
    <v-main class="pa-10">
      <v-card class="custom" flat>
        <v-card-title class="card-title">DASHBOARD</v-card-title>
        <div class="scroll-area">
          <v-row class="input-row mt-6" align="center">
            <v-col>
              <h3>회원 누적 현황 <span>(12월 1일 ~ 12월 14일)</span></h3>

              <DynamicChart
                :chartType="'bar'"
                :chartData="barChartData"
                :chartOptions="barChartOptions"
              />
            </v-col>
          </v-row>
          <v-row class="input-row mt-12" align="center">
            <v-col>
              <h3>미션 누적 현황 <span>(12월 1일 ~ 12월 14일)</span></h3>

              <DynamicChart
                :chartType="'bar'"
                :chartData="missionChartData"
                :chartOptions="missionChartOptions"
              />
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import DynamicChart from "@/components/DynamicChart";

export default {
  name: "App",
  components: { DynamicChart },
  data() {
    return {
      // Bar 차트 데이터와 옵션
      barChartData: {
        labels: [
          "12월 01일",
          "12월 02일",
          "12월 03일",
          "12월 04일",
          "12월 05일",
          "12월 06일",
          "12월 07일",
          "12월 08일",
          "12월 09일",
          "12월 10일",
        ],
        datasets: [
          {
            label: "가입",
            yAxisID: "y-left",
            backgroundColor: "#4B7BE5",
            data: [
              3000, 5000, 8000, 9000, 9500, 10000, 12000, 13000, 15000, 24000,
            ],
          },
          {
            label: "탈퇴",
            yAxisID: "y-right",
            backgroundColor: "#f87979",
            data: [0, 0, 0, 0, 10, 15, 18, 21, 24, 27],
          },
        ],
      },
      barChartOptions: {
        responsive: true,
        "y-left": {
          position: "left",
        },
        "y-right": {
          position: "right",
        },
        scales: {
          "y-right": {
            suggestedMax: 1000,
            ticks: {
              stepSize: 200,
            },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
      // 미션 누적 차트 데이터와 옵션
      missionChartData: {
        labels: [
          "12월 01일",
          "12월 02일",
          "12월 03일",
          "12월 04일",
          "12월 05일",
          "12월 06일",
          "12월 07일",
          "12월 08일",
          "12월 09일",
          "12월 10일",
        ],
        datasets: [
          {
            label: "미션인증",
            backgroundColor: "#4B7BE5",
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
          },
        ],
      },
      missionChartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped lang="scss"></style>
