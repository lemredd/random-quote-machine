import * as React from 'react';

import type { Quote } from './types';

import { initial_quote, fetch_quote } from './helpers/quotes';

import TweetBtn from './components/TweetBtn';
import NewQuoteBtn from './components/NewQuoteBtn';
import QuoteDetails from './components/QuoteDetails';

import './style.css';

export default function App() {
	const [quote, set_quote] = React.useState<Quote>(initial_quote);
	const [is_fetching_quote, set_is_fetching_quote] = React.useState<boolean>(false);

	async function handle_click() {
		set_is_fetching_quote(true);
		set_quote(await fetch_quote());

		set_is_fetching_quote(false);
	}

	return (
		<div id="quote-box" className="border border-dark-subtle rounded p-5">
			<QuoteDetails {...quote} is_fetching_quote={is_fetching_quote} />
			<div className="buttons mt-5 d-flex justify-content-between align-items-center">
				<TweetBtn {...quote} />
				<NewQuoteBtn on_click={handle_click} />
			</div>
		</div>
	);
}
