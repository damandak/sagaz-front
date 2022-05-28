<template>
  <div id="temp-container">
    <h1 id="main-title">PROYECTO SAGAZ</h1>
    <h4 id="coming-soon">PRONTO</h4>
  </div>
</template>

<style lang="scss">
#temp-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background-color: #f5f5f5;
  // display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
}
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
</style>
