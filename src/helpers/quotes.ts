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

export const get_random_quote = () =>
  quotes[Math.floor(Math.random() * (quotes.length - 1))];
