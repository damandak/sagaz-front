<template>
  <nav>
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

<style>
nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #e1e1e143;
  background-color: #0c0c0c;
  z-index: 10;
}

.nav-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  margin-right: 10px;
  padding: 20px 0 0 0;
  justify-content: space-between;
  height: calc(100%-20px);
}

.nav-account {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px 20px 10px 0;
  text-align: right;
}
</style>
