import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import theme from './theme';

import { ThemeProvider } from '@material-ui/styles';

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
