import WeatherService from "./weather-service.js";

var ws = new WeatherService()

function drawWeather(curWeather) {

	class setToC {
		let toC = Math.floor(this.getWeather.weatherApi.res.data * 1.8) - 459.67
		localStorage.setItem('weather', JSON.stringify(toC))
	}

	class setToF {
		let toF = Math.floor(this.getWeather.weatherApi.res.data * 1.8) - 459.67
		localStorage.setItem('weather', JSON.stringify(toF))
	}

	let weatherK = 
}

export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather(weath) {
		ws.getWeather(weather => {
			console.log(weather);
			ws.getWeather(weath)
			//What can you do with this weather object?
		})
	}
}
