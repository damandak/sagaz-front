<template>
  <div>
    <LineChart
      :chart-data="data"
      :options="data.options"
      :css-classes="chartCSS"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { ref, computed } from "vue";
import { LineChart } from "vue-chart-3";
import "chartjs-adapter-moment";
import {
  Chart,
  LineController,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  TimeScale,
  TimeSeriesScale,
} from "chart.js";

Chart.register(
  LineController,
  PointElement,
  LineElement,
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
});

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
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.05)",
        },
        type: "time",
        distribution: "linear",
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
  width: 600px;
  max-width: 95% !important;
  height: 300px;
}
</style>
