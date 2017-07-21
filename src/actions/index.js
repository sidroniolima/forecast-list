import axios from 'axios'

const API_KEY = '62d615c85a98efd33e0df247ad8d0f41'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city)
{
    const url = `${ROOT_URL}&q=${city},br`

    const request = axios.get(url)
    
    return {
            type: FETCH_WEATHER,
            payload: request
        }
}
