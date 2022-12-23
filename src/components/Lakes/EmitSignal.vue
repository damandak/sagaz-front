<template>
  <div
    v-if="String(stationStatus).toLowerCase().startsWith('operativa')"
    class="outer-circle-container"
  >
    <div class="outer-circle" :class="color" style="animation-delay: -3s"></div>
    <div class="outer-circle" :class="color" style="animation-delay: -2s"></div>
    <div class="outer-circle" :class="color" style="animation-delay: -1s"></div>
    <div class="outer-circle" :class="color" style="animation-delay: 0s"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  stationStatus: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss">
.outer-circle-container {
  .outer-circle {
    position: absolute;
    top: 0;
    height: 38px;
    width: 38px;
    border-radius: 50%;
    opacity: 0;
    z-index: -1;
    animation: scaleIn 4s infinite cubic-bezier(0.36, 0.11, 0.89, 0.32);
  }
  .green {
    background-color: #00cc95;
    // border: 1px solid #0283ae;
  }
  .yellow {
    background-color: #d4ba1f;
    // border: 1px solid #d4ba1f;
  }
  .red {
    background-color: #ed3446;
    // border: 1px solid #ed3446;
  }
  .gray {
    background-color: #8f8f8f;
    // border: 1px solid #8f8f8f;
  }
}
@keyframes scaleIn {
  from {
    transform: scale(0.5, 0.5);
    opacity: 0.5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
}
</style>
