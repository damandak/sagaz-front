<template>
  <div class="main-content lake-view-container">
    <div v-if="lake.loaded" class="lake-main-data">
      <h1 class="section-title">{{ lake.lakedata.name }}</h1>
      <AlertStatus
        :status="lake.lakedata.current_alert_status"
        :marginClass="'specialMargin'"
      />
      <img :src="lake.lakedata.image" class="lake-image" alt="" />
      <div class="lake-general-data">
        <p class="lake-description">{{ lake.lakedata.description }}</p>
        <p>
          <b>{{ $t("lake.general.country") }}: </b>
          {{ lake.lakedata.country }}
        </p>
        <p>
          <b>{{ $t("lake.general.region") }}: </b>
          {{ lake.lakedata.region }}
        </p>
        <p>
          <b>{{ $t("lake.general.latitude") }}: </b>
          {{ lake.lakedata.lat.toFixed(4) }}°
        </p>
        <p>
          <b>{{ $t("lake.general.longitude") }}: </b>
          {{ lake.lakedata.lon.toFixed(4) }}°
        </p>
        <p>
          <b>{{ $t("lake.general.altitude") }}: </b>
          {{ lake.lakedata.altitude }} msnm
        </p>
        <p>
          <b>{{ $t("lake.general.area") }}: </b>
          {{ lake.lakedata.area }} kms2
        </p>
        <p>
          <b>{{ $t("lake.general.volume") }}: </b>
          {{ lake.lakedata.volume }} millones de m3
        </p>
        <p>
          <b>{{ $t("lake.general.stationstatus") }}: </b>
          {{ lake.lakedata.station_status }}
        </p>
      </div>
    </div>
    <!-- Interval Selector -->
    <div class="interval-selector">
      <p>{{ $t("lake.intervals.description") }}:</p>
      <button
        class="interval-button"
        :class="{ active: interval === 'daily' }"
        @click="changeInterval('daily')"
      >
        {{ $t("lake.intervals.day") }}
      </button>
      <button
        class="interval-button"
        :class="{ active: interval === 'weekly' }"
        @click="changeInterval('weekly')"
      >
        {{ $t("lake.intervals.week") }}
      </button>
      <button
        class="interval-button"
        :class="{ active: interval === 'biweekly' }"
        @click="changeInterval('biweekly')"
      >
        {{ $t("lake.intervals.biweek") }}
      </button>
      <button
        class="interval-button"
        :class="{ active: interval === 'monthly' }"
        @click="changeInterval('monthly')"
      >
        {{ $t("lake.intervals.month") }}
      </button>
      <button
        class="interval-button"
        :class="{ active: interval === 'yearly' }"
        @click="changeInterval('yearly')"
      >
        {{ $t("lake.intervals.year") }}
      </button>
      <button
        class="interval-button"
        :class="{ active: interval === 'all' }"
        @click="changeInterval('all')"
      >
        {{ $t("lake.intervals.historic") }}
      </button>
    </div>
    <LakeDetail
      :id="id"
      :interval="interval"
      :key="changeableKey"
      :lake="lake"
    />
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { getLake, lake } from "@/components/composables/getLake.js";
import LakeDetail from "@/components/Lakes/LakeDetail.vue";
import AlertStatus from "@/components/Lakes/AlertStatus.vue";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
// interval as computed property with initial value "biweekly"
const interval = ref("biweekly");
const changeableKey = ref(0);

// function to change interval
function changeInterval(newInterval) {
  interval.value = newInterval;
  changeableKey.value += 1;
}

onMounted(() => {
  getLake(id);
});
</script>

<style scoped lang="scss">
.lake-view-container {
  background-image: linear-gradient(-45deg, #0a5867eb, #070707f1 95%);
  .section-title {
    margin-bottom: 10px;
  }
}
.lake-image {
  margin: auto;
  width: 90%;
  max-width: 650px;
  object-fit: cover;
  border: solid 2px white;
  border-radius: 10px;
}
.lake-general-data {
  width: 100%;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  font-size: 15px;
  line-height: 14px;
}
.lake-description {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: auto auto 20px auto;
  width: 90%;
  max-width: 650px;
}
.interval-selector {
  margin-bottom: 15px;
  p {
    margin: auto;
    font-weight: 700;
  }
  .interval-button {
    padding: 5px;
    border: 2px solid white;
    margin: 2px;
    font-family: inherit;
    font-size: 12px;
    background-color: white;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.699);
    }
  }
  .interval-button.active {
    background-color: rgba(255, 255, 255, 0.699);
  }
}
</style>
