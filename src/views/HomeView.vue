<template>
  <div class="main-content">
    <div class="lakes_container">
      <div class="lakes_content">
        <ModeSwitch />
        <transition name="fade" mode="out-in">
          <LakesList :lakesdata="lakesdata" v-if="mapMode" />
          <LakesMap :lakesdata="lakesdata" v-else />
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
// @ is an alias to /src
import ModeSwitch from "@/components/MainContainer/ModeSwitch.vue";
import LakesList from "@/components/Lakes/LakesList.vue";
import LakesMap from "@/components/Lakes/LakesMap.vue";
import { getLakes } from "@/components/composables/getLakes.js";
import { useMode } from "@/components/composables/lakeMode.js";

const { mapMode } = useMode();
const { lakesdata } = getLakes();
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
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
</style>
