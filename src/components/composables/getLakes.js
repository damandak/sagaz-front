import { reactive } from "vue";
import axios from "axios";

const lakesdata = reactive({
  lakes: [],
});

const apiUrl = "http://localhost:8000/api/lakes/";
const apiKey = "4hJb3MIV.T7rL0Q4w4or5dnfr9qvRNX0bG0tdqoVS";

export function getLakes() {
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  axios.get(apiUrl).then((response) => {
    lakesdata.lakes = response.data.data;
  });
  return {
    lakesdata,
  };
}
