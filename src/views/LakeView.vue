<template>
  <div class="main-content">
    <div v-if="lake.loaded" class="lake-main-data">
      <h1>{{ lake.lakedata.name }}</h1>
      <div class="lake-image"></div>
      <div class="lake-general-data">
        <p><b>País: </b>{{ lake.lakedata.country }}</p>
        <p><b>Región: </b>{{ lake.lakedata.region }}</p>
        <p><b>Latitud: </b>{{ lake.lakedata.lat }}°</p>
        <p><b>Longitud: </b>{{ lake.lakedata.lon }}°</p>
        <p><b>Altitud: </b>{{ lake.lakedata.altitude }} msnm</p>
        <p><b>Área: </b>{{ lake.lakedata.area }} mts2</p>
        <p><b>Volumen: </b>{{ lake.lakedata.volume }} m3</p>
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
let interval = "week";

const image_url = computed(() => {
  return `url('${lake.lakedata.image}')`;
});

onMounted(() => {
  getLake(id);
});
</script>

<style>
.main-content {
  position: absolute;
  width: 100%;
  padding-top: 60px;
  overflow-y: visible;
  overflow-x: hidden;
  height: calc(100vh - 60px);
  background-size: cover;
  background-position: center;
  margin: 0;
  text-align: center;
}
.lake-image {
  width: 100%;
  max-width: 800px;
  margin: auto;
  height: 50vh;
  min-height: 300px;
  background-image: v-bind(image_url);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
