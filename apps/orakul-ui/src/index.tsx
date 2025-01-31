import React from 'react';
import ReactDOM from 'react-dom/client';
import './vars.css';
import './index.css';
import App from './components/App/App';
import Extension from './components/App/Extension';
import config from './services/config';

console.log('Running standalone', config.standalone);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {config.standalone ? <App /> : <Extension />}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
