import { reactive } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import moment from "moment";

var data = reactive({
  data: [],
});
let format = "";

function showNewDate(date) {
  return new Date(Date.parse(date));
}

export var lakemeasurements = reactive({
  loaded: false,
  nodata: false,
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

if (process.env.NODE_ENV === "d") {
  apiUrl = "http://localhost:8000/api/lakemeasurements/";
  apiKey = "4hJb3MIV.T7rL0Q4w4or5dnfr9qvRNX0bG0tdqoVS";
} else {
  apiUrl = "https://www.sagaz.org/api/lakemeasurements/";
  apiKey = process.env.VUE_APP_API_KEY;
}

export async function getLakeMeasurements(id, interval) {
  data = [];
  const apiUrlwithId = apiUrl + id + "/" + interval + "/";
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  format = "YYYY-MM-DD HH:mm:ss";
  console.log(apiUrlwithId);
  console.log(id);
  console.log(interval);
  const response = await axios.get(apiUrlwithId);
  if (response.data.status === "success") {
    console.log(response.data.data);
    data = response.data.data;
    console.log(data);
    lakemeasurements.water_level = [];
    lakemeasurements.water_temperature = [];
    lakemeasurements.atmospheric_pressure = [];
    lakemeasurements.atmospheric_temperature = [];
    lakemeasurements.precipitation = [];
    lakemeasurements.alert_status = [];
    // Si no hay datos, acá se caería!!
    if (data.length === 0) {
      lakemeasurements.nodata = true;
    } else {
      lakemeasurements.nodata = false;
      lakemeasurements.start_date = moment(data[0].date).format(format);
      lakemeasurements.end_date = moment(data[data.length - 1].date).format(
        format
      );
      console.log("solicitud de datos exitosa");
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
        console.log(moment(data.date).format(format));
      });
    }
    lakemeasurements.loaded = true;
  }
  return {
    lakemeasurements,
  };
}
