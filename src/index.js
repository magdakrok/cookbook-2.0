import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/Root';
import AppProviders from 'providers/AppProviders';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
