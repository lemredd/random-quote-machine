import * as React from 'react';
import type { Quote } from '../types';

interface Props extends Quote {
	is_fetching_quote: boolean
}

export default function QuoteDetails({ author, text, is_fetching_quote }: Props) {
	const quote_details_container = React.useRef<HTMLDivElement>(null)
	return (
		<div>
			<h1 id="text">
				<strong>"{text}"</strong>
			</h1>
			<h4 id="author" className="mt-3">
				{author}
			</h4>
		</div>
	);
}
