import axios from 'axios'

const API_KEY = '1ca39b70b120251499f3eed9311015fb'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
 const url = `${ROOT_URL}&q=${city},us`
 const request = axios.get(url)
 
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
