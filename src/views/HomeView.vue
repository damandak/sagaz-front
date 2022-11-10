<template>
  <div class="main-content">
    <div class="lakes_container">
      <LakesMap :lakesdata="lakesdata" @refreshLakesData="refreshLakesData" />
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import LakesMap from "@/components/Lakes/LakesMap.vue";
import { getLakes, lakesdata } from "@/components/composables/getLakes.js";
import { onMounted, onUnmounted } from "vue";

var interval = setInterval(() => {
  refreshLakesData();
}, 60000);

function refreshLakesData() {
  getLakes();
}
onMounted(() => {
  getLakes();
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style>
.lakes_container {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0px;
  align-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
