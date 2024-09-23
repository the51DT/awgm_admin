<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
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
            backgroundColor: "#3CA877",
            data: [300, 500, 800, 900, 950, 1000, 1200, 1300, 1500, 2400],
          },
          {
            label: "탈퇴",
            backgroundColor: "#f87979",
            data: [10, 10, 10, 10, 10, 35, 318, 321, 324, 327],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
