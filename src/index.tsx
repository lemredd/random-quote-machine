import * as React from 'react';
import { createRoot } from 'react-dom/client';

// If repo is cloned locally, this error won't appear.
import App from './App.tsx';

const rootElement = document.getElementById('root') as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
