<template>
  <div class="switch-container">
    <div class="left-text-switch">
      <span>Modo Mapa</span>
    </div>
    <label class="switch">
      <input type="checkbox" @click="toggleMapMode" checked />
      <span class="slider round"></span>
    </label>
    <div class="right-text-switch">
      <span>Modo Lista</span>
    </div>
  </div>
</template>

<script setup>
import { useMode } from "@/components/composables/lakeMode.js";

const { toggleMapMode } = useMode();
</script>

<style>
@media only screen and (min-width: 600px) {
  .switch-container {
    padding: 0 10px;
    position: absolute;
    top: -20px;
    right: 0;
    width: 300px;
  }
}
@media only screen and (max-width: 600px) {
  .switch-container {
    padding: 0 10px;
    margin: auto;
  }
}
.left-text-switch,
.switch,
.right-text-switch {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
}
/* The switch - the box around the slider */
.switch {
  position: relative;
  width: 45px;
  height: 28px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-color);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: var(--primary-color-light);
}

input:focus + .slider {
  box-shadow: 0 0 1px var(--triadic-color-two);
}

input:checked + .slider:before {
  -webkit-transform: translateX(17px);
  -ms-transform: translateX(17px);
  transform: translateX(17px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 20px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
