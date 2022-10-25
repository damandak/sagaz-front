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
  console.log("getLakes");
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  axios.get(apiUrl).then((response) => {
    lakesdata.lakes = response.data.data;
  });
  return {
    lakesdata,
  };
}
