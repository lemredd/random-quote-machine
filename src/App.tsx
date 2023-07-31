import * as React from 'react';

import type { Quote } from './types';

import { get_random_quote } from './helpers/quotes';

import TweetBtn from './components/TweetBtn';
import NewQuoteBtn from './components/NewQuoteBtn';
import QuoteDetails from './components/QuoteDetails';

import './style.css';

export default function App() {
	const [quote, set_quote] = React.useState<Quote>(get_random_quote());

	const handle_click = () => set_quote(get_random_quote());

	return (
		<div id="quote-box" className="border border-dark-subtle rounded p-5">
			<QuoteDetails {...quote} />
			<div className="buttons mt-5 d-flex justify-content-between align-items-center">
				<TweetBtn {...quote} />
				<NewQuoteBtn on_click={handle_click} />
			</div>
		</div>
	);
}
