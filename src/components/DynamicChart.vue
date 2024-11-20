<template>
  <div>
    <component
      :is="chartComponent"
      :id="chartId"
      :options="chartOptions"
      :data="chartData"
    />
  </div>
</template>

<script>
import { Bar, Line, Pie } from "vue-chartjs";
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
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Bar, Line, Pie },
  props: {
    chartType: {
      type: String,
      default: "bar", // 기본은 bar 차트
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
          return Line;
        case "pie":
          return Pie;
        default:
          return Bar;
      }
    },
  },
};
</script>
