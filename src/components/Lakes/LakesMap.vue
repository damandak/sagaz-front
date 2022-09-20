<template>
  <div class="lakes-map">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :crs="crs"
      :center="center"
      :options="{
        attributionControl: false,
        zoomControl: false,
        zoomSnap: 0,
        zoomDelta: 1,
      }"
      :max-bounds="maxBounds"
      :min-zoom="6"
      :max-zoom="9"
      :max-bounds-viscosity="1"
      @ready="onMapReady"
    >
      <l-tile-layer
        :url="tiles_url"
        layer-type="base"
        name="sagaz"
        :bounds="maxBounds"
        :min-zoom="6"
        :max-zoom="9"
      />
      <l-control-zoom position="bottomright"></l-control-zoom>
      <l-marker
        v-for="lake in lakesdata.lakes"
        :key="lake.id"
        :lat-lng="[lake.lat, lake.lon]"
      >
        <l-icon
          v-if="lake.station_status == 'Verde'"
          :icon-url="iconUrlGreen"
          :icon-size="iconSize"
        />
        <l-icon
          v-else-if="lake.station_status == 'Amarillo'"
          :icon-url="iconUrlYellow"
          :icon-size="iconSize"
        />
        <l-icon
          v-else-if="lake.station_status == 'Rojo'"
          :icon-url="iconUrlRed"
          :icon-size="iconSize"
        />
        <l-icon v-else :icon-url="iconUrlGray" :icon-size="iconSize" />
        <l-popup>
          <button
            class="map-button"
            v-if="lake.id"
            @click="changeLake(lake.id)"
          >
            <h3 class="popup-title">{{ lake.name }}</h3>
            <div
              class="popup-image"
              style="background-image: url({{ lake.image }});"
            ></div>
            <!--<img class="p-img" :src="lake.image" alt="" />-->
          </button>
        </l-popup>
      </l-marker>
    </l-map>
    <transition name="locwrap" appear>
      <LakeOverview
        v-if="lake_id > 0"
        :id="lake_id"
        @close-loc="closeLoc()"
        :lakeReady="lakeReady"
      />
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted } from "vue";
import {
  LMap,
  LMarker,
  LImageOverlay,
  LPopup,
  LIcon,
  LControlZoom,
  LTileLayer,
} from "@vue-leaflet/vue-leaflet";

import "leaflet/dist/leaflet.css";
import { CRS } from "leaflet/dist/leaflet-src.esm";
import LakeOverview from "@/components/Lakes/LakeOverview.vue";
import { process } from "ipaddr.js";

var lake_id = ref(0);
var map = ref(map);
var tiles_url = process.env.BASE_URL + "tiles/{z}/{x}/{y}.png";

const props = defineProps({
  lakesdata: {
    type: Object,
    required: true,
  },
});

var zoom = ref(6);

const center = computed(() => {
  const center = [-51.24, -72.5]; //[-51.24, -72.5];
  return center;
});

const maxBounds = computed(() => [
  [-45.98, -79.1],
  [-56.2, -62.5],
]);

var fitBounds = [window.innerWidth, window.innerHeight];
var crs = CRS.EPSG3857;
const iconWidth = 30;
const iconHeight = 30;
var markers_coords = [];

function closeLoc(palabra) {
  console.log(palabra);
  lake_id.value = 0;
}

const iconUrlGreen = computed({
  get() {
    return require("@/assets/marker.png");
  },
});
const iconUrlYellow = computed({
  get() {
    return require("@/assets/marker_y.png");
  },
});
const iconUrlRed = computed({
  get() {
    return require("@/assets/marker_r.png");
  },
});
const iconUrlGray = computed({
  get() {
    return require("@/assets/marker_g.png");
  },
});
const iconSize = computed({
  get() {
    return [iconWidth, iconHeight];
  },
});

function changeLake(id) {
  if (lake_id.value == 0) {
    lake_id.value = id;
    map.value.leafletObject.closePopup();
  }
}

function onMapReady() {
  map.value.leafletObject.fitBounds(maxBounds.value);
  map.value.leafletObject.setMinZoom(map.value.leafletObject.getZoom());
}

onMounted(() => {
  window.addEventListener("resize", resizeHandler);
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
});

function resizeHandler() {
  map.value.leafletObject.fitBounds(maxBounds.value);
  map.value.leafletObject.setMinZoom(map.value.leafletObject.getZoom());
}
</script>

<style lang="scss">
#mapid {
  height: 100%;
}
.lakes-map {
  width: 100%;
  height: 100%;
  max-height: 1080px;
  max-width: 2560px; /* Reevaluate if container will cover full screen, with transparent navbar. */
  margin: auto;
  position: relative;
  top: 0px;
  align-items: center;
  overflow: hidden;
}
.leaflet-bottom {
  bottom: 20px;
  right: 20px;
  z-index: 45;
}
.leaflet-image-layer {
  opacity: 0.93;
}
.leaflet-pane {
  z-index: 20;
}
.leaflet-container {
  background: #050a0e;
  //background: red;
}
.leaflet-popup-content-wrapper {
  background: #0089a5;
  border: 2px solid white;
  //height: 100px;
}
.leaflet-popup-content {
  margin: 0px 24px 0px 20px;
  line-height: 0.2;
}
.leaflet-popup-close-button {
  color: white !important;
}
.popup-title {
  line-height: 0;
}
img.p-img {
  width: 120px;
  height: 80px;
  object-fit: cover;
}
.map-button {
  padding: 0px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  z-index: 40;
}
.map-button:hover {
  cursor: pointer;
}
</style>
