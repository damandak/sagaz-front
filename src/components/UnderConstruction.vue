<template>
  <div id="temp-container">
    <div class="main-image" />
    <h1>Sitio en Construcción</h1>
  </div>
</template>

<style lang="scss">
#main-title {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: white;
  font-size: 80px;
  display: block;
  line-height: 80px;
  margin-bottom: 0px;
  background: linear-gradient(to right, #fff 40%, #04cdd1 50%, #fff 60%);
  background-size: 400% auto;
  color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 12s linear infinite;
  @keyframes shine {
    to {
      background-position: 400% center;
    }
  }
}
#coming-soon {
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 30px;
  color: white;
  margin-top: 10px;
}
.underconst {
  margin: auto;
  text-align: center;
  overflow: hidden;
}
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 25px;
  }
  .underconst {
    padding-top: 100px;
  }
}
@media screen and (min-width: 1000px) {
  h1 {
    font-size: 50px;
  }
  .underconst {
    padding-top: 200px;
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
