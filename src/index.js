import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);