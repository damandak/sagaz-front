<template>
  <nav class="mainnav">
    <MainLogo></MainLogo>
    <div class="nav-wrapper">
      <div class="buttongroup">
        <NavButton to="/" :content="$t('menu.home')"></NavButton>
        <NavButton to="/about" :content="$t('menu.about')"></NavButton>
        <NavButton to="/team" :content="$t('menu.team')"></NavButton>
        <NavButton to="/contact" :content="$t('menu.contact')"></NavButton>
        <button class="navbutton language-button">
          <img
            @click="toggleLanguage"
            v-if="$i18n.locale === 'es'"
            src="@/assets/british-flag.gif"
            alt="English"
          />
          <img
            @click="toggleLanguage"
            v-else
            src="@/assets/spanish-flag.gif"
            alt="Español"
          />
        </button>
      </div>
      <Icon :icon="menuFill" @click="toggleMenu" class="menu-icon"></Icon>
    </div>
  </nav>
</template>

<script setup>
import NavButton from "./NavButton.vue";
import MainLogo from "./MainLogo.vue";
import { watch } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import menuFill from "@iconify-icons/eva/menu-fill";

import i18n from "@/i18n";

const icons = {
  menuFill,
};

const route = useRoute();
// watcher for when route changes
watch(
  () => route.path,
  (newPath) => {
    const buttongroup = document.querySelector(".buttongroup");
    const mainnav = document.querySelector(".mainnav");
    if (buttongroup.classList.contains("show")) {
      buttongroup.classList.remove("show");
      mainnav.classList.remove("show");
    }
  }
);

const toggleMenu = () => {
  // add class show to buttongroup
  const buttongroup = document.querySelector(".buttongroup");
  const mainnav = document.querySelector(".mainnav");
  buttongroup.classList.toggle("show");
  mainnav.classList.toggle("show");
};

const toggleLanguage = () => {
  if (i18n.global.locale.value === "en") {
    i18n.global.locale.value = "es";
    localStorage.setItem("language", "es");
  } else {
    i18n.global.locale.value = "en";
    localStorage.setItem("language", "en");
  }
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
    margin-right: 10px;
    pointer-events: auto;
    cursor: pointer;
    z-index: 700;
    display: none;
    color: white;
    position: absolute;
    top: 5px;
    right: 0;
    transition: none;
    &:hover {
      color: var(--primary-color-light);
      transition: color 0.6s ease-out;
      background-position: -355%;
    }
  }
  .language-button {
    background: transparent;
    border: none;
    padding-bottom: 0;
    top: 3px;
    position: relative;
    cursor: pointer;
    img {
      border-radius: 2px;
      padding: 2px;
    }
    &:hover {
      img {
        opacity: 0.8;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .mainnav {
    height: 50px;
    transition: all 0.6s ease-in-out;
  }
  .mainnav.show {
    height: 100vh;
    transition: all 0.6s ease-in-out;
    .nav-wrapper {
      margin: 0;
      svg {
        top: 5px;
        transition: none;
      }
    }
  }
  .nav-wrapper {
    margin: 0px 10px 10px 0;
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    text-align: right;
    height: 100vh;
    svg {
      display: flex;
      transition: none;
    }
    .buttongroup {
      z-index: 60;
      display: flex;
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: #0f0f0fd6;
      width: 100%;
      transition: all 0.6s ease-out;
      transform: translateY(-100vh);
      a {
        font-size: 40px;
        text-decoration: none;
        text-shadow: none;
        &:hover {
          color: var(--primary-color-light);
          background-position: -355%;
        }
      }
    }
    .buttongroup.show {
      transform: translateY(0);
    }
  }
}
</style>
