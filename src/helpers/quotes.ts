import { Quote } from "../types";

const BASE_API_URL = "https://api.quotable.io";
const GET_API_URL = `${BASE_API_URL}/quotes/random`

const quotes = [
	{
		author: 'Pablo Picasso',
		text: 'Art is the lie that enables us to realize the truth.',
	},
	{
		author: 'Charlie Gilkey',
		text: 'If it matters to you, you’ll find a way.',
	},
	{
		author: 'Richard Bach',
		text: 'The best way to pay for a lovely moment is to enjoy it.',
	},
	{
		author: 'George Orwell',
		text: 'In a time of deceit telling the truth is a revolutionary act.',
	},
	{
		author: 'Oscar Wilde',
		text: 'A work of art is the unique result of a unique temperament.',
	},
	{
		author: 'John Barrymore',
		text: 'A man is not old until regrets take the place of dreams.',
	},
];

const get_random_quote = () =>
	quotes[Math.floor(Math.random() * (quotes.length - 1))];

export async function fetch_quote(): Promise<Quote> {
	try {
		const { body } = await fetch(GET_API_URL);
		const reader = body.getReader();
		const { value } = await reader.read();
		const [ fetched_quote ] = JSON.parse(new TextDecoder().decode(value))

		return { "author": fetched_quote.author, "text": fetched_quote.content }
	} catch (error) {
		return get_random_quote()
	}
}
export const initial_quote = get_random_quote();
