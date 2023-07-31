import * as React from "react";

export default function NewQuoteBtn({ on_click }) {
	return (
			<button
				id="new-quote"
				onClick={on_click}
				className="btn btn-outline-primary"
			>
				New Quote
			</button>
	)
}
