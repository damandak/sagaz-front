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
    />
    <DataChart
      :chartData="lakemeasurements.alert_status"
      :label="labels"
      :title="title_as"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="unit_as"
      :line_color="line_as"
      :point_color="point_as"
      :chartCSS="chartCSS"
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
const title_as = "Estado de Alerta";

const unit_wl = "metros - mts";
const unit_wt = "grados Celsius - °C";
const unit_ap = "hectopascal - hPa";
const unit_at = "grados Celsius - °C";
const unit_pp = "milímetros - mm";
const unit_as = "";

const line_wl = "rgba(45, 108, 196, 1)";
const line_wt = "rgba(45, 176, 196, 1)";
const line_ap = "rgba(255, 99, 132, 1)";
const line_at = "rgba(123, 45, 196, 1)";
const line_pp = "rgba(148, 196, 45, 1)";
const line_as = "rgba(255, 0, 0, 1)";

const point_wl = "rgba(45, 108, 196, 0.6)";
const point_wt = "rgba(45, 176, 196, 0.5)";
const point_ap = "rgba(255, 99, 132, 1)";
const point_at = "rgba(123, 45, 196, 0.5)";
const point_pp = "rgba(148, 196, 45, 0.5)";
const point_as = "rgba(255, 0, 0, 0.5)";

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
