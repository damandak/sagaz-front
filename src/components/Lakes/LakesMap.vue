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
      :min-zoom="6"
      :max-zoom="9"
      :max-bounds="maxBounds"
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
        @click="
          openPopupFunction(lake);
          $emit('refreshLakesData');
        "
      >
        <l-icon :icon-size="iconSize">
          <div class="icon-container">
            <LakeIcon :alertStatus="lake.current_alert_status" />
            <EmitSignal
              v-if="
                String(lake.current_alert_status)
                  .toLowerCase()
                  .startsWith('verde')
              "
              :color="'green'"
              :stationStatus="lake.station_status"
            />
            <EmitSignal
              v-else-if="
                String(lake.current_alert_status)
                  .toLowerCase()
                  .startsWith('amarillo')
              "
              :color="'yellow'"
              :stationStatus="lake.station_status"
            />
            <EmitSignal
              v-else-if="
                String(lake.current_alert_status)
                  .toLowerCase()
                  .startsWith('rojo')
              "
              :color="'red'"
              :stationStatus="lake.station_status"
            />
          </div>
        </l-icon>
        <l-popup>
          <button
            class="map-button"
            v-if="lake.id"
            @click="changeLake(lake.id)"
          >
            <h3 class="popup-title">{{ lake.name }}</h3>
            <p class="popup-location-text">
              Ubicación: {{ lake.region }} - {{ lake.country }}
            </p>
            <img class="p-img" :src="lake.image" alt="" />
            <div class="popup-bottom-section">
              <img
                v-if="
                  String(lake.current_alert_status)
                    .toLowerCase()
                    .startsWith('verde')
                "
                class="popup-lake-icon"
                :src="iconUrlGreen"
                alt=""
              />
              <img
                v-else-if="
                  String(lake.current_alert_status)
                    .toLowerCase()
                    .startsWith('amarillo')
                "
                class="popup-lake-icon"
                :src="iconUrlYellow"
                alt=""
              />
              <img
                v-else-if="
                  String(lake.current_alert_status)
                    .toLowerCase()
                    .startsWith('rojo')
                "
                class="popup-lake-icon"
                :src="iconUrlRed"
                alt=""
              />
              <img v-else class="popup-lake-icon" :src="iconUrlGray" alt="" />
              <div>
                <p class="popup-text">
                  {{ $t("lake.general.alertlevel") }}:
                  {{ lake.current_alert_status }}
                </p>
                <p class="popup-text-small">
                  {{ $t("lake.general.updated") }}:
                  {{ moment(lake.updated_at).format("HH:mm, DD-MM-YYYY") }}
                </p>
              </div>
            </div>
            <div class="popup-moreinfo">{{ $t("general.moreinfo") }}</div>
          </button>
        </l-popup>
      </l-marker>
    </l-map>
    <transition name="locwrap" appear>
      <LakeOverview v-if="lake_id > 0" :id="lake_id" @close-loc="closeLoc()" />
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted, onMounted, nextTick } from "vue";
import { onBeforeRouteLeave } from "vue-router";
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
import moment from "moment";

import LakeIcon from "@/components/Lakes/LakeIcon.vue";
import EmitSignal from "@/components/Lakes/EmitSignal.vue";

var lake_id = ref(0);
var map = ref(map);
var tiles_url = process.env.BASE_URL + "tiles/{z}/{x}/{y}.jpg";

const props = defineProps({
  lakesdata: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["refreshLakesData"]);
var zoom = ref(6);

const center = computed(() => {
  const center = [-51.24, -72.5]; //[-51.24, -72.5];
  return center;
});

const maxBounds = computed(() => [
  [-43.08, -79.1],
  [-56.2, -62.5],
]);
// define extreme bounds a little bit to the north of maxBounds
const extremeBounds = computed(() => [
  [-40.08, -79.1],
  [-56.2, -62.5],
]);

var fitBounds = [window.innerWidth, window.innerHeight];
var crs = CRS.EPSG3857;
const iconWidth = 40;
const iconHeight = 40;
var markers_coords = [];

function closeLoc(palabra) {
  lake_id.value = 0;
}

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

function openPopupFunction(poppedLake) {
  // if poppedLake is northern than south ice cap
  if (poppedLake.lat > -49) {
    map.value.leafletObject.setMaxBounds(extremeBounds.value);
    map.value.leafletObject.panTo([poppedLake.lat, poppedLake.lon]);
  }
}
function onMapReady() {
  map.value.leafletObject.fitBounds(maxBounds.value);
  map.value.leafletObject.setMinZoom(map.value.leafletObject.getZoom());
  map.value.leafletObject.on("popupclose", function () {
    map.value.leafletObject.setMaxBounds(maxBounds.value);
  });
  map.value.leafletObject.on("layeradd", function () {
    addGreenParentClass();
  });

  // Create a MutationObserver to observe changes in the DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
        addGreenParentClass();
      }
    });
  });

  // Observe the container element for the markers
  const markerPane = document.querySelector(".leaflet-marker-pane");
  if (markerPane) {
    observer.observe(markerPane, { childList: true });
  }
}

onMounted(() => {
  window.addEventListener("resize", resizeHandler);
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeHandler);
});

function addGreenParentClass() {
  nextTick(() => {
    const leafletMarkerIcons = document.querySelectorAll(
      ".leaflet-marker-icon"
    );
    leafletMarkerIcons.forEach((markerIcon) => {
      if (markerIcon.querySelector(".green")) {
        console.log("green-parent");
        markerIcon.classList.add("green-parent");
      }
    });
  });
}

function resizeHandler() {
  map.value.leafletObject.fitBounds(maxBounds.value);
  map.value.leafletObject.setMinZoom(map.value.leafletObject.getZoom());
}

const iconUrlGreen = computed({
  get() {
    return require("@/assets/marker_gr.png");
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

onBeforeRouteLeave(() => {
  lake_id.value = 0;
});
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
  .icon-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
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
  background: #010204;
  //background: red;
}
.leaflet-popup-content-wrapper {
  background: white;
  border: 3px solid var(--primary-color);
  //height: 100px;
}
.leaflet-popup-tip-container {
  margin-top: -3px !important;
  .leaflet-popup-tip {
    background-color: white;
    border-bottom: 3px solid var(--primary-color);
    border-right: 3px solid var(--primary-color);
  }
}
.leaflet-popup-close-button {
  display: none;
}
.leaflet-popup-content {
  margin: 0;
  line-height: 0.2;
}
.leaflet-popup-close-button {
  color: white !important;
}
.popup-title {
  margin: 8px 0 2px 0;
}
img.p-img {
  width: 160px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
}
.leaflet-popup:hover {
  cursor: pointer;
  .map-button {
    //background-color: var(--primary-color-light);
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  .popup-moreinfo {
    background-color: var(--primary-color-light);
    transition: all 0.2s ease-in-out;
  }
}
.map-button {
  padding: 0px 10px 0 10px;
  background-color: white;
  color: var(--primary-color);
  border: none;
  z-index: 40;
  width: 100%;
  border-radius: 10px;
  opacity: 1;
  .popup-bottom-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2px;
    .popup-lake-icon {
      width: 24px;
      height: 24px;
    }
    .popup-text {
      margin: 0;
      font-size: 10.5px;
      text-align: left;
    }
    .popup-text-small {
      font-size: 9px;
      margin: 2px 0 0 0;
      text-align: left;
    }
  }

  .popup-location-text {
    margin-top: 0px;
    margin-bottom: 4px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .popup-moreinfo {
    color: #fff;
    background-color: var(--primary-color);
    text-decoration: none;
    padding: 4px 0px 4px 0px;
    border-radius: 15px;
    margin: 5px auto;
    width: 80px;
  }
}
.map-button:hover {
  cursor: pointer;
}
@media (max-width: 768px) {
  .leaflet-control-zoom {
    display: none;
  }
}
.leaflet-marker-icon {
  z-index: 30 !important;
}
.leaflet-marker-icon {
  &.green-parent {
    z-index: 50 !important;
  }
}
</style>
