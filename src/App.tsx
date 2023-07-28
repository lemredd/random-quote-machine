import * as React from 'react';
import './style.css';

export default function App() {
  const [quote, setQuote] = React.useState('');
  return (
    <div id="quote-box">
      <h1 id="text">Hello StackBlitz!</h1>
      <p id="author">Start editing to see some magic happen :)</p>
      <button id="new-quote">New Quote</button>
    </div>
  );
}
