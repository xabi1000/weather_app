import { apiData } from '../stores/api_data.js';
import { GET_IP } from './location.js';

const API_KEY = '5a282480b20842a1bea185535230209';

export async function getWeatherData(query) {
  try {
    if (query === undefined) {
      query = await GET_IP();
    }
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=7&aqi=no&alerts=no`;

    const response = await fetch(url);
    const data = await response.json();
    const { current, forecast, location } = data;

    const {
      last_updated_epoch,
      last_updated,
      temp_c,
      is_day,
      condition,
      wind_kph,
      wind_degree,
      pressure_mb,
      precip_mm,
      humidity,
      cloud,
      feelslike_c,
      vis_km,
      uv,
      gust_kph,
    } = current;

    const {
      name,
      region,
      country,
      lat,
      lon,
      tz_id,
      localtime_epoch,
      localtime,
    } = location;

    const { icon, text } = condition;

    apiData.set({
      last_updated_epoch,
      last_updated,
      temp_c,
      is_day,
      icon,
      text,
      wind_kph,
      wind_degree,
      pressure_mb,
      precip_mm,
      humidity,
      cloud,
      feelslike_c,
      vis_km,
      uv,
      gust_kph,
      name,
      region,
      country,
      lat,
      lon,
      tz_id,
      localtime_epoch,
      localtime,
      forecast,
    });

    return {
      last_updated_epoch,
      last_updated,
      temp_c,
      is_day,
      icon,
      text,
      wind_kph,
      wind_degree,
      pressure_mb,
      precip_mm,
      humidity,
      cloud,
      feelslike_c,
      vis_km,
      uv,
      gust_kph,
      name,
      region,
      country,
      lat,
      lon,
      tz_id,
      localtime_epoch,
      localtime,
      forecast,
    };
  } catch (error) {
    getWeatherData(undefined);
    console.error(
      'Error al obtener datos meteorológicos',
      error
    );
    return (
      'Error al obtener datos meteorológicos: ' + error
    );
  }
}
