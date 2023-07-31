import * as React from 'react';
import type { Quote as Props } from '../types';

export default function QuoteDetails({ author, text }: Props) {
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
