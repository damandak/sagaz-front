<template>
  <div class="main-content contact-container">
    <div id="contact-cover" class="contact-section">
      <img src="@/assets/sagaz_const.png" alt="" id="big-logo" />
      <p class="contact-intro-text">Envíanos un correo a</p>
      <p class="contact-mail">info@sagaz.org</p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.contact-container {
  background-image: linear-gradient(
    -45deg,
    rgb(0 180 215 / 92%),
    #070707f1 95%
  );
  display: flex;
  #contact-cover {
    #big-logo {
      height: 50vh;
      filter: hue-rotate(180deg);
    }
  }
  .contact-section {
    width: 70%;
    margin: auto;
    max-width: 1300px;
    p {
      text-align: center;
      font-size: 30px;
    }
    .contact-intro-text {
      line-height: 15px;
    }
    .contact-mail {
      line-height: 17px;
      font-size: 35px;
      font-weight: 900;
    }
  }
}
@media screen and (max-width: 800px) {
  .contact-container {
    .contact-section {
      width: 100%;
      p {
        width: 100%;
        font-size: 22px;
      }
      .contact-mail {
        font-size: 28px;
      }
    }
  }
}
</style>
