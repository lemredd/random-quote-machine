import * as React from 'react';
import './style.css';

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
];

const get_random_quote = () =>
  quotes[Math.floor(Math.random() * (quotes.length - 1))];

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
