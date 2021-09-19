
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './core';
ReactDOM.render(
  <React.StrictMode>
    	<Provider store={store}>
			<App />
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

