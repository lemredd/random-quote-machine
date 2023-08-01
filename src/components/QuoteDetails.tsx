import * as React from 'react';
import type { Quote } from '../types';

interface Props extends Quote {
	is_fetching_quote: boolean
}

export default function QuoteDetails({ author, text, is_fetching_quote }: Props) {
	const quote_details_container = React.useRef<HTMLDivElement>(null)
	React.useEffect(() => {
		if (is_fetching_quote) quote_details_container.current.style.opacity = "0"
		else quote_details_container.current.style.opacity = "1"
	}, [is_fetching_quote])
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
