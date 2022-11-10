import { ref, reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export const lake = ref({
  lakedata: Object,
  loaded: false,
});

var apiUrl = "";
var apiKey = "";

if (process.env.NODE_ENV === "d") {
  apiUrl = "http://localhost:8000/api/lakes/";
  apiKey = "4hJb3MIV.T7rL0Q4w4or5dnfr9qvRNX0bG0tdqoVS";
} else {
  apiUrl = "https://www.sagaz.org/api/lakes/";
  apiKey = process.env.VUE_APP_API_KEY;
}

export function getLake(id) {
  const apiUrlwithId = apiUrl + id + "/";
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  // axios.defaults.headers.common["Cache-Control"] = "no-cache";
  // axios.defaults.pragma = "no-cache";
  // axios.defaults.expires = 0;
  axios.defaults.params = {
    t: new Date().getTime(),
  };
  axios.get(apiUrlwithId).then((response) => {
    lake.value.lakedata = response.data.data;
    lake.value.loaded = true;
  });
  return {
    lake,
  };
}

export function removeLake() {
  lake.value.lakedata = null;
  lake.value.loaded = false;
  return {
    lake,
  };
}
