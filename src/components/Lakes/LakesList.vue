<template>
  <div class="lakes-list">
    <h1 class="section-title">Lagos</h1>
    <table v-if="lakesdata.lakes" class="sagaz-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>País</th>
          <th>Región</th>
          <th>Latitud</th>
          <th>Longitud</th>
          <th>Altitud</th>
          <th>Área</th>
          <th>Volumen</th>
          <th>Estado Estación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lake in lakesdata.lakes" :key="lake.id">
          <th>
            <router-link
              v-if="lake.id"
              :to="{ name: 'Lake', params: { id: lake.id } }"
            >
              {{ lake.name }}
            </router-link>
          </th>
          <td>{{ lake.country }}</td>
          <td>{{ lake.region }}</td>
          <td>{{ lake.lat.toFixed(4) }}°</td>
          <td>{{ lake.lon.toFixed(4) }}°</td>
          <td>{{ lake.altitude }} msnm</td>
          <td>{{ lake.area }} kms<span class="sup">2</span></td>
          <td>{{ lake.volume }} millones de m<span class="sup">3</span></td>
          <td>{{ lake.station_status }}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
    <div v-if="lakesdata.lakes" class="lakes-cards-group">
      <div v-for="lake in lakesdata.lakes" :key="lake.id" class="lake-card">
        <h3>
          <router-link
            v-if="lake.id"
            :to="{ name: 'Lake', params: { id: lake.id } }"
          >
            {{ lake.name }}
          </router-link>
        </h3>
        <p><b>País: </b>{{ lake.country }}</p>
        <p><b>Región: </b>{{ lake.region }}</p>
        <p><b>Latitud: </b>{{ lake.lat.toFixed(4) }}°</p>
        <p><b>Longitud: </b>{{ lake.lon.toFixed(4) }}°</p>
        <p><b>Altitud: </b>{{ lake.altitude }} msnm</p>
        <p><b>Área: </b>{{ lake.area }} kms2</p>
        <p><b>Volumen: </b>{{ lake.volume }} millones de m3</p>
        <p><b>Estado Estación: </b>{{ lake.station_status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  lakesdata: {
    type: Object,
    required: true,
  },
});
</script>

<style>
.lakes-list {
  overflow: auto;
}
@media only screen and (min-width: 1000px) {
  .sagaz-table {
    display: table;
    margin: auto;
    width: 80vw;
    padding: 0 20px 20px 20px;
    border-radius: 10px;
    background-color: #1a1a1a96;
    border-collapse: collapse;
  }
  .sagaz-table thead {
    background-color: var(--primary-color);
    height: 70px;
    vertical-align: middle;
    border-radius: 10px 10px 0 0;
  }
  .sagaz-table tbody tr {
    height: 70px;
    vertical-align: middle;
    border-top: 1px solid #65656596;
  }
  .sagaz-table th:nth-child(1) {
    border-radius: 10px 0px 0px 0px;
  }
  .sagaz-table th:nth-last-child(1) {
    border-radius: 0px 10px 0px 0px;
  }
  .sagaz-table a {
    text-decoration: none;
    color: var(--primary-color-light);
  }
  .sagaz-table a:hover {
    color: var(--primary-color);
    transition: 0.4s ease-out;
  }
  .sup {
    position: relative;
    bottom: 1ex;
    font-size: 80%;
  }
  .lakes-cards-group {
    display: none;
  }
}
@media only screen and (max-width: 1000px) {
  .sagaz-table {
    display: none;
  }
  .section-title {
    position: relative;
    top: -10px;
  }
  .lake-card {
    border-radius: 10px;
    background-color: var(--primary-color-light);
    width: 90vw;
    margin: auto;
    margin-bottom: 15px;
    height: 135px;
  }
  .lake-card a {
    text-decoration: none;
    color: white;
  }
  .lake-card a:hover {
    color: var(--primary-color);
    transition: 0.4s ease-out;
  }
  .lake-card h3 {
    margin: 0;
  }
  .lake-card p {
    font-size: 10px;
    line-height: 10px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
}
</style>
