
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './core';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './theme';
ReactDOM.render(
  <React.StrictMode>
    	<Provider store={store}>
      <ThemeProvider theme={theme}>
			  <App />
      </ThemeProvider>
		</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

