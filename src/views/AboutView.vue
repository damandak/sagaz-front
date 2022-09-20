<template>
  <div class="main-content about-container">
    <div id="about-cover" class="about-section">
      <img src="@/assets/sagaz_const.png" alt="" id="big-logo" />
      <p>SAGAZ es un proyecto financiado por FONDEF</p>
      <p>IDeA I+D concurso 2021 (código ID21I10094).</p>
    </div>
    <div id="about-intro-text" class="about-section" v-if="intro_text">
      <p>
        El proyecto busca desarrollar un prototipo de sistema de alerta para
        reducir el impacto de las inundaciones relacionadas con los glaciares.
      </p>
      <!--
        <p>
          Estas inundaciones se conocen como GLOFs, acrónimo adoptado del inglés
          “Glacial Lake Outburst Flood”, que se puede traducir como Inundaciones por
          Vaciamiento de Lagos Glaciares. SAGAZ es un proyecto conjunto entre la
          Universidad de Aysén, Universidad de Chile, Universidad de la Frontera, el
          Centro de Investigación de Ecosistemas de la Patagonia (CIEP), la
          Universidad de Calgary (Canadá) y liderado por la Universidad de
          Magallanes. Además cuenta con el apoyo de CONAF Magallanes, la Dirección
          General de Aguas (DGA) región de Aysén, Naviera y Turismo Skorpios y
          Ecoturismo Patagonia Exploradores. SAGAZ es un acrónimo Sistema de Alertas
          Glaciares AvanZado. El sistema utiliza datos de una red de estaciones de
          monitoreo de lagos y pronóstico meteorológico para alimentar un modelo
          integrado glacio-hidrológico capaz de predecir el nivel futurode cada lago
          monitoreado. Usando esta información, así como los registroshistóricos de
          cada lago, SAGAZ calcula e informa un nivel de alertacualitativo (por
          ejemplo, verde, rojo). Este sistema de alerta permite informar a las
          autoridades y a la población sobre los períodos seguros y advertir sobre
          períodos con alta probabilidad de GLOF. Adicionalmente, si se detecta el
          inicio de un GLOF a través de un descenso anormal del nivel del lago,
          SAGAZ emite una alarma de GLOF, la que se enviará de manera automática a
          las personas e instituciones interesadas.
        </p>
      -->
    </div>
  </div>
</template>
<script setup>
var intro_text = false;
</script>
<style lang="scss" scoped>
.about-container {
  background-image: linear-gradient(
    -20deg,
    rgb(0 180 215 / 22%),
    #070707f1 75%
  );
  display: flex;
  #about-cover {
    #big-logo {
      height: 50vh;
      filter: hue-rotate(180deg);
    }
  }
  .about-section {
    width: 70%;
    margin: auto;
    max-width: 1300px;
    p {
      text-align: center;
      font-size: 35px;
    }
  }
}
@media screen and (max-width: 800px) {
  .about-container {
    .about-section {
      width: 100%;
      p {
        width: 100%;
        font-size: 22px;
      }
    }
  }
}
</style>
