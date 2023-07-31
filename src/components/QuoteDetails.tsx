import * as React from 'react';

interface Props {
  text: string;
  author: string;
}

export default function QuoteDetails(quote: Props) {
  return (
    <div>
      <h1 id="text">
        <strong>"{quote.text}"</strong>
      </h1>
      <p id="author" className="mt-3">
        {quote.author}
      </p>
    </div>
  );
}
