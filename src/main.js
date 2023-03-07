import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "./plugins/chart.js";
import i18n from "./i18n.js";

const app = createApp(App);

// Check if there is a saved locale in localStorage
const savedLocale = localStorage.getItem("language");

if (savedLocale) {
  // Set the saved locale as the current locale
  console.log(savedLocale);
  i18n.global.locale.value = savedLocale;
}

app.use(router).use(VueAxios, axios).use(i18n).mount("#app");
