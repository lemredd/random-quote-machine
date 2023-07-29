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

export default function App() {
  const [quote, set_quote] = React.useState(get_random_quote());
  const tweet_text_param = `text="${quote.text}" -${quote.author}`;
  const additional_params = 'hashtags=quotes&related=freecodecamp';
  const tweet_link = `https://twitter.com/intent/tweet?${additional_params}&${tweet_text_param}`;

  const handle_click = () => set_quote(get_random_quote());

  return (
    <div id="quote-box">
      <h1 id="text">{quote.text}</h1>
      <p id="author">{quote.author}</p>
      <div className="buttons">
        <a href={tweet_link} id="tweet-quote" target="_blank">
          tweet quote {/* TODO: use twitter/x icon */}
        </a>
        <button
          id="new-quote"
          onClick={handle_click}
          className="btn btn-outline-primary"
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
