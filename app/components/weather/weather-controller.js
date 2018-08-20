import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather(weath) {
		weatherService.getWeather(weather => {
			console.log(weather);
			weatherService.getWeather(weath)
			//What can you do with this weather object?
		})
	}
}
