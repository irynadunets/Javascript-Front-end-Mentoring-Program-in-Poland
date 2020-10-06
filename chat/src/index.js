import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './components/App/App';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
  <Provider store={store}>
  <ErrorBoundary>
     <App />
  </ErrorBoundary>
  </Provider> ,
   document.getElementById('root')
 );
