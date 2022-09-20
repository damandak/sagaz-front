<template>
  <router-link to="/" class="main-logo">
    <img class="logo" src="../../assets/white.png" alt="Sagaz" />
    <img class="logo-small" src="../../assets/white_sm.png" alt="Sagaz" />
  </router-link>
</template>
<script></script>
<style>
.main-logo {
  display: inline-block;
  height: 60px;
  pointer-events: auto;
}
img.logo {
  height: 50px;
  margin-top: 5px;
  margin-left: 15px;
  display: block;
}
img.logo-small {
  display: none;
}
@media screen and (max-width: 600px) {
  img.logo {
    display: none;
  }
  img.logo-small {
    display: block;
    height: 40px;
    margin-top: 10px;
    margin-left: 20px;
  }
}
</style>
