import { reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import moment from "moment";

let data = reactive({
  data: [],
});
let format = "";

function showNewDate(date) {
  return new Date(Date.parse(date));
}

export const lakemeasurements = reactive({
  loaded: false,
  start_date: "",
  end_date: "",
  water_level: [],
  water_temperature: [],
  atmospheric_pressure: [],
  atmospheric_temperature: [],
  precipitation: [],
  alert_status: [],
});

var apiUrl = "";
var apiKey = "";

if (process.env.NODE_ENV === "development") {
  apiUrl = "http://localhost:8000/api/lakemeasurements/";
  apiKey = "4hJb3MIV.T7rL0Q4w4or5dnfr9qvRNX0bG0tdqoVS";
} else {
  apiUrl = "https://www.sagaz.org/api/lakemeasurements/";
  apiKey = process.env.VUE_APP_API_KEY;
}

export function getLakeMeasurements(id, interval) {
  const apiUrlwithId = apiUrl + id + "/" + interval + "/";
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  if (interval === "daily") {
    format = "YYYY-MM-DD HH:mm:ss";
  } else if (interval === "biweekly") {
    format = "YYYY-MM-DD HH:mm:ss";
  } else if (interval === "weekly") {
    format = "YYYY-MM-DD HH:mm:ss";
  } else if (interval === "monthly") {
    format = "YYYY-MM-DD HH:mm:ss";
  } else if (interval === "yearly") {
    format = "YYYY-MM-DD HH:mm:ss";
  } else {
    format = "YYYY-MM-DD HH:mm:ss";
  }
  axios.get(apiUrlwithId).then((response) => {
    data = response.data.data;
    lakemeasurements.water_level = [];
    lakemeasurements.water_temperature = [];
    lakemeasurements.atmospheric_pressure = [];
    lakemeasurements.atmospheric_temperature = [];
    lakemeasurements.precipitation = [];
    lakemeasurements.alert_status = [];
    // Si no hay datos, acá se caería!!
    if (data.length === 0) {
      console.log(
        "Error porque no hay datos que mostrar en el intervalo escogido"
      );
    }
    lakemeasurements.start_date = moment(data[0].date).format(format);
    lakemeasurements.end_date = moment(data[data.length - 1].date).format(
      format
    );
    data.forEach((data, id) => {
      lakemeasurements.water_level.push({
        id: data.id,
        date: moment(data.date).format(format),
        data: data.water_level,
      });
      lakemeasurements.water_temperature.push({
        id: data.id,
        date: moment(data.date).format(format),
        data: data.water_temperature,
      });
      lakemeasurements.atmospheric_pressure.push({
        id: data.id,
        date: moment(data.date).format(format),
        data: data.atmospheric_pressure,
      });
      lakemeasurements.atmospheric_temperature.push({
        id: data.id,
        date: moment(data.date).format(format),
        data: data.atmospheric_temperature,
      });
      lakemeasurements.precipitation.push({
        id: data.id,
        date: moment(data.date).format(format),
        data: data.precipitation,
      });
      lakemeasurements.alert_status.push({
        id: data.id,
        date: moment(data.date).format(format),
        data: data.alert_status,
      });
    });
    lakemeasurements.loaded = true;
  });
  return {
    lakemeasurements,
  };
}
