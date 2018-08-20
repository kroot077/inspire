import WeatherService from "./weather-service.js";

var ws = new WeatherService()

function drawWeather(curWeather) {

	document.getElementById("weather").innerHTML = `
	<div >
		<h3>${curWeather.name} ${curWeather.main.temp} ${curWeather.main.humidity}</h3>
	</div>
	`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		ws.getWeather(drawWeather)
	}

	getWeather() {
		ws.getWeather(drawWeather)
	}
}
