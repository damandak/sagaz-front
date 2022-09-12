<template>
  <div class="main-content">
    <div class="lakes_container">
      <!--<ModeSwitch v-if="!mapMode" />-->
      <transition name="fade" mode="out-in">
        <LakesList :lakesdata="lakesdata" v-if="mapMode" />
        <LakesMap :lakesdata="lakesdata" v-else />
      </transition>
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
import { onActivated } from "vue";

var { mapMode } = useMode();
const { setFalse } = useMode();
const { lakesdata } = getLakes();

onActivated(() => {
  setFalse();
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
