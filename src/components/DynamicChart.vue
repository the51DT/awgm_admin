<template>
  <div class="chart-container">
    <component
      :is="chartComponent"
      :id="chartId"
      :options="chartOptionsWithResponsive"
      :data="chartData"
    />
  </div>
</template>

<script>
import { Bar, Line as LineChart, Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement
);

export default {
  name: "DynamicChart",
  components: {
    Bar,
    LineChart,
    Pie,
  },
  props: {
    chartType: {
      type: String,
      default: "bar",
    },
    chartId: {
      type: String,
      default: "my-chart-id",
    },
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      required: true,
    },
  },
  computed: {
    chartComponent() {
      switch (this.chartType) {
        case "line":
          return LineChart;
        case "pie":
          return Pie;
        default:
          return Bar;
      }
    },
    chartOptionsWithResponsive() {
      return {
        ...this.chartOptions,
        responsive: true,
        maintainAspectRatio: false,
        resizeDelay: 0,
      };
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      if (this.$refs[this.chartId]) {
        this.$refs[this.chartId].resize();
      }
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: 400px;
}
</style>
