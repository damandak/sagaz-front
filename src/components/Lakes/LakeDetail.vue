<template>
  <div v-if="lakemeasurements.interval != interval" class="loading-charts">
    <h3>{{ $t("lake.detail.loading") }}</h3>
    <div class="moonloader-container">
      <MoonLoader :color="loadingColor"></MoonLoader>
    </div>
  </div>
  <div
    v-else-if="lakemeasurements.nodata === false && lakemeasurements.loaded"
    class="lake-detail-container"
  >
    <DataChart
      :chartData="lakemeasurements.water_level"
      :label="labels"
      :title="$t('lake.graphlabels.waterlevel')"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="$t('lake.graphlabels.meters')"
      :line_color="line_wl"
      :point_color="point_wl"
      :chartCSS="chartCSS"
      :minLimit="lakemeasurements.water_level_limits.min"
      :maxLimit="lakemeasurements.water_level_limits.max"
    />
    <DataChart
      :chartData="lakemeasurements.water_temperature"
      :label="labels"
      :title="$t('lake.graphlabels.watertemperature')"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="$t('lake.graphlabels.celsius')"
      :line_color="line_wt"
      :point_color="point_wt"
      :chartCSS="chartCSS"
      :minLimit="lakemeasurements.water_temperature_limits.min"
      :maxLimit="lakemeasurements.water_temperature_limits.max"
    />
    <DataChart
      :chartData="lakemeasurements.atmospheric_pressure"
      :label="labels"
      :title="$t('lake.graphlabels.airpressure')"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="$t('lake.graphlabels.hectopascal')"
      :line_color="line_ap"
      :point_color="point_ap"
      :chartCSS="chartCSS"
      :minLimit="lakemeasurements.atmospheric_pressure_limits.min"
      :maxLimit="lakemeasurements.atmospheric_pressure_limits.max"
    />
    <DataChart
      :chartData="lakemeasurements.atmospheric_temperature"
      :label="labels"
      :title="$t('lake.graphlabels.airtemperature')"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="$t('lake.graphlabels.celsius')"
      :line_color="line_at"
      :point_color="point_at"
      :chartCSS="chartCSS"
      :minLimit="lakemeasurements.atmospheric_temperature_limits.min"
      :maxLimit="lakemeasurements.atmospheric_temperature_limits.max"
    />
    <DataChart
      :chartData="lakemeasurements.precipitation"
      :label="labels"
      :title="$t('lake.graphlabels.precipitation')"
      :start_date="lakemeasurements.start_date"
      :end_date="lakemeasurements.end_date"
      :interval="axis_interval"
      :unit="$t('lake.graphlabels.milimeters')"
      :line_color="line_pp"
      :point_color="point_pp"
      :chartCSS="chartCSS"
      :minLimit="lakemeasurements.precipitation_limits.min"
      :maxLimit="lakemeasurements.precipitation_limits.max"
      :chartType="'bar'"
    />
  </div>
  <div v-else class="lake-detail-container">
    <h3>{{ $t("lake.detail.noinfo") }}</h3>
  </div>
</template>
<script setup>
import { onActivated, onMounted, ref } from "vue";
import DataChart from "./DataChart.vue";
import MoonLoader from "vue-spinner/src/MoonLoader.vue";
import {
  getLakeMeasurements,
  lakemeasurements,
} from "../composables/getLakeMeasurements";
import moment from "moment";
import { lake } from "../composables/getLake";
import { useRoute } from "vue-router";

import i18n from "@/i18n";

const loadingColor = "#52cff8";

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

const title_wl = ref(i18n.global.t("lake.graphlabels.waterlevel"));
const title_wt = ref(i18n.global.t("lake.graphlabels.watertemperature"));
const title_ap = ref(i18n.global.t("lake.graphlabels.airpressure"));
const title_at = ref(i18n.global.t("lake.graphlabels.airtemperature"));
const title_pp = ref(i18n.global.t("lake.graphlabels.precipitation"));

const unit_wl = ref(i18n.global.t("lake.graphlabels.meters"));
const unit_wt = ref(i18n.global.t("lake.graphlabels.celsius"));
const unit_ap = ref(i18n.global.t("lake.graphlabels.hectopascal"));
const unit_at = ref(i18n.global.t("lake.graphlabels.celsius"));
const unit_pp = ref(i18n.global.t("lake.graphlabels.milimeters"));

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
  const lake_id = useRoute().params.id;
  await getLakeMeasurements(lake_id, props.interval);
});

onActivated(async () => {
  const lake_id = useRoute().params.id;
  await getLakeMeasurements(lake_id, props.interval);
});
</script>
<style scoped lang="scss">
.loading-charts {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 20px;
  .moonloader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    width: 100%;
  }
}
</style>
