<template>
  <div class="switch-container">
    <div class="right-text-switch" @click="setTrue()">
      <span>Modo Lista</span>
    </div>
  </div>
</template>

<script setup>
import { useMode } from "@/components/composables/lakeMode.js";
const props = defineProps({
  mode: {
    type: Object,
  },
});
const { setTrue } = useMode();
</script>

<style>
.switch-container {
  z-index: 30;
}
@media only screen and (min-width: 600px) {
  .switch-container {
    padding: 0 10px;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100px;
  }
}
@media only screen and (max-width: 600px) {
  .switch-container {
    padding: 0 10px;
    margin: auto;
  }
}
.right-text-switch {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
}
.right-text-switch:hover {
  color: var(--primary-color);
  transition: color 0.3s ease;
}
</style>
