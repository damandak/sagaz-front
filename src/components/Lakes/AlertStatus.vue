<template>
  <div class="alert-status-container" :class="marginClass">
    <img
      class="alert-status-circle alert-status-circle-green"
      v-if="String(status).toLowerCase().startsWith('verde')"
      :src="iconUrlGreen"
      alt=""
    />
    <img
      class="alert-status-circle alert-status-circle-yellow"
      v-else-if="String(status).toLowerCase().startsWith('amarillo')"
    />
    <img
      class="alert-status-circle alert-status-circle-red"
      v-else-if="String(status).toLowerCase().startsWith('rojo')"
    />
    <img class="alert-status-circle alert-status-circle-gray" v-else />
    <div class="alert-status-text">{{ status }}</div>
  </div>
</template>
<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  marginClass: {
    type: String,
    required: false,
  },
});

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
</script>
<style lang="scss">
.alert-status-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 200px;
  padding-top: 1px;
  padding-bottom: 2px;
  padding-left: 5px;
  color: #fff;
  font-size: 15px;
  line-height: 14px;
  border-radius: 20px;
  border: 2px solid white;
  height: 30px;
  .alert-status-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .alert-status-circle-green {
    background-color: #00cc95;
  }
  .alert-status-circle-yellow {
    background-color: #f7b500;
  }
  .alert-status-circle-red {
    background-color: #ff0000;
  }
  .alert-status-circle-gray {
    background-color: #808080;
  }
  .alert-status-text {
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 150px;
    text-align: center;
    overflow: hidden;
  }
}
.specialMargin {
  margin: auto auto 20px auto;
}
</style>
