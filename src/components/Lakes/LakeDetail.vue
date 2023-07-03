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
      :start_date="datesAndInterval.start_date"
      :end_date="end_date"
      :interval="datesAndInterval.axis_interval"
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
      :start_date="datesAndInterval.start_date"
      :end_date="end_date"
      :interval="datesAndInterval.axis_interval"
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
      :start_date="datesAndInterval.start_date"
      :end_date="end_date"
      :interval="datesAndInterval.axis_interval"
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
      :start_date="datesAndInterval.start_date"
      :end_date="end_date"
      :interval="datesAndInterval.axis_interval"
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
      :start_date="datesAndInterval.start_date"
      :end_date="end_date"
      :interval="datesAndInterval.axis_interval"
      :unit="$t('lake.graphlabels.milimeters')"
      :line_color="line_pp"
      :point_color="point_pp"
      :chartCSS="chartCSS"
      :minLimit="lakemeasurements.precipitation_limits.min"
      :maxLimit="lakemeasurements.precipitation_limits.max"
      :chartType="'bar'"
    />
    <button class="download-csv-button" @click="() => downloadCSV()">
      {{ $t("lake.detail.downloadcsv") }}
    </button>
  </div>
  <div v-else class="lake-detail-container">
    <h3 v-if="lakemeasurements.last_data_date">
      {{ $t("lake.detail.nodatasince") }}
      {{ lakemeasurements.last_data_date }}
    </h3>
    <h3 v-else>
      {{ $t("lake.detail.noinfo") }}
    </h3>
  </div>
</template>
<script setup>
import axios from "axios";
import { onActivated, onMounted, ref, reactive } from "vue";
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
  lake: {
    type: Object,
    required: true,
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
let start_date = null;
let end_date = moment().format("YYYY-MM-DD");

const lake_id_url = useRoute().params.id;

let datesAndInterval = reactive({
  start_date: null,
  axis_interval: "day",
});

onMounted(async () => {
  const lake_id = useRoute().params.id;
  await getLakeMeasurements(
    lake_id,
    props.interval,
    setAxisIntervalAndStartDate
  );
});

onActivated(async () => {
  const lake_id = useRoute().params.id;
  await getLakeMeasurements(
    lake_id,
    props.interval,
    setAxisIntervalAndStartDate
  );
});

function setAxisIntervalAndStartDate() {
  if (props.interval === "daily") {
    datesAndInterval.axis_interval = "hour";
    datesAndInterval.start_date = moment()
      .subtract(1, "day")
      .format("YYYY-MM-DD");
  } else if (props.interval === "weekly") {
    datesAndInterval.axis_interval = "day";
    datesAndInterval.start_date = moment()
      .subtract(1, "week")
      .format("YYYY-MM-DD");
  } else if (props.interval === "biweekly") {
    datesAndInterval.axis_interval = "day";
    datesAndInterval.start_date = moment()
      .subtract(2, "week")
      .format("YYYY-MM-DD");
  } else if (props.interval === "monthly") {
    datesAndInterval.axis_interval = "day";
    datesAndInterval.start_date = moment()
      .subtract(1, "month")
      .format("YYYY-MM-DD");
  } else if (props.interval === "yearly") {
    datesAndInterval.axis_interval = "month";
    datesAndInterval.start_date = moment()
      .subtract(1, "year")
      .format("YYYY-MM-DD");
  } else {
    datesAndInterval.axis_interval = "month";
    datesAndInterval.start_date = lakemeasurements.start_date;
  }
}
const route = useRoute(); // Store the reactive object in a variable
const lake_id = route.params.id; // Now it's safe to access the properties

const downloadCSV = async () => {
  try {
    var apiUrl = "";
    var apiKey = "";
    if (process.env.NODE_ENV === "d") {
      apiUrl = "http://localhost:8000/api/lakemeasurements/";
      apiKey = "4hJb3MIV.T7rL0Q4w4or5dnfr9qvRNX0bG0tdqoVS";
    } else {
      apiUrl = "https://www.sagaz.org/api/lakemeasurements/";
      apiKey = process.env.VUE_APP_API_KEY;
    }
    const response = await axios.get(
      apiUrl + lake_id + "/" + props.interval + "/export/",
      {
        responseType: "blob",
      }
    );
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "data.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Failed to download CSV:", error);
  }
};
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
.download-csv-button {
  display: inline-block;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  background-color: var(--primary-color);
  text-decoration: none;
  border-radius: 25px;
  border: 3px solid white;
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 30px;
  padding: 10px 22px 10px 22px;
  font-size: 1.2rem;
  text-align: center;
  &:hover {
    background-color: var(--primary-color-light);
  }
}
</style>
