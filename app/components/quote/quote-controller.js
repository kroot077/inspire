import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(quote) {

	document.getElementById("quote").innerHTML += `
	<p class="theQuote">${quote.data.main.quote}</p>
	<p class="author">${quote.data.main.author}</p>
	`

}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote(draw) {
		qs.getQuote(function (quote) {
			draw(drawQuote)
		})
	}
}
