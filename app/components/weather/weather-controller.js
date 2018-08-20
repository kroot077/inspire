import WeatherService from "./weather-service.js";

var ws = new WeatherService()

function drawWeather(curWeather) {

	document.getElementById("weather").innerHTML = `
	<div>
		<h3>${curWeather.data.main.temp}</h3>
	</div>
	`
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}

	getWeather() {
		ws.getWeather(weath => {
			drawWeather(weath)
			//What can you do with this weather object?
		})
	}
}
