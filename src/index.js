import React from 'react';
import ReactDOM from 'react-dom/client';
import { Suspense } from 'react';
import App from './App';
import './i18n'; // Import i18n configuration

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>
);
