<template>
  <div class="main-content lake-view-container">
    <div v-if="lake.loaded" class="lake-main-data">
      <h1 class="section-title">{{ lake.lakedata.name }}</h1>
      <img :src="lake.lakedata.image" class="lake-image" alt="" />
      <div class="lake-general-data">
        <p><b>País: </b>{{ lake.lakedata.country }}</p>
        <p><b>Región: </b>{{ lake.lakedata.region }}</p>
        <p><b>Latitud: </b>{{ lake.lakedata.lat.toFixed(4) }}°</p>
        <p><b>Longitud: </b>{{ lake.lakedata.lon.toFixed(4) }}°</p>
        <p><b>Altitud: </b>{{ lake.lakedata.altitude }} msnm</p>
        <p><b>Área: </b>{{ lake.lakedata.area }} kms2</p>
        <p><b>Volumen: </b>{{ lake.lakedata.volume }} millones de m3</p>
        <p><b>Estado Estación: </b>{{ lake.lakedata.station_status }}</p>
      </div>
    </div>
    <h2>Título de series de tiempo</h2>
    <LakeDetail :id="id" :interval="interval" />
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { getLake, lake } from "@/components/composables/getLake.js";
import LakeDetail from "@/components/Lakes/LakeDetail.vue";
import { useRoute } from "vue-router";

const id = useRoute().params.id;
let interval = "biweekly";

onMounted(() => {
  getLake(id);
});
</script>

<style>
.lake-view-container {
  background-image: linear-gradient(
    -45deg,
    rgb(0 180 215 / 92%),
    #070707f1 95%
  );
}
.lake-image {
  margin: auto;
  height: 70vh;
  max-height: 600px;
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
</style>
