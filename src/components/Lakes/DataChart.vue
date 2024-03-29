<template>
  <div>
    <LineChart
      v-if="chartType === 'line'"
      :chart-data="data"
      :options="data.options"
      :css-classes="chartCSS"
    />
    <BarChart
      v-if="chartType === 'bar'"
      :chart-data="data"
      :options="data.options"
      :css-classes="chartCSS"
    />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { ref, computed } from "vue";
import { LineChart, BarChart } from "vue-chart-3";
import "chartjs-adapter-moment";
import {
  Chart,
  LineController,
  BarController,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  TimeSeriesScale,
} from "chart.js";

Chart.register(
  LineController,
  BarController,
  PointElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  TimeSeriesScale
);

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  chartCSS: {
    type: String,
    default: "chart-container",
  },
  label: {
    type: Object,
    required: true,
  },
  chartData: {
    type: Array,
    required: true,
  },
  start_date: {
    type: String,
    default: "",
  },
  end_date: {
    type: String,
    default: "",
  },
  interval: {
    type: String,
    default: "day",
  },
  unit: {
    type: String,
    default: "",
  },
  line_color: {
    type: String,
    default: "",
  },
  point_color: {
    type: String,
    default: "",
  },
  labelColor: {
    type: String,
    default: "rgba(255, 255, 255, 1)",
  },
  minLimit: {
    type: Number,
    default: 0,
  },
  maxLimit: {
    type: Number,
    default: 100,
  },
  chartType: {
    type: String,
    default: "line",
  },
});
console.log(props.start_date);
const data = computed(() => ({
  backgroundColor: "#000",
  labels: props.chartData.map((element) => element.date),
  datasets: [
    {
      data: props.chartData.map((element) => element.data),
      backgroundColor: props.point_color,
      borderColor: props.line_color,
      color: "#FFF", // text color
      backdropColor: "#FFF", // Backdrop Color
      borderWidth: 1,
    },
  ],
  options: {
    spanGaps: true,
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
          offset: false,
        },
        type: "time",
        distribution: "linear",
        bounds: "ticks",
        offset: false,
        min: props.start_date,
        max: props.end_date,
        time: {
          unit: props.interval,
          tooltipFormat: "DD/MM/YYYY HH:mm",
        },
        ticks: {
          color: props.labelColor,
        },
      },
      y: {
        title: {
          display: true,
          text: props.unit,
          color: props.labelColor,
        },
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        ticks: {
          color: props.labelColor,
        },
        min: props.minLimit,
        max: props.maxLimit,
      },
    },
    plugins: {
      title: {
        display: true,
        text: props.title,
        color: "#FFF",
        font: {
          family: "Poppins",
          size: 16,
        },
      },
      legend: {
        display: false,
      },
    },
  },
}));
</script>
<style lang="scss">
.chart-container {
  margin: auto;
  margin-bottom: 20px;
  width: 85%;
  min-width: 300 !important;
  height: 300px;
}
</style>
