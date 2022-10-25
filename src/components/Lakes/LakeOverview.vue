<template>
  <div class="loc-wrapper" @click="$emit('close-loc')">
    <transition name="loc" appear @click.stop="">
      <div
        v-if="lake.lakedata.id === id"
        class="lake-overview-container algolargo"
      >
        <button class="loc-close" @click="$emit('close-loc')">
          <Icon :icon="icons.closeSquareFill" />
        </button>
        <h1 class="loc-section-title">{{ lake.lakedata.name }}</h1>
        <div class="col col-left">
          <div class="lake-main-data">
            <img :src="lake.lakedata.image" class="loc-lake-image" alt="" />
            <div class="loc-general-data">
              <p><b>País: </b>{{ lake.lakedata.country }}</p>
              <p><b>Región: </b>{{ lake.lakedata.region }}</p>
              <p><b>Latitud: </b>{{ lake.lakedata.lat.toFixed(4) }}°</p>
              <p><b>Longitud: </b>{{ lake.lakedata.lon.toFixed(4) }}°</p>
              <p><b>Altitud: </b>{{ lake.lakedata.altitude }} msnm</p>
              <p><b>Área: </b>{{ lake.lakedata.area }} kms2</p>
              <p><b>Volumen: </b>{{ lake.lakedata.volume }} millones de m3</p>
              <p><b>Estado Estación: </b>{{ lake.lakedata.station_status }}</p>
            </div>
            <router-link
              class="loc-more"
              :to="{ name: 'Lake', params: { id: lake.lakedata.id } }"
            >
              Más Info
            </router-link>
          </div>
        </div>
        <div class="col col-right">
          <LakeOverviewDetail :id="id" :interval="interval" />
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
import {
  onMounted,
  computed,
  onDeactivated,
  onUnmounted,
  onUpdated,
} from "vue";
import { getLake, lake } from "@/components/composables/getLake.js";
import LakeOverviewDetailVues from "./LakeOverviewDetail.vue";
import { useRoute } from "vue-router";
import LakeOverviewDetail from "./LakeOverviewDetail.vue";
import { Icon } from "@iconify/vue";
import closeSquareFill from "@iconify-icons/eva/close-square-fill";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});
let interval = "biweekly";
const icons = {
  closeSquareFill,
};

onMounted(() => {
  getLake(props.id);
});
</script>
<style lang="scss">
.loc-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  .lake-overview-container {
    background-image: linear-gradient(
      -45deg,
      rgb(0 180 215 / 92%),
      #070707f1 95%
    );
    position: absolute;
    z-index: 50;
    width: 85%;
    margin-top: 60px;
    height: 85%;
    text-align: left;
    top: 20px;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: 20px;
    border: 5px solid white;
    overflow: auto;
    // Lake Overview Container close
    .loc-close {
      position: absolute;
      top: 8px;
      right: 10px;
      padding: 0px;
      font-size: 50px;
      line-height: 50px;
      background: none;
      border: none;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.85);
      transition: all 0.3s ease-in-out;
      transform: scale(1.2, 1);
    }
    .loc-close:hover {
      color: rgba(255, 255, 255, 0.4);
    }
    .loc-section-title {
      margin-bottom: 10px;
      font-size: 32px;
      margin-top: 10px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    .col {
      display: inline-block;
    }
    .col-left {
      margin-left: 5%;
      width: 31%;
      float: left;
      .loc-more {
        color: #fff;
        cursor: pointer;
        background-color: var(--secondary-color);
        text-decoration: none;
        padding: 7px;
        border-radius: 5px;
        margin-top: 5px;
        width: 100px;
      }
      .loc-more:hover {
        background-color: var(--secondary-color-light);
      }
    }
    .col-right {
      min-width: 370px;
      float: right;
      width: 55%;
      padding-right: 50px;
      padding-left: 50px;
    }
  }
}
.loc-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.loc-lake-image {
  width: calc(100% - 4px);
  border: solid 2px white;
  border-radius: 10px;
}
.loc-general-data {
  //padding-top: 10px;
  font-size: 15px;
  line-height: 14px;
}
// Transitions wrapper
.locwrap-enter-from,
.locwrap-leave-to {
  opacity: 0;
  //z-index: 10;
}
.locwrap-enter-to,
.locwrap-leave-from {
  opacity: 1;
}
.locwrap-enter-active {
  transition: all 1s ease-in-out;
}
.locwrap-leave-active {
  transition: all 1s ease-in-out;
}
// Transitions loc
.loc-enter-from,
.loc-leave-to {
  transform: translateX(100%);
  opacity: 0;
  //z-index: 10;
}
.loc-enter-to,
.loc-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.loc-enter-active {
  transition: all 1s ease-in-out;
}
.loc-leave-active {
  transition: all 1s ease-in-out;
}

@media screen and (max-width: 1330px) {
  .loc-wrapper {
    .lake-overview-container {
      width: 90% !important;
      padding: 0;
      margin-top: 30px;
      .loc-section-title {
        margin-left: auto !important;
        margin-bottom: 20px;
        margin-right: auto;
        text-align: center;
      }
      .col {
        display: block;
      }
      .col-left {
        width: 80%;
        margin: auto;
        float: none;
        .lake-main-data {
          text-align: center;
          height: auto;
          .loc-general-data {
            margin-bottom: 30px;
          }
        }
        margin-bottom: 30px;
      }
      .col-right {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        padding: 0;
        float: none;
      }
    }
    .loc-lake-image {
      width: 90% !important;
      max-width: 500px !important;
      margin: auto;
    }
    .lake-general-data {
      text-align: center;
    }
  }
}
</style>
