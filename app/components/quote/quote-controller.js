import QuoteService from "./quote-service.js";

let qs = new QuoteService

function drawQuote(quote) {

	document.getElementById("quote").innerHTML += `
	<div class="row text-center">
		<div class="col-sm-12">
			<p class="theQuote">${quote.quote}</p>
			<p class="author"> - ${quote.author}</p>
		</div>
	</div>
	`

}

export default class QuoteController {

	constructor() {
		qs.getQuote(drawQuote)
	}

	getQuote() {
		qs.getQuote(drawQuote)
	}

}
