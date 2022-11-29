<template>
  <div class="lake-icon-container">
    <img
      v-if="String(alertStatus).toLowerCase().startsWith('verde')"
      class="lake-icon"
      :src="iconUrlGreen"
      alt=""
    />
    <img
      v-else-if="String(alertStatus).toLowerCase().startsWith('amarillo')"
      class="lake-icon"
      :src="iconUrlYellow"
      alt=""
    />
    <img
      v-else-if="String(alertStatus).toLowerCase().startsWith('rojo')"
      class="lake-icon"
      :src="iconUrlRed"
      alt=""
    />
    <img v-else class="lake-icon" :src="iconUrlGray" alt="" />
  </div>
</template>
<script setup>
import { computed } from "vue";
const props = defineProps({
  alertStatus: {
    type: String,
    required: true,
  },
});
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
</script>
<style lang="scss">
.lake-icon-container {
  z-index: 200;
  padding: 5px;
  width: 30px;
  height: 30px;
  .lake-icon {
    width: 100%;
    height: 100%;
  }
}
</style>
