import { reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export const lake = reactive({
  lakedata: Object,
  loaded: false,
});

const apiUrl = "http://localhost:8000/api/lakes/";
const apiKey = "4hJb3MIV.T7rL0Q4w4or5dnfr9qvRNX0bG0tdqoVS";

export function getLake(id) {
  const apiUrlwithId = apiUrl + id + "/";
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  axios.get(apiUrlwithId).then((response) => {
    lake.lakedata = response.data.data;
    lake.loaded = true;
  });
  return {
    lake,
  };
}
