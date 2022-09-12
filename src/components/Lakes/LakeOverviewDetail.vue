<template>
  <div v-if="lakemeasurements.loaded" class="lake-detail-container">
    <DataChart
      :chartData="lakemeasurements.water_level"
      :label="labels"
      :title="title_wl"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="unit_wl"
      :line_color="line_wl"
      :point_color="point_wl"
      :chartCSS="chartCSS"
      :labelColor="labelColor"
    />
    <DataChart
      :chartData="lakemeasurements.atmospheric_temperature"
      :label="labels"
      :title="title_at"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="unit_at"
      :line_color="line_at"
      :point_color="point_at"
      :chartCSS="chartCSS"
      :labelColor="labelColor"
    />
    <DataChart
      :chartData="lakemeasurements.precipitation"
      :label="labels"
      :title="title_pp"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="unit_pp"
      :line_color="line_pp"
      :point_color="point_pp"
      :chartCSS="chartCSS"
      :labelColor="labelColor"
    />
    <p>Ultima actualización: {{ lakemeasurements.end_date }}</p>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import WaterLevel from "./WaterLevel.vue";
import DataChart from "./DataChart.vue";
import {
  getLakeMeasurements,
  lakemeasurements,
} from "../composables/getLakeMeasurements";
import moment from "moment";
import { lake } from "../composables/getLake";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  interval: {
    type: String,
    required: true,
    default: "day",
  },
});

let labels = {
  day: "Dia",
  week: "Semana",
  month: "Mes",
  year: "Año",
};

const chartCSS = "loc-chart-container";
const labelColor = "#FFF";

const title_wl = "Nivel de agua";
const title_at = "Temperatura atmosférica";
const title_pp = "Precipitación";

const unit_wl = "metros - mts";
const unit_at = "grados Celsius - °C";
const unit_pp = "milímetros - mm";

const line_wl = "rgba(45, 108, 196, 1)";
const line_at = "rgba(123, 45, 196, 1)";
const line_pp = "rgba(148, 196, 45, 1)";

const point_wl = "rgba(45, 108, 196, 0.6)";
const point_at = "rgba(123, 45, 196, 0.5)";
const point_pp = "rgba(148, 196, 45, 0.5)";

let axis_interval = "day";
if (props.interval === "daily") {
  axis_interval = "hour";
} else if (props.interval === "weekly") {
  axis_interval = "day";
} else if (props.interval === "biweekly") {
  axis_interval = "day";
} else if (props.interval === "monthly") {
  axis_interval = "day";
} else if (props.interval === "yearly") {
  axis_interval = "month";
} else {
  axis_interval = "month";
}

onMounted(async () => {
  getLakeMeasurements(props.id, props.interval);
});
</script>
<style lang="scss">
.lake-detail-container p {
  color: #fff;
  font-size: 12px;
  text-align: center;
  //margin-right: 20px;
}
.loc-chart-container {
  margin: auto;
  margin-bottom: 20px;
  width: 800px;
  max-width: 95% !important;
  height: 10vw;
}
</style>
