<template>
  <div class="full-container">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/">Inicio</router-link> |
        <router-link to="/about">Sobre SAGAZ</router-link> |
        <router-link to="/about">GLOFs</router-link> |
        <router-link to="/about">Lagos</router-link>
      </div>
      <div class="nav-account">
        <router-link to="/login">Registro / Iniciar Sesión</router-link>
      </div>
    </nav>
    <div id="main-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;900&display=swap");
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e1e1e1;
}

nav {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  padding: 30px 0 10px 0;
  vertical-align: middle;
  border-bottom: 1px solid #e1e1e143;

  background-color: #000000;

  a {
    font-weight: bold;
    background-image: linear-gradient(to right, #04cdd1 20%, #ffffff 50%);
    background-size: 500%;
    background-position: -400%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;

    &.router-link-exact-active {
      color: #04cdd1;
    }
  }
  a:hover {
    //color: #04cdd1;
    transition: 0.6s ease-out;
    background-position: -355%;
  }
}

.nav-account {
  display: inline-block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px 20px 10px 0;
}
#main-container {
  position: absolute;
  width: 100%;
  margin-top: 90px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 91px);
  background-image: url("~@/assets/yelo.jpg");
  background-size: cover;
  background-position: center;
}
</style>
