import { apiData } from '../stores/api_data.js';
import { GET_IP } from './location.js';

// const API_KEY = process.env.WEATHER_API_KEY;
const API_KEY = '5a282480b20842a1bea185535230209';
async function getUserLocation() {
  try {
    const userLocation = await GET_IP();
    return userLocation;
  } catch (error) {
    throw new Error(
      'Error al obtener la ubicación del usuario: ' +
        error.message
    );
  }
}

async function fetchData(query) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${query}&days=7&aqi=no&alerts=no`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        'Error al obtener datos meteorológicos: ' +
          response.statusText
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(
      'Error al obtener datos meteorológicos: ' +
        error.message
    );
  }
}

export async function getWeatherData(query) {
  try {
    const userLocation = await getUserLocation();
    const queryToUse = query || userLocation || 'London';
    const data = await fetchData(queryToUse);

    const {
      current,
      forecast,
      location: {
        name,
        region,
        country,
        lat,
        lon,
        tz_id,
        localtime_epoch,
        localtime,
      },
    } = data;

    const {
      last_updated_epoch,
      last_updated,
      condition: { text, icon },
      ...weatherData
    } = current;

    apiData.set({
      last_updated_epoch,
      last_updated,
      text,
      icon,
      ...weatherData,
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
      text,
      icon,
      ...weatherData,
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
    console.error(error.message);
    throw error; // Re-lanza el error para que otros lugares del código puedan manejarlo si es necesario
  }
}
