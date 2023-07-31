import * as React from 'react';

import { get_random_quote } from './helpers/quotes';

import './style.css';

export default function App() {
  const [quote, set_quote] = React.useState(get_random_quote());
  const tweet_text_param = `text="${quote.text}" -${quote.author}`;
  const additional_params = 'hashtags=quotes&related=freecodecamp';
  const tweet_link = `https://twitter.com/intent/tweet?${additional_params}&${tweet_text_param}`;

  const handle_click = () => set_quote(get_random_quote());

  return (
    <div id="quote-box" className="border border-dark-subtle rounded p-5">
      <h1 id="text">
        <strong>"{quote.text}"</strong>
      </h1>
      <p id="author" className="mt-3">
        {quote.author}
      </p>
      <div className="buttons mt-5 d-flex justify-content-between align-items-center">
        <a href={tweet_link} id="tweet-quote" target="_blank">
          <i className="fa-brands fa-square-twitter fs-1"></i>
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
