<template>
  <div
    v-if="lakemeasurements.nodata === false && lakemeasurements.loaded"
    class="lake-detail-container"
  >
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
      :minLimit="minLimit_wl"
      :maxLimit="maxLimit_wl"
    />
    <DataChart
      :chartData="lakemeasurements.water_temperature"
      :label="labels"
      :title="title_wt"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="unit_wt"
      :line_color="line_wt"
      :point_color="point_wt"
      :chartCSS="chartCSS"
      :minLimit="minLimit_wt"
      :maxLimit="maxLimit_wt"
    />
    <DataChart
      :chartData="lakemeasurements.atmospheric_pressure"
      :label="labels"
      :title="title_ap"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="unit_ap"
      :line_color="line_ap"
      :point_color="point_ap"
      :chartCSS="chartCSS"
      :minLimit="minLimit_ap"
      :maxLimit="maxLimit_ap"
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
      :minLimit="minLimit_at"
      :maxLimit="maxLimit_at"
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
      :minLimit="minLimit_pp"
      :maxLimit="maxLimit_pp"
    />
  </div>
  <div v-else class="lake-detail-container">
    <h3>No hay información para mostrar de la estación</h3>
  </div>
</template>
<script setup>
import { onActivated, onMounted } from "vue";
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

const chartCSS = "chart-container";

const title_wl = "Nivel de agua";
const title_wt = "Temperatura del agua";
const title_ap = "Presión atmosférica";
const title_at = "Temperatura atmosférica";
const title_pp = "Precipitación";

const unit_wl = "metros - mts";
const unit_wt = "grados Celsius - °C";
const unit_ap = "hectopascal - hPa";
const unit_at = "grados Celsius - °C";
const unit_pp = "milímetros - mm";

const line_wl = "rgba(45, 108, 196, 1)";
const line_wt = "rgba(45, 176, 196, 1)";
const line_ap = "rgba(255, 99, 132, 1)";
const line_at = "rgba(123, 45, 196, 1)";
const line_pp = "rgba(148, 196, 45, 1)";

const point_wl = "rgba(45, 108, 196, 0.6)";
const point_wt = "rgba(45, 176, 196, 0.5)";
const point_ap = "rgba(255, 99, 132, 1)";
const point_at = "rgba(123, 45, 196, 0.5)";
const point_pp = "rgba(148, 196, 45, 0.5)";

const minLimit_wl = -2;
const minLimit_wt = -5;
const minLimit_ap = 700;
const minLimit_at = -30;
const minLimit_pp = 0;

const maxLimit_wl = 150;
const maxLimit_wt = 15;
const maxLimit_ap = 1100;
const maxLimit_at = 40;
const maxLimit_pp = 100;

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
  await getLakeMeasurements(props.id, props.interval);
});

onActivated(async () => {
  await getLakeMeasurements(props.id, props.interval);
});
</script>
<style></style>
