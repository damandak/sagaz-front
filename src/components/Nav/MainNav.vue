<template>
  <nav class="mainnav">
    <MainLogo></MainLogo>
    <div class="nav-wrapper">
      <Icon :icon="menuFill" />
      <NavButton to="/" content="LAGOS"></NavButton>
      <NavButton to="/about" content="SOBRE SAGAZ"></NavButton>
      <NavButton to="/team" content="EQUIPO"></NavButton>
      <NavButton to="/contact" content="CONTACTO"></NavButton>
    </div>
  </nav>
</template>

<script setup>
import NavButton from "./NavButton.vue";
import MainLogo from "./MainLogo.vue";

import { Icon } from "@iconify/vue";
import menuFill from "@iconify-icons/eva/menu-fill";

const icons = {
  menuFill,
};
</script>

<style scoped lang="scss">
.mainnav {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  //border-bottom: 1px solid #e1e1e14d;
  background-color: transparent;
  z-index: 60;
  pointer-events: none;
  /*background-image: linear-gradient(-45deg, #0f0f0f, #141414 95%);*/
}

.nav-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  margin: 20px 10px 15px 0;
  justify-content: space-between;
  svg {
    font-size: 45px;
    pointer-events: auto;
    cursor: pointer;
    z-index: 70;
    display: none;
    color: white;
    &:hover {
      color: var(--primary-color-light);
      transition: 0.6s ease-out;
      background-position: -355%;
    }
  }
}
@media screen and (max-width: 600px) {
  .mainnav {
    height: 50px;
  }
  .nav-wrapper {
    margin: 5px 10px 10px 0;
    svg {
      display: inline-block;
    }
  }
  .navbutton {
    display: none;
  }
}
</style>
