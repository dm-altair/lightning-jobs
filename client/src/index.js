import React from 'react';
import ReactDOM from 'react-dom';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import App from './components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
