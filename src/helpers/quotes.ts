import { Quote } from "../types";

const BASE_API_URL = "https://api.quotable.io";
const GET_API_URL = `${BASE_API_URL}/quotes/random`

export async function fetch_quote(): Promise<Quote> {
	const { body } = await fetch(GET_API_URL);
	const reader = body.getReader();
	const { value } = await reader.read();
	const [ fetched_quote ] = JSON.parse(new TextDecoder().decode(value))

	return { "author": fetched_quote.author, "text": fetched_quote.content }
}
export let initial_quote: Quote = await fetch_quote()
