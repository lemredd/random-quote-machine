import * as React from 'react';
import './style.css';

const quotes = [
  {
    author: 'Pablo Picasso',
    quote: 'Art is the lie that enables us to realize the truth.',
  },
  {
    author: 'Charlie Gilkey',
    quote: 'If it matters to you, you’ll find a way.',
  },
  {
    author: 'Richard Bach',
    quote: 'The best way to pay for a lovely moment is to enjoy it.',
  },
];

export default function App() {
  const [quote, setQuote] = React.useState('');
  return (
    <div id="quote-box">
      <h1 id="text">{quote}</h1>
      <p id="author">Start editing to see some magic happen :)</p>
      <button id="new-quote">New Quote</button>
    </div>
  );
}
