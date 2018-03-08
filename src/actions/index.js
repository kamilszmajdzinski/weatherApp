import axios from 'axios';

const API_KEY = '31156bb478d9760252bbd6bba40674a9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city}`;
	const request = axios.get(url);
	console.log(request);


	return {
		type: FETCH_WEATHER,
		payload: request
	};
}