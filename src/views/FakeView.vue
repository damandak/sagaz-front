<template>
  <div class="full-container">
    <MainNav />
    <router-view />
  </div>
</template>

<script setup>
import MainNav from "../components/Nav/MainNav.vue";
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
  --primary-color: #0089a4;
  --primary-color-light: #00b4d7;
  --secondary-color: #d72300;
  --triadic-color-one: #a40089;
  --triadic-color-one-light: #d700b4;
  --triadic-color-two: #89a400;
  --triadic-color-two-light: #b4d700;
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
</style>
