import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import {Provider} from 'react-redux';
import {configureStore} from 'store';

import App from 'modules/App/App';

export const store = configureStore();

ReactDom.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);
