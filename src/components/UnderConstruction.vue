<template>
  <div id="temp-container">
    <div class="flex-child">
      <div class="main-image" />
      <h1 class="titleunderconst">Sitio en Construcción</h1>
    </div>
  </div>
</template>
<style lang="scss">
.flex-child {
  margin: auto;
}
#temp-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    -45deg,
    #0f0f0f 0%,
    rgb(37, 37, 37) 20%,
    rgba(87, 111, 230, 1) 61%,
    rgba(59, 173, 227, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;
}
@media screen and (max-width: 1000px) {
  h1.titleunderconst {
    font-size: 25px;
  }
}
@media screen and (min-width: 1000px) {
  h1.titleunderconst {
    font-size: 50px;
  }
}
.underconst .main-image {
  width: 18vw;
  min-width: 300px;
  height: 18vw;
  min-height: 300px;
  background-image: url("../assets/sagaz_const.png");
  background-size: cover;
  background-position: center;
  margin: auto;
}
</style>
