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

const absoluteMin = {
  water_temperature: -5,
  pressure: 700,
  level: -2,
  at_temperature: -5,
  precipitation: 0,
};
const absoluteMax = {
  water_temperature: 15,
  pressure: 1100,
  level: 150,
  at_temperature: 15,
  precipitation: 100,
};

function defineMinAndMax(dataArray, minInterval, abs_min, abs_max) {
  let min = Math.min.apply(
    Math,
    dataArray.map(function (o) {
      return o.data;
    })
  );
  let max = Math.max.apply(
    Math,
    dataArray.map(function (o) {
      return o.data;
    })
  );
  if (max - min < minInterval) {
    let avg = dataArray.reduce((a, b) => a + b.data, 0) / dataArray.length;
    max = avg + minInterval / 2;
    if (max > abs_max) {
      max = abs_max;
    }
    min = avg - minInterval / 2;
    if (min < abs_min) {
      min = abs_min;
    }
  }
  if (max - min < minInterval) {
    if (min == abs_min) {
      max = abs_min + minInterval;
    } else {
      min = abs_max - minInterval;
    }
  }
  min = Math.floor(min);
  max = Math.ceil(max);
  return { min, max };
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

export function getLakeMeasurements(id, interval) {
  data = [];
  const apiUrlwithId = apiUrl + id + "/" + interval + "/";
  axios.defaults.headers.common.Authorization = `Api-Key ${apiKey}`;
  axios.defaults.params = {
    t: new Date().getTime(),
  };
  format = "YYYY-MM-DD HH:mm:ss";
  axios.get(apiUrlwithId).then((response) => {
    data = response.data.data;
    lakemeasurements.water_level = [];
    lakemeasurements.water_temperature = [];
    lakemeasurements.atmospheric_pressure = [];
    lakemeasurements.atmospheric_temperature = [];
    lakemeasurements.precipitation = [];
    lakemeasurements.alert_status = [];
    lakemeasurements.water_level_limits = {
      min: 0,
      max: 0,
    };
    lakemeasurements.water_temperature_limits = {
      min: 0,
      max: 0,
    };
    lakemeasurements.atmospheric_pressure_limits = {
      min: 0,
      max: 0,
    };
    lakemeasurements.atmospheric_temperature_limits = {
      min: 0,
      max: 0,
    };
    lakemeasurements.precipitation_limits = {
      min: 0,
      max: 0,
    };
    // Si no hay datos, acá se caería!!
    if (data.length === 0) {
      lakemeasurements.nodata = true;
    } else {
      lakemeasurements.nodata = false;
      lakemeasurements.start_date = moment(data[0].date).format(format);
      lakemeasurements.end_date = moment(data[data.length - 1].date).format(
        format
      );
      data.forEach((data, id) => {
        if (
          data.water_level >= absoluteMin.level &&
          data.water_level <= absoluteMax.level
        ) {
          lakemeasurements.water_level.push({
            id: data.id,
            date: moment(data.date).format(format),
            data: data.water_level,
          });
        }
        if (
          data.water_temperature >= absoluteMin.water_temperature &&
          data.water_temperature <= absoluteMax.water_temperature
        ) {
          lakemeasurements.water_temperature.push({
            id: data.id,
            date: moment(data.date).format(format),
            data: data.water_temperature,
          });
        }
        if (
          data.atmospheric_pressure >= absoluteMin.pressure &&
          data.atmospheric_pressure <= absoluteMax.pressure
        ) {
          lakemeasurements.atmospheric_pressure.push({
            id: data.id,
            date: moment(data.date).format(format),
            data: data.atmospheric_pressure,
          });
        }
        if (
          data.atmospheric_temperature >= absoluteMin.at_temperature &&
          data.atmospheric_temperature <= absoluteMax.at_temperature
        ) {
          lakemeasurements.atmospheric_temperature.push({
            id: data.id,
            date: moment(data.date).format(format),
            data: data.atmospheric_temperature,
          });
        }
        if (
          data.precipitation >= absoluteMin.precipitation &&
          data.precipitation <= absoluteMax.precipitation
        ) {
          lakemeasurements.precipitation.push({
            id: data.id,
            date: moment(data.date).format(format),
            data: data.precipitation,
          });
        }
        lakemeasurements.alert_status.push({
          id: data.id,
          date: moment(data.date).format(format),
          data: data.alert_status,
        });
      });
    }
    lakemeasurements.water_temperature_limits = defineMinAndMax(
      lakemeasurements.water_temperature,
      5,
      absoluteMin.water_temperature,
      absoluteMax.water_temperature
    );
    lakemeasurements.water_level_limits = defineMinAndMax(
      lakemeasurements.water_level,
      3,
      absoluteMin.level,
      absoluteMax.level
    );
    lakemeasurements.atmospheric_pressure_limits = defineMinAndMax(
      lakemeasurements.atmospheric_pressure,
      100,
      absoluteMin.pressure,
      absoluteMax.pressure
    );
    lakemeasurements.atmospheric_temperature_limits = defineMinAndMax(
      lakemeasurements.atmospheric_temperature,
      3,
      absoluteMin.at_temperature,
      absoluteMax.at_temperature
    );
    lakemeasurements.precipitation_limits = defineMinAndMax(
      lakemeasurements.precipitation,
      10,
      absoluteMin.precipitation,
      absoluteMax.precipitation
    );

    lakemeasurements.loaded = true;
  });
  return {
    lakemeasurements,
  };
}
