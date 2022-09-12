<template>
  <nav class="mainnav">
    <MainLogo></MainLogo>
    <div class="nav-wrapper">
      <NavButton to="/" content="LAGOS"></NavButton>
      <NavButton to="/about" content="SOBRE SAGAZ"></NavButton>
      <NavButton to="/contact" content="CONTACTO"></NavButton>
    </div>
  </nav>
</template>

<script>
import NavButton from "./NavButton.vue";
import MainLogo from "./MainLogo.vue";

export default {
  name: "MainNav",
  components: {
    NavButton,
    MainLogo,
  },
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
}
</style>
