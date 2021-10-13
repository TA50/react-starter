
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './core';
import { ThemeProvider } from '@mui/material';
import * as MUI4Styles from "@material-ui/styles";
import { theme } from './theme';
ReactDOM.render(
  <React.StrictMode>
    <MUI4Styles.ThemeProvider theme={theme}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </MUI4Styles.ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

