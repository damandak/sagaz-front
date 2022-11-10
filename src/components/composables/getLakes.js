import { reactive } from "vue";
import axios from "axios";

export var lakesdata = reactive({
  lakes: [],
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

export function getLakes() {
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  // axios.defaults.headers.common["Cache-Control"] = "no-cache";
  // axios.defaults.pragma = "no-cache";
  // axios.defaults.expires = 0;
  axios.defaults.params = {
    t: new Date().getTime(),
  };
  axios.get(apiUrl).then((response) => {
    lakesdata.lakes = response.data.data;
  });
  return {
    lakesdata,
  };
}
