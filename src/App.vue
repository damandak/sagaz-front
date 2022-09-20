<template>
  <div v-if="underConstruction" class="full-container full_under">
    <button class="hidden-button" @click="click()"></button>
    <UnderConstruction class="underconst" />
  </div>
  <div v-else class="full-container">
    <MainNav />
    <transition name="fade_comp" mode="out-in">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainNav from "./components/Nav/MainNav.vue";
import UnderConstruction from "./components/UnderConstruction.vue";

var underConstruction = ref(true);

function click() {
  console.log("click");
  underConstruction.value = false;
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;900&display=swap");
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e1e1e1;
}

:root {
  --primary-color: #0082ad;
  --primary-color-light: #52cff8;
  --secondary-color: #f03e6e;
  --secondary-color-light: #ce7b91;
}

.full-container {
  width: 100%;
  height: 100vh;
}
.full_under {
  overflow: hidden;
  background-image: linear-gradient(
    -45deg,
    #0f0f0f 0%,
    rgb(37, 37, 37) 20%,
    rgba(87, 111, 230, 1) 61%,
    rgba(59, 173, 227, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;
}
@keyframes AnimateBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.main-content {
  position: absolute;
  width: 100%;
  padding-top: 0px;
  overflow-y: visible;
  overflow-x: hidden;
  height: 100vh;
  background-size: cover;
  background-position: center;
  margin: 0;
  text-align: center;
}
.section-title {
  margin-top: 60px;
}
.hidden-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  border: none;
}
.fade_comp-enter-active,
.fade_comp-leave-active {
  transition: opacity 0.5s ease;
}
.fade_comp-enter-from,
.fade_comp-leave-to {
  opacity: 0;
}
</style>
